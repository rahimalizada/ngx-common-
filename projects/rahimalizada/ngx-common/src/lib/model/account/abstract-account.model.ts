import { HttpFile } from '../httpstorage/http-file.model';
import { Model } from '../model.model';
import { AccountStatus } from './account-status.enum';
import { AccountType } from './account-type.enum';
import { Credentials } from './credentials.model';
import { Gender } from './gender.enum';
import { TOSStatus } from './tos-status.enum';
import { WithPermissions } from './with-permissions.model';

export interface AbstractAccount<S, T> extends Model<string, T>, WithPermissions {
  email: string;
  accountStatus: AccountStatus;
  accountType: AccountType;
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  credentials: Credentials;
  roles: S[];
  tosStatus: TOSStatus;
  locale: string;
  profilePicture?: HttpFile;
  password?: string;
}
