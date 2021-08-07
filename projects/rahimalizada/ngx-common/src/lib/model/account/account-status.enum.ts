export enum AccountStatus {
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

export class AccountStatusSpec {
  constructor(public title: string, public description: string, public cssClass: string) {}
}

export const AccountStatusData = new Map<AccountStatus, AccountStatusSpec>([
  [
    AccountStatus.PENDING_VERIFICATION,
    new AccountStatusSpec(
      $localize`:@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE:PENDING_VERIFICATION`,
      $localize`:@@ACCOUNT_STATUS_PENDING_VERIFICATION_DESCRIPTION:PENDING_VERIFICATION`,
      'account-status-pending-verification',
    ),
  ],
  [
    AccountStatus.PENDING_ACTIVATION,
    new AccountStatusSpec(
      $localize`:@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE:PENDING_ACTIVATION`,
      $localize`:@@ACCOUNT_STATUS_PENDING_ACTIVATION_DESCRIPTION:PENDING_ACTIVATION`,
      'account-status-pending-activation',
    ),
  ],
  [
    AccountStatus.ACTIVE,
    new AccountStatusSpec(
      $localize`:@@ACCOUNT_STATUS_ACTIVE_TITLE:ACTIVE`,
      $localize`:@@ACCOUNT_STATUS_ACTIVE_DESCRIPTION:ACTIVE`,
      'account-status-active',
    ),
  ],
  [
    AccountStatus.DISABLED,
    new AccountStatusSpec(
      $localize`:@@ACCOUNT_STATUS_DISABLED_TITLE:DISABLED`,
      $localize`:@@ACCOUNT_STATUS_DISABLED_DESCRIPTION:DISABLED`,
      'account-status-disabled',
    ),
  ],
]);

export class AccountStatusListSpec {
  constructor(public accountStatus: AccountStatus, public title: string, public description: string, public cssClass: string) {}
}

export const AccountStatusList: AccountStatusListSpec[] = [...AccountStatusData.entries()].map((entry) => ({
  accountStatus: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION">PENDING_VERIFICATION</mat-option>
    <mat-option value="PENDING_ACTIVATION">PENDING_ACTIVATION</mat-option>
    <mat-option value="ACTIVE">ACTIVE</mat-option>
    <mat-option value="DISABLED">DISABLED</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE">PENDING_VERIFICATION</ng-container></mat-option>
    <mat-option value="PENDING_ACTIVATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE">PENDING_ACTIVATION</ng-container></mat-option>
    <mat-option value="ACTIVE"><ng-container i18n="@@ACCOUNT_STATUS_ACTIVE_TITLE">ACTIVE</ng-container></mat-option>
    <mat-option value="DISABLED"><ng-container i18n="@@ACCOUNT_STATUS_DISABLED_TITLE">DISABLED</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE">PENDING_VERIFICATION</ng-container> (PENDING_VERIFICATION)</mat-option>
    <mat-option value="PENDING_ACTIVATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE">PENDING_ACTIVATION</ng-container> (PENDING_ACTIVATION)</mat-option>
    <mat-option value="ACTIVE"><ng-container i18n="@@ACCOUNT_STATUS_ACTIVE_TITLE">ACTIVE</ng-container> (ACTIVE)</mat-option>
    <mat-option value="DISABLED"><ng-container i18n="@@ACCOUNT_STATUS_DISABLED_TITLE">DISABLED</ng-container> (DISABLED)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option [value]="option.key" *ngFor="let option of AccountStatusData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of AccountStatusData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of AccountStatusData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/
