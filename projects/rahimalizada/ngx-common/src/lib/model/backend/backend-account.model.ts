import { AbstractAccount } from './../account/abstract-account.model';

export interface BackendAccount extends AbstractAccount<unknown> {
  passwordHash: string;
}
