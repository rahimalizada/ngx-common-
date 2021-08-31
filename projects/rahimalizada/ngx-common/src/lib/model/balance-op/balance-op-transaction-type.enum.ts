export enum BalanceOpTransactionType {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_ACCOUNT = 'BANK_ACCOUNT',
}

export class BalanceOpTransactionTypeSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const BalanceOpTransactionTypeData = new Map<BalanceOpTransactionType, BalanceOpTransactionTypeSpec>([
  [
    BalanceOpTransactionType.CASH,
    new BalanceOpTransactionTypeSpec(
      'balance-op-transaction-type-cash',
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_CASH_TITLE:Cash`,
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_CASH_DESCRIPTION:Cash based transaction`,
    ),
  ],
  [
    BalanceOpTransactionType.CREDIT_CARD,
    new BalanceOpTransactionTypeSpec(
      'balance-op-transaction-type-credit-card',
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_TITLE:Credit card`,
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_DESCRIPTION:Credit card based transaction`,
    ),
  ],
  [
    BalanceOpTransactionType.BANK_ACCOUNT,
    new BalanceOpTransactionTypeSpec(
      'balance-op-transaction-type-bank-account',
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_TITLE:Bank account`,
      $localize`:@@BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_DESCRIPTION:Bank account based transaction`,
    ),
  ],
]);

export class BalanceOpTransactionTypeListSpec {
  constructor(
    public balanceOpTransactionType: BalanceOpTransactionType,
    public cssClass: string,
    public title: string,
    public description: string,
  ) {}
}

export const BalanceOpTransactionTypeList: BalanceOpTransactionTypeListSpec[] = [...BalanceOpTransactionTypeData.entries()].map(
  (entry) => ({ balanceOpTransactionType: entry[0], ...entry[1] }),
);

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpTransactionType" placeholder="BalanceOpTransactionType" formControlName="balanceOpTransactionType">
    <mat-option value="CASH">CASH</mat-option>
    <mat-option value="CREDIT_CARD">CREDIT_CARD</mat-option>
    <mat-option value="BANK_ACCOUNT">BANK_ACCOUNT</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpTransactionType" placeholder="BalanceOpTransactionType" formControlName="balanceOpTransactionType">
    <mat-option value="CASH"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_CASH_TITLE">CASH</ng-container></mat-option>
    <mat-option value="CREDIT_CARD"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_TITLE">CREDIT_CARD</ng-container></mat-option>
    <mat-option value="BANK_ACCOUNT"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_TITLE">BANK_ACCOUNT</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpTransactionType" placeholder="BalanceOpTransactionType" formControlName="balanceOpTransactionType">
    <mat-option value="CASH"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_CASH_TITLE">CASH</ng-container> (CASH)</mat-option>
    <mat-option value="CREDIT_CARD"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_TITLE">CREDIT_CARD</ng-container> (CREDIT_CARD)</mat-option>
    <mat-option value="BANK_ACCOUNT"><ng-container i18n="@@BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_TITLE">BANK_ACCOUNT</ng-container> (BANK_ACCOUNT)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpTransactionType" placeholder="BalanceOpTransactionType" formControlName="balanceOpTransactionType">
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTransactionTypeData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTransactionTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTransactionTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CASH_TITLE">
      <segment state="translated">
        <source>Cash</source>
        <target>Nağd</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CASH_DESCRIPTION">
      <segment state="translated">
        <source>Cash based transaction</source>
        <target>Nağd vəsait əməliyyatı</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_TITLE">
      <segment state="translated">
        <source>Credit card</source>
        <target>Bank kartı</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CREDIT_CARD_DESCRIPTION">
      <segment state="translated">
        <source>Credit card based transaction</source>
        <target>Bank kartı ilə əməliyyat</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_TITLE">
      <segment state="translated">
        <source>Bank account</source>
        <target>Bank account</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_BANK_ACCOUNT_DESCRIPTION">
      <segment state="translated">
        <source>Bank account based transaction</source>
        <target>Bank hesabı ilə əməliyyat</target>
      </segment>
    </unit>
  </file>
</xliff>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: RU
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="ru">
  <file id="ngi18n" original="ng.template">
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CASH_TITLE">
      <segment state="translated">
        <source>Cash</source>
        <target>Наличные</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TRANSACTION_TYPE_CASH_DESCRIPTION">
      <segment state="translated">
        <source>Cash based transaction</source>
        <target>Операция с наличными</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
