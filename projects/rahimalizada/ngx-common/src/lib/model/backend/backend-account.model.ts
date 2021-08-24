import { WithCredentials } from '../account/with-credentials.model';

export interface BackendAccount extends WithCredentials<string> {
  id: string;
  firstName: string;
  lastName: string;
  passwordHash: string;
  roles: string[];
  permissions: string[];
}
