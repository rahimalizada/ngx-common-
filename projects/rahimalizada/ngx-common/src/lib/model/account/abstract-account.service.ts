import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRestService } from '../../rest/abstract-rest.service';
import { AbstractAccount } from './abstract-account.model';
import { AccountRole } from './account-role.model';
import { AuthResult } from './auth-result.model';

@Injectable({
  providedIn: 'root',
})
export class AbstractAccountService<T extends AbstractAccount<U>, U extends AccountRole> extends AbstractRestService<T> {
  constructor(httpClient: HttpClient, basePath: string) {
    super(httpClient, basePath);
  }

  changePassword(value: { currentPassword: string; newPassword: string }): Observable<AuthResult<T>> {
    return this.httpClient.post<AuthResult<T>>(`${this.basePath}/password`, value);
  }
}
