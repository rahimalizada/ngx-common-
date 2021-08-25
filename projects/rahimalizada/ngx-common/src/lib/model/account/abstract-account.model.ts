import { HttpFile } from '../httpstorage/http-file.model';
import { WithID } from '../with-id.model';
import { AccountStatus } from './account-status.enum';
import { AccountType } from './account-type.enum';
import { Credentials } from './credentials.model';
import { Gender } from './gender.enum';
import { TOSStatus } from './tos-status.enum';
import { WithPermissions } from './with-permissions.model';

export interface AbstractAccount<T> extends WithID<string>, WithPermissions {
  id: string;
  email: string;
  accountStatus: AccountStatus;
  accountType: AccountType;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  credentials: Credentials;
  roles: T[];
  tosStatus: TOSStatus;
  profilePicture?: HttpFile;
  password?: string;
  created: Date;
  updated: Date;
  notes?: string;
}
