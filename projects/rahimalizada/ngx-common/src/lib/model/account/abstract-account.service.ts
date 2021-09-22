import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbstractAuthService } from '../../auth/abstract-auth.service';
import { AbstractRestService } from '../../rest/abstract-rest.service';
import { AbstractAccount } from './abstract-account.model';
import { AuthResult } from './auth-result.model';
import { PasswordChangeRequest } from './password-change-request.model';

export class AbstractAccountService<S extends AbstractAccount<T, U>, T, U> extends AbstractRestService<S> {
  constructor(httpClient: HttpClient, basePath: string, protected authService: AbstractAuthService<S>) {
    super(httpClient, basePath);
  }

  changePassword(value: PasswordChangeRequest, recaptchaSiteKey: string, recaptchaResponse: string): Observable<AuthResult<S>> {
    return this.httpClient.post<AuthResult<S>>(
      `${this.basePath}/password`,
      value,
      AbstractAuthService.buildRecaptchaOptions(recaptchaSiteKey, recaptchaResponse),
    );
  }

  resendActivationCode(): Observable<void> {
    return this.httpClient.post<void>(`${this.basePath}/resend-activation-code`, {});
  }

  activateAccount(code: string, recaptchaSiteKey: string, recaptchaResponse: string): Observable<AuthResult<S>> {
    return this.httpClient.post<AuthResult<S>>(
      `${this.basePath}/activate`,
      code,
      AbstractAuthService.buildRecaptchaOptions(recaptchaSiteKey, recaptchaResponse),
    );
  }

  postOne(account: S): Observable<void> {
    return super.postOne(account).pipe(
      switchMap(() => this.authService.renewToken()),
      map(() => void 0),
    );
  }

  updateAccount(account: S): Observable<void> {
    return this.postOne(account);
  }
}
