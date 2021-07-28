export enum Country {
  TURKEY = 'TURKEY',
  USA = 'USA',
  UKRAINE = 'UKRAINE',
  AZERBAIJAN = 'AZERBAIJAN',
}

export class CountrySpec {
  constructor(
    public title: string,
    public description: string,
    public numericCode: string,
    public currency: string,
    public currencySymbol: string,
    public cssClass: string,
  ) {}
}

export const CountryData = new Map<Country, CountrySpec>([
  [
    Country.TURKEY,
    new CountrySpec(
      $localize`:@@COUNTRY_TURKEY_TITLE:TURKEY`,
      $localize`:@@COUNTRY_TURKEY_DESCRIPTION:TURKEY`,
      '792',
      'TRY',
      '₺',
      'country-turkey',
    ),
  ],
  [
    Country.USA,
    new CountrySpec($localize`:@@COUNTRY_USA_TITLE:USA`, $localize`:@@COUNTRY_USA_DESCRIPTION:USA`, '840', 'USD', '$', 'country-usa'),
  ],
  [
    Country.UKRAINE,
    new CountrySpec(
      $localize`:@@COUNTRY_UKRAINE_TITLE:UKRAINE`,
      $localize`:@@COUNTRY_UKRAINE_DESCRIPTION:UKRAINE`,
      '804',
      'UAH',
      '₴',
      'country-ukraine',
    ),
  ],
  [
    Country.AZERBAIJAN,
    new CountrySpec(
      $localize`:@@COUNTRY_AZERBAIJAN_TITLE:AZERBAIJAN`,
      $localize`:@@COUNTRY_AZERBAIJAN_DESCRIPTION:AZERBAIJAN`,
      '031',
      'AZN',
      '₼',
      'country-azerbaijan',
    ),
  ],
]);

export class CountryListSpec {
  constructor(
    public country: Country,
    public title: string,
    public description: string,
    public numericCode: string,
    public currency: string,
    public currencySymbol: string,
    public cssClass: string,
  ) {}
}

export const CountryList: CountryListSpec[] = [...CountryData.entries()].map((entry) => ({ country: entry[0], ...entry[1] }));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="country" placeholder="Country" formControlName="country">
    <mat-option value="TURKEY">TURKEY</mat-option>
    <mat-option value="USA">USA</mat-option>
    <mat-option value="UKRAINE">UKRAINE</mat-option>
    <mat-option value="AZERBAIJAN">AZERBAIJAN</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="country" placeholder="Country" formControlName="country">
    <mat-option value="TURKEY"><ng-container i18n="@@COUNTRY_TURKEY_TITLE">TURKEY</ng-container></mat-option>
    <mat-option value="USA"><ng-container i18n="@@COUNTRY_USA_TITLE">USA</ng-container></mat-option>
    <mat-option value="UKRAINE"><ng-container i18n="@@COUNTRY_UKRAINE_TITLE">UKRAINE</ng-container></mat-option>
    <mat-option value="AZERBAIJAN"><ng-container i18n="@@COUNTRY_AZERBAIJAN_TITLE">AZERBAIJAN</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="country" placeholder="Country" formControlName="country">
    <mat-option value="TURKEY"><ng-container i18n="@@COUNTRY_TURKEY_TITLE">TURKEY</ng-container> (TURKEY)</mat-option>
    <mat-option value="USA"><ng-container i18n="@@COUNTRY_USA_TITLE">USA</ng-container> (USA)</mat-option>
    <mat-option value="UKRAINE"><ng-container i18n="@@COUNTRY_UKRAINE_TITLE">UKRAINE</ng-container> (UKRAINE)</mat-option>
    <mat-option value="AZERBAIJAN"><ng-container i18n="@@COUNTRY_AZERBAIJAN_TITLE">AZERBAIJAN</ng-container> (AZERBAIJAN)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="country" placeholder="Country" formControlName="country">
    <mat-option [value]="option.key" *ngFor="let option of CountryData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of CountryData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of CountryData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/
