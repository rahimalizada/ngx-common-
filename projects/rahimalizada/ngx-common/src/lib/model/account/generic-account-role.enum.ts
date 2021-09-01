export enum GenericAccountRole {
  USER = 'USER',
}

export class GenericAccountRoleSpec {
  constructor(public cssClass: string, public title: string, public description: string, public permissions: string[]) {}
}

export const GenericAccountRoleData = new Map<GenericAccountRole, GenericAccountRoleSpec>([
  [
    GenericAccountRole.USER,
    new GenericAccountRoleSpec(
      'generic-account-role-user',
      $localize`:@@GENERIC_ACCOUNT_ROLE_USER_TITLE:User`,
      $localize`:@@GENERIC_ACCOUNT_ROLE_USER_DESCRIPTION:User role`,
      [],
    ),
  ],
]);

export class GenericAccountRoleListSpec {
  constructor(
    public genericAccountRole: GenericAccountRole,
    public cssClass: string,
    public title: string,
    public description: string,
    public permissions: string[],
  ) {}
}

export const GenericAccountRoleList: GenericAccountRoleListSpec[] = [...GenericAccountRoleData.entries()].map((entry) => ({
  genericAccountRole: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericAccountRole" placeholder="GenericAccountRole" formControlName="genericAccountRole">
    <mat-option value="USER">USER</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericAccountRole" placeholder="GenericAccountRole" formControlName="genericAccountRole">
    <mat-option value="USER"><ng-container i18n="@@GENERIC_ACCOUNT_ROLE_USER_TITLE">User</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericAccountRole" placeholder="GenericAccountRole" formControlName="genericAccountRole">
    <mat-option value="USER"><ng-container i18n="@@GENERIC_ACCOUNT_ROLE_USER_TITLE">User</ng-container> (USER)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericAccountRole" placeholder="GenericAccountRole" formControlName="genericAccountRole">
    <mat-option [value]="option.key" *ngFor="let option of GenericAccountRoleData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenericAccountRoleData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenericAccountRoleData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="GENERIC_ACCOUNT_ROLE_USER_TITLE">
      <segment state="translated">
        <source>User</source>
        <target>İstifadəçi</target>
      </segment>
    </unit>
    <unit id="GENERIC_ACCOUNT_ROLE_USER_DESCRIPTION">
      <segment state="translated">
        <source>User role</source>
        <target>İstifadəçi hesab rolu</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
