import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractRestService } from '../../rest/abstract-rest.service';
import { AuthResult } from '../account/auth-result.model';
import { BackendAccount } from './backend-account.model';

@Injectable({
  providedIn: 'root',
})
export class BackendAccountService extends AbstractRestService<BackendAccount> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '/api/backend-account');
  }

  changePassword(value: { currentPassword: string; newPassword: string }): Observable<AuthResult<BackendAccount>> {
    return this.httpClient.post<AuthResult<BackendAccount>>(`${this.basePath}/password`, value);
  }
}
