import { AbstractAccount } from './../account/abstract-account.model';
import { AccountRole } from './../account/account-role.model';

export interface BackendAccount extends AbstractAccount<AccountRole> {
  passwordHash: string;
}
