export enum GenericAccountRole {
  USER = 'USER',
}

export class GenericAccountRoleSpec {
  constructor(public title: string, public description: string, public permissions: string[], public cssClass: string) {}
}

export const GenericAccountRoleData = new Map<GenericAccountRole, GenericAccountRoleSpec>([
  [
    GenericAccountRole.USER,
    new GenericAccountRoleSpec(
      $localize`:@@GENERIC_ACCOUNT_ROLE_USER_TITLE:USER`,
      $localize`:@@GENERIC_ACCOUNT_ROLE_USER_DESCRIPTION:USER`,
      [],
      'generic-account-role-user',
    ),
  ],
]);

export class GenericAccountRoleListSpec {
  constructor(
    public genericAccountRole: GenericAccountRole,
    public title: string,
    public description: string,
    public permissions: string[],
    public cssClass: string,
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
    <mat-option value="USER"><ng-container i18n="@@GENERIC_ACCOUNT_ROLE_USER_TITLE">USER</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericAccountRole" placeholder="GenericAccountRole" formControlName="genericAccountRole">
    <mat-option value="USER"><ng-container i18n="@@GENERIC_ACCOUNT_ROLE_USER_TITLE">USER</ng-container> (USER)</mat-option>
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
