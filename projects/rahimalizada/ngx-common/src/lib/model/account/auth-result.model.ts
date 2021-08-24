import { AbstractAccount } from './abstract-account.model';

export interface AuthResult<T extends AbstractAccount<any>> {
  subject: T;
  token: string;
  refreshToken: string;
  permissions: string[];
}
