export enum AccountType {
  NORMAL = 'NORMAL',
  TRIAL = 'TRIAL',
  PRO = 'PRO',
}

export class AccountTypeSpec {
  constructor(public title: string, public description: string, public cssClass: string) {}
}

export const AccountTypeData = new Map<AccountType, AccountTypeSpec>([
  [
    AccountType.NORMAL,
    new AccountTypeSpec(
      $localize`:@@ACCOUNT_TYPE_NORMAL_TITLE:NORMAL`,
      $localize`:@@ACCOUNT_TYPE_NORMAL_DESCRIPTION:NORMAL`,
      'account-type-normal',
    ),
  ],
  [
    AccountType.TRIAL,
    new AccountTypeSpec(
      $localize`:@@ACCOUNT_TYPE_TRIAL_TITLE:TRIAL`,
      $localize`:@@ACCOUNT_TYPE_TRIAL_DESCRIPTION:TRIAL`,
      'account-type-trial',
    ),
  ],
  [
    AccountType.PRO,
    new AccountTypeSpec($localize`:@@ACCOUNT_TYPE_PRO_TITLE:PRO`, $localize`:@@ACCOUNT_TYPE_PRO_DESCRIPTION:PRO`, 'account-type-pro'),
  ],
]);

export class AccountTypeListSpec {
  constructor(public accountType: AccountType, public title: string, public description: string, public cssClass: string) {}
}

export const AccountTypeList: AccountTypeListSpec[] = [...AccountTypeData.entries()].map((entry) => ({
  accountType: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="NORMAL">NORMAL</mat-option>
    <mat-option value="TRIAL">TRIAL</mat-option>
    <mat-option value="PRO">PRO</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="NORMAL"><ng-container i18n="@@ACCOUNT_TYPE_NORMAL_TITLE">NORMAL</ng-container></mat-option>
    <mat-option value="TRIAL"><ng-container i18n="@@ACCOUNT_TYPE_TRIAL_TITLE">TRIAL</ng-container></mat-option>
    <mat-option value="PRO"><ng-container i18n="@@ACCOUNT_TYPE_PRO_TITLE">PRO</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="NORMAL"><ng-container i18n="@@ACCOUNT_TYPE_NORMAL_TITLE">NORMAL</ng-container> (NORMAL)</mat-option>
    <mat-option value="TRIAL"><ng-container i18n="@@ACCOUNT_TYPE_TRIAL_TITLE">TRIAL</ng-container> (TRIAL)</mat-option>
    <mat-option value="PRO"><ng-container i18n="@@ACCOUNT_TYPE_PRO_TITLE">PRO</ng-container> (PRO)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option [value]="option.key" *ngFor="let option of AccountTypeData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of AccountTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of AccountTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/
