export enum BalanceOpType {
  DEPOSIT = 'DEPOSIT',
  EXPENSE = 'EXPENSE',
  WITHDRAWAL = 'WITHDRAWAL',
}

export class BalanceOpTypeSpec {
  constructor(public cssClass: string, public deposit: boolean, public title: string, public textClass: string) {}
}

export const BalanceOpTypeData = new Map<BalanceOpType, BalanceOpTypeSpec>([
  [
    BalanceOpType.DEPOSIT,
    new BalanceOpTypeSpec('balance-op-type-deposit', true, $localize`:@@BALANCE_OP_TYPE_DEPOSIT_TITLE:Deposit`, 'text-primary'),
  ],
  [
    BalanceOpType.EXPENSE,
    new BalanceOpTypeSpec(
      'balance-op-type-expense',
      false,
      $localize`:@@BALANCE_OP_TYPE_EXPENSE_TITLE:Product/Service payment`,
      'text-success',
    ),
  ],
  [
    BalanceOpType.WITHDRAWAL,
    new BalanceOpTypeSpec('balance-op-type-withdrawal', false, $localize`:@@BALANCE_OP_TYPE_WITHDRAWAL_TITLE:Withdrawal`, 'text-info'),
  ],
]);

export class BalanceOpTypeListSpec {
  constructor(
    public balanceOpType: BalanceOpType,
    public cssClass: string,
    public deposit: boolean,
    public title: string,
    public textClass: string,
  ) {}
}

export const BalanceOpTypeList: BalanceOpTypeListSpec[] = [...BalanceOpTypeData.entries()].map((entry) => ({
  balanceOpType: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpType" placeholder="BalanceOpType" formControlName="balanceOpType">
    <mat-option value="DEPOSIT">Deposit</mat-option>
    <mat-option value="EXPENSE">Product/Service payment</mat-option>
    <mat-option value="WITHDRAWAL">Withdrawal</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpType" placeholder="BalanceOpType" formControlName="balanceOpType">
    <mat-option value="DEPOSIT"><ng-container i18n="@@BALANCE_OP_TYPE_DEPOSIT_TITLE">Deposit</ng-container></mat-option>
    <mat-option value="EXPENSE"><ng-container i18n="@@BALANCE_OP_TYPE_EXPENSE_TITLE">Product/Service payment</ng-container></mat-option>
    <mat-option value="WITHDRAWAL"><ng-container i18n="@@BALANCE_OP_TYPE_WITHDRAWAL_TITLE">Withdrawal</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpType" placeholder="BalanceOpType" formControlName="balanceOpType">
    <mat-option value="DEPOSIT"><ng-container i18n="@@BALANCE_OP_TYPE_DEPOSIT_TITLE">Deposit</ng-container> (DEPOSIT)</mat-option>
    <mat-option value="EXPENSE"><ng-container i18n="@@BALANCE_OP_TYPE_EXPENSE_TITLE">Product/Service payment</ng-container> (EXPENSE)</mat-option>
    <mat-option value="WITHDRAWAL"><ng-container i18n="@@BALANCE_OP_TYPE_WITHDRAWAL_TITLE">Withdrawal</ng-container> (WITHDRAWAL)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceOpType" placeholder="BalanceOpType" formControlName="balanceOpType">
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTypeData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceOpTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="BALANCE_OP_TYPE_DEPOSIT_TITLE">
      <segment state="translated">
        <source>Deposit</source>
        <target>Depozit</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TYPE_EXPENSE_TITLE">
      <segment state="translated">
        <source>Product/Service payment</source>
        <target>Mal/Xidmət ödənişi</target>
      </segment>
    </unit>
    <unit id="BALANCE_OP_TYPE_WITHDRAWAL_TITLE">
      <segment state="translated">
        <source>Withdrawal</source>
        <target>Çıxarılma</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
