export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class GenderSpec {
  constructor(public cssClass: string, public title: string) {}
}

export const GenderData = new Map<Gender, GenderSpec>([
  [Gender.MALE, new GenderSpec('gender-male', $localize`:@@GENDER_MALE_TITLE:Male`)],
  [Gender.FEMALE, new GenderSpec('gender-female', $localize`:@@GENDER_FEMALE_TITLE:Female`)],
]);

export class GenderListSpec {
  constructor(public gender: Gender, public cssClass: string, public title: string) {}
}

export const GenderList: GenderListSpec[] = [...GenderData.entries()].map((entry) => ({ gender: entry[0], ...entry[1] }));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE">Male</mat-option>
    <mat-option value="FEMALE">Female</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE"><ng-container i18n="@@GENDER_MALE_TITLE">Male</ng-container></mat-option>
    <mat-option value="FEMALE"><ng-container i18n="@@GENDER_FEMALE_TITLE">Female</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE"><ng-container i18n="@@GENDER_MALE_TITLE">Male</ng-container> (MALE)</mat-option>
    <mat-option value="FEMALE"><ng-container i18n="@@GENDER_FEMALE_TITLE">Female</ng-container> (FEMALE)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option [value]="option.key" *ngFor="let option of GenderData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenderData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of GenderData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="GENDER_MALE_TITLE">
      <segment state="translated">
        <source>Male</source>
        <target>Kişı</target>
      </segment>
    </unit>
    <unit id="GENDER_FEMALE_TITLE">
      <segment state="translated">
        <source>Female</source>
        <target>Qadın</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
