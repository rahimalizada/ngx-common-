import { BalanceOpTransactionType } from './balance-op-transaction-type.enum';
import { BalanceOpType } from './balance-op-type.enum';
import { BalanceType } from './balance-type.enum';
import { Currency } from './../currency/currency.enum';
import { Model } from './../model.model';

export interface AbstractBalanceOp<T> extends Model<string, T> {
  id: string;
  accountId: string;
  createdById: string;
  amount: number;
  currency: Currency;
  balanceType: BalanceType;
  balanceOpType: BalanceOpType;
  transactionType: BalanceOpTransactionType;
  balance: number;
  referenceId?: string;
  notes?: string;
}
