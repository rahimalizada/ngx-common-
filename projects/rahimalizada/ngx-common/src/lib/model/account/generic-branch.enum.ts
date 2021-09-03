export enum GenericBranch {
  DEFAULT = 'DEFAULT',
}

export class GenericBranchSpec {
  constructor(public cssClass: string, public title: string) {}
}

export const GenericBranchData = new Map<GenericBranch, GenericBranchSpec>([
  [GenericBranch.DEFAULT, new GenericBranchSpec('generic-branch-default', $localize`:@@GENERIC_BRANCH_DEFAULT_TITLE:Default branch`)],
]);

export class GenericBranchListSpec {
  constructor(public genericBranch: GenericBranch, public cssClass: string, public title: string) {}
}

export const GenericBranchList: GenericBranchListSpec[] = [...GenericBranchData.entries()].map((entry) => ({
  genericBranch: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericBranch" placeholder="GenericBranch" formControlName="genericBranch">
    <mat-option value="DEFAULT">DEFAULT</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericBranch" placeholder="GenericBranch" formControlName="genericBranch">
    <mat-option value="DEFAULT"><ng-container i18n="@@GENERIC_BRANCH_DEFAULT_TITLE">Default branch</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericBranch" placeholder="GenericBranch" formControlName="genericBranch">
    <mat-option value="DEFAULT"><ng-container i18n="@@GENERIC_BRANCH_DEFAULT_TITLE">Default branch</ng-container> (DEFAULT)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="genericBranch" placeholder="GenericBranch" formControlName="genericBranch">
    <mat-option [value]="option.key" *ngFor="let option of GenericBranchData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenericBranchData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenericBranchData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="GENERIC_BRANCH_DEFAULT_TITLE">
      <segment state="translated">
        <source>Default branch</source>
        <target>Standart filial</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
