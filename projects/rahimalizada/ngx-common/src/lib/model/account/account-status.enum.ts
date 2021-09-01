export enum AccountStatus {
  PENDING_VERIFICATION = 'PENDING_VERIFICATION',
  PENDING_ACTIVATION = 'PENDING_ACTIVATION',
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
}

export class AccountStatusSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const AccountStatusData = new Map<AccountStatus, AccountStatusSpec>([
  [
    AccountStatus.PENDING_VERIFICATION,
    new AccountStatusSpec(
      'account-status-pending-verification',
      $localize`:@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE:Pending verification`,
      $localize`:@@ACCOUNT_STATUS_PENDING_VERIFICATION_DESCRIPTION:Account will become active once checked by administation`,
    ),
  ],
  [
    AccountStatus.PENDING_ACTIVATION,
    new AccountStatusSpec(
      'account-status-pending-activation',
      $localize`:@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE:Pending activation`,
      $localize`:@@ACCOUNT_STATUS_PENDING_ACTIVATION_DESCRIPTION:User has not submitted account activation code`,
    ),
  ],
  [
    AccountStatus.ACTIVE,
    new AccountStatusSpec(
      'account-status-active',
      $localize`:@@ACCOUNT_STATUS_ACTIVE_TITLE:Active`,
      $localize`:@@ACCOUNT_STATUS_ACTIVE_DESCRIPTION:Account is active`,
    ),
  ],
  [
    AccountStatus.DISABLED,
    new AccountStatusSpec(
      'account-status-disabled',
      $localize`:@@ACCOUNT_STATUS_DISABLED_TITLE:Disabled`,
      $localize`:@@ACCOUNT_STATUS_DISABLED_DESCRIPTION:Account is disabled and cannot be used until enabled by administration`,
    ),
  ],
]);

export class AccountStatusListSpec {
  constructor(public accountStatus: AccountStatus, public cssClass: string, public title: string, public description: string) {}
}

export const AccountStatusList: AccountStatusListSpec[] = [...AccountStatusData.entries()].map((entry) => ({
  accountStatus: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION">Pending verification</mat-option>
    <mat-option value="PENDING_ACTIVATION">Pending activation</mat-option>
    <mat-option value="ACTIVE">Active</mat-option>
    <mat-option value="DISABLED">Disabled</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE">Pending verification</ng-container></mat-option>
    <mat-option value="PENDING_ACTIVATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE">Pending activation</ng-container></mat-option>
    <mat-option value="ACTIVE"><ng-container i18n="@@ACCOUNT_STATUS_ACTIVE_TITLE">Active</ng-container></mat-option>
    <mat-option value="DISABLED"><ng-container i18n="@@ACCOUNT_STATUS_DISABLED_TITLE">Disabled</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="accountStatus" placeholder="AccountStatus" formControlName="accountStatus">
    <mat-option value="PENDING_VERIFICATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE">Pending verification</ng-container> (PENDING_VERIFICATION)</mat-option>
    <mat-option value="PENDING_ACTIVATION"><ng-container i18n="@@ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE">Pending activation</ng-container> (PENDING_ACTIVATION)</mat-option>
    <mat-option value="ACTIVE"><ng-container i18n="@@ACCOUNT_STATUS_ACTIVE_TITLE">Active</ng-container> (ACTIVE)</mat-option>
    <mat-option value="DISABLED"><ng-container i18n="@@ACCOUNT_STATUS_DISABLED_TITLE">Disabled</ng-container> (DISABLED)</mat-option>
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

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="ACCOUNT_STATUS_PENDING_VERIFICATION_TITLE">
      <segment state="translated">
        <source>Pending verification</source>
        <target>Yoxlanılmayıb</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_PENDING_VERIFICATION_DESCRIPTION">
      <segment state="translated">
        <source>Account will become active once checked by administation</source>
        <target>Hesab administrasiya tərəfindən yoxlanıldıqdan sonra aktiv olacaq</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_PENDING_ACTIVATION_TITLE">
      <segment state="translated">
        <source>Pending activation</source>
        <target>Deaktiv</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_PENDING_ACTIVATION_DESCRIPTION">
      <segment state="translated">
        <source>User has not submitted account activation code</source>
        <target>İstifadəçi aktivasiya kodunu təsdiq etməyib</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_ACTIVE_TITLE">
      <segment state="translated">
        <source>Active</source>
        <target>Aktiv</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_ACTIVE_DESCRIPTION">
      <segment state="translated">
        <source>Account is active</source>
        <target>Hesab aktivdir</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_DISABLED_TITLE">
      <segment state="translated">
        <source>Disabled</source>
        <target>Qapalı</target>
      </segment>
    </unit>
    <unit id="ACCOUNT_STATUS_DISABLED_DESCRIPTION">
      <segment state="translated">
        <source>Account is disabled and cannot be used until enabled by administration</source>
        <target>Hesab qapalıdır və yalnız administrasiya tərəfindən aktiv edildikdən sonra istifadə edilə bilər</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
