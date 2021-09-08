import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AbstractAccount } from '../model/account/abstract-account.model';
import { AbstractAuthService } from './abstract-auth.service';

export abstract class AbstractJwtInterceptor<T extends AbstractAccount<unknown, unknown>> implements HttpInterceptor {
  constructor(
    private clientId: string,
    private authService: AbstractAuthService<T>,
    private router: Router,
    private appOrigin: string,
    private tokenRenewalFailRedirect: string,
    private defaultLanguages: string[],
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authResult = this.authService.authResultSubject.value ? this.authService.authResultSubject.value : null;
    const token = authResult?.token;
    const tokenExpired = token ? this.authService.isTokenExpired(token) : true;
    const isAuthPath = req.url.search(this.authService.apiPath) === 0; // starts with /auth/...

    const withHeaders = this.addHeaders(req, authResult?.subject);

    if (isAuthPath) {
      return next.handle(withHeaders);
    } else if (token && tokenExpired) {
      //
      console.log('Token has expired, renewing the token and trying again');
      return this.tryWithRenewedToken(withHeaders, next);
    } else if (token) {
      //
      return next.handle(this.addToken(withHeaders)).pipe(
        catchError((error: unknown) => {
          if (error instanceof HttpErrorResponse && error.status === 401) {
            console.log('Request failed with 401 status code, renewing the token and trying again');
            return this.tryWithRenewedToken(withHeaders, next);
          } else {
            return throwError(error);
          }
        }),
      );
    }

    return next.handle(withHeaders);
  }

  tryWithRenewedToken(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.renewToken().pipe(
      switchMap(() => {
        console.log('Retrying request with renewed token');
        return next.handle(this.addToken(req)).pipe(
          catchError((error) => {
            if (error instanceof HttpErrorResponse && error.status === 401) {
              console.log('Request retry with renewed token failed with 401 status code, logging out');
            }
            return throwError(error);
          }),
        );
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log('Token renewal failed with 401 status code, logging out');
          // If there is an exception calling 'renewToken', No need to logout though, renewToken pipe did that already
          // this.authService.logout();
          this.router.navigate([this.tokenRenewalFailRedirect]);
        }
        return throwError(error);
      }),
    );
  }

  addHeaders(req: HttpRequest<unknown>, account?: T): HttpRequest<unknown> {
    const languages = account ? [account.locale].concat(this.defaultLanguages) : this.defaultLanguages;
    const languageHeader = [...new Set(languages)].join(', ');

    return req.clone({
      setHeaders: {
        'Accept-Language': languageHeader,
        'X-Client-Id': this.clientId,
        'X-App-Origin': this.appOrigin,
        'X-Timestamp': new Date().toISOString(),
      },
      withCredentials: true,
    });
  }

  private addToken(req: HttpRequest<unknown>): HttpRequest<unknown> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.authResultSubject.value?.token}`,
      },
    });
  }
}
