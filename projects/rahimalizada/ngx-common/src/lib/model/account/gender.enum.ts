export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export class GenderSpec {
  constructor(public title: string, public cssClass: string) {}
}

export const GenderData = new Map<Gender, GenderSpec>([
  [Gender.MALE, new GenderSpec($localize`:@@GENDER_MALE_TITLE:MALE`, 'gender-male')],
  [Gender.FEMALE, new GenderSpec($localize`:@@GENDER_FEMALE_TITLE:FEMALE`, 'gender-female')],
]);

export class GenderListSpec {
  constructor(public gender: Gender, public title: string, public cssClass: string) {}
}

export const GenderList: GenderListSpec[] = [...GenderData.entries()].map((entry) => ({ gender: entry[0], ...entry[1] }));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE">MALE</mat-option>
    <mat-option value="FEMALE">FEMALE</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE"><ng-container i18n="@@GENDER_MALE_TITLE">MALE</ng-container></mat-option>
    <mat-option value="FEMALE"><ng-container i18n="@@GENDER_FEMALE_TITLE">FEMALE</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="gender" placeholder="Gender" formControlName="gender">
    <mat-option value="MALE"><ng-container i18n="@@GENDER_MALE_TITLE">MALE</ng-container> (MALE)</mat-option>
    <mat-option value="FEMALE"><ng-container i18n="@@GENDER_FEMALE_TITLE">FEMALE</ng-container> (FEMALE)</mat-option>
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
