import { WithCredentials } from '../account/with-credentials.model';

export interface AuthResult<T extends WithCredentials<S>, S> {
  subject: T;
  token: string;
  refreshToken: string;
  permissions: string[];
}
