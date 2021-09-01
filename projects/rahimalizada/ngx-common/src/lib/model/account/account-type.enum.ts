export enum AccountType {
  STANDARD = 'STANDARD',
  TRIAL = 'TRIAL',
  PRO = 'PRO',
  PAID = 'PAID',
}

export class AccountTypeSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const AccountTypeData = new Map<AccountType, AccountTypeSpec>([
  [
    AccountType.STANDARD,
    new AccountTypeSpec(
      'account-type-standard',
      $localize`:@@ACCOUNT_TYPE_STANDARD_TITLE:Standard`,
      $localize`:@@ACCOUNT_TYPE_STANDARD_DESCRIPTION:Standard account type`,
    ),
  ],
  [
    AccountType.TRIAL,
    new AccountTypeSpec(
      'account-type-trial',
      $localize`:@@ACCOUNT_TYPE_TRIAL_TITLE:Trial`,
      $localize`:@@ACCOUNT_TYPE_TRIAL_DESCRIPTION:Trial account type`,
    ),
  ],
  [
    AccountType.PRO,
    new AccountTypeSpec(
      'account-type-pro',
      $localize`:@@ACCOUNT_TYPE_PRO_TITLE:Pro`,
      $localize`:@@ACCOUNT_TYPE_PRO_DESCRIPTION:Pro account type`,
    ),
  ],
  [
    AccountType.PAID,
    new AccountTypeSpec(
      'account-type-paid',
      $localize`:@@ACCOUNT_TYPE_PAID_TITLE:Paid`,
      $localize`:@@ACCOUNT_TYPE_PAID_DESCRIPTION:Paid account type`,
    ),
  ],
]);

export class AccountTypeListSpec {
  constructor(public accountType: AccountType, public cssClass: string, public title: string, public description: string) {}
}

export const AccountTypeList: AccountTypeListSpec[] = [...AccountTypeData.entries()].map((entry) => ({
  accountType: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="STANDARD">STANDARD</mat-option>
    <mat-option value="TRIAL">TRIAL</mat-option>
    <mat-option value="PRO">PRO</mat-option>
    <mat-option value="PAID">PAID</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="STANDARD"><ng-container i18n="@@ACCOUNT_TYPE_STANDARD_TITLE">STANDARD</ng-container></mat-option>
    <mat-option value="TRIAL"><ng-container i18n="@@ACCOUNT_TYPE_TRIAL_TITLE">TRIAL</ng-container></mat-option>
    <mat-option value="PRO"><ng-container i18n="@@ACCOUNT_TYPE_PRO_TITLE">PRO</ng-container></mat-option>
    <mat-option value="PAID"><ng-container i18n="@@ACCOUNT_TYPE_PAID_TITLE">PAID</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountType" placeholder="AccountType" formControlName="accountType">
    <mat-option value="STANDARD"><ng-container i18n="@@ACCOUNT_TYPE_STANDARD_TITLE">STANDARD</ng-container> (STANDARD)</mat-option>
    <mat-option value="TRIAL"><ng-container i18n="@@ACCOUNT_TYPE_TRIAL_TITLE">TRIAL</ng-container> (TRIAL)</mat-option>
    <mat-option value="PRO"><ng-container i18n="@@ACCOUNT_TYPE_PRO_TITLE">PRO</ng-container> (PRO)</mat-option>
    <mat-option value="PAID"><ng-container i18n="@@ACCOUNT_TYPE_PAID_TITLE">PAID</ng-container> (PAID)</mat-option>
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

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="ACCOUNT_TYPE_STANDARD_TITLE">
      <segment state="translated">
        <source>Standard</source>
        <target>Standart</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_STANDARD_DESCRIPTION">
      <segment state="translated">
        <source>Standard account type</source>
        <target>Standart hesab</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_TRIAL_TITLE">
      <segment state="translated">
        <source>Trial</source>
        <target>Sınaq</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_TRIAL_DESCRIPTION">
      <segment state="translated">
        <source>Trial account type</source>
        <target>Sınaq müddətli hesab</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_PRO_TITLE">
      <segment state="translated">
        <source>Pro</source>
        <target>Peşəkar</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_PRO_DESCRIPTION">
      <segment state="translated">
        <source>Pro account type</source>
        <target>Peşəkar hesab növü</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_PAID_TITLE">
      <segment state="translated">
        <source>Paid</source>
        <target>Ödənişli</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_TYPE_PAID_DESCRIPTION">
      <segment state="translated">
        <source>Paid account type</source>
        <target>Ödənişli hesab növü</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
