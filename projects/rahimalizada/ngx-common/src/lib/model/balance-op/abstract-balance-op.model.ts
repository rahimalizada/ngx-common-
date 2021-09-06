import { Currency } from './../currency/currency.enum';
import { Model } from './../model.model';
import { BalanceOpTransactionType } from './balance-op-transaction-type.enum';
import { BalanceOpType } from './balance-op-type.enum';
import { BalanceType } from './balance-type.enum';

export interface AbstractBalanceOp<T> extends Model<string, T> {
  accountId: string;
  createdById: string;
  amount: number;
  currency: Currency;
  balanceType: BalanceType;
  balanceOpType: BalanceOpType;
  transactionType: BalanceOpTransactionType;
  balance: number;
  referenceId?: string;
}
