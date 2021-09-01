export enum Country {
  TURKEY = 'TURKEY',
  USA = 'USA',
  UKRAINE = 'UKRAINE',
  AZERBAIJAN = 'AZERBAIJAN',
}

export class CountrySpec {
  constructor(
    public cssClass: string,
    public title: string,
    public numericCode: string,
    public currency: string,
    public currencySymbol: string,
  ) {}
}

export const CountryData = new Map<Country, CountrySpec>([
  [Country.TURKEY, new CountrySpec('country-turkey', $localize`:@@COUNTRY_TURKEY_TITLE:Turkey`, '792', 'TRY', '₺')],
  [Country.USA, new CountrySpec('country-usa', $localize`:@@COUNTRY_USA_TITLE:USA`, '840', 'USD', '$')],
  [Country.UKRAINE, new CountrySpec('country-ukraine', $localize`:@@COUNTRY_UKRAINE_TITLE:Ukraine`, '804', 'UAH', '₴')],
  [Country.AZERBAIJAN, new CountrySpec('country-azerbaijan', $localize`:@@COUNTRY_AZERBAIJAN_TITLE:Azerbaijan`, '031', 'AZN', '₼')],
]);

export class CountryListSpec {
  constructor(
    public country: Country,
    public cssClass: string,
    public title: string,
    public numericCode: string,
    public currency: string,
    public currencySymbol: string,
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
    <mat-option value="TURKEY"><ng-container i18n="@@COUNTRY_TURKEY_TITLE">Turkey</ng-container></mat-option>
    <mat-option value="USA"><ng-container i18n="@@COUNTRY_USA_TITLE">USA</ng-container></mat-option>
    <mat-option value="UKRAINE"><ng-container i18n="@@COUNTRY_UKRAINE_TITLE">Ukraine</ng-container></mat-option>
    <mat-option value="AZERBAIJAN"><ng-container i18n="@@COUNTRY_AZERBAIJAN_TITLE">Azerbaijan</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="country" placeholder="Country" formControlName="country">
    <mat-option value="TURKEY"><ng-container i18n="@@COUNTRY_TURKEY_TITLE">Turkey</ng-container> (TURKEY)</mat-option>
    <mat-option value="USA"><ng-container i18n="@@COUNTRY_USA_TITLE">USA</ng-container> (USA)</mat-option>
    <mat-option value="UKRAINE"><ng-container i18n="@@COUNTRY_UKRAINE_TITLE">Ukraine</ng-container> (UKRAINE)</mat-option>
    <mat-option value="AZERBAIJAN"><ng-container i18n="@@COUNTRY_AZERBAIJAN_TITLE">Azerbaijan</ng-container> (AZERBAIJAN)</mat-option>
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

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="COUNTRY_TURKEY_TITLE">
      <segment state="translated">
        <source>Turkey</source>
        <target>Türkiyə</target>
      </segment>
    </unit>
    <unit id="COUNTRY_USA_TITLE">
      <segment state="translated">
        <source>USA</source>
        <target>ABŞ</target>
      </segment>
    </unit>
    <unit id="COUNTRY_UKRAINE_TITLE">
      <segment state="translated">
        <source>Ukraine</source>
        <target>Ukrayna</target>
      </segment>
    </unit>
    <unit id="COUNTRY_AZERBAIJAN_TITLE">
      <segment state="translated">
        <source>Azerbaijan</source>
        <target>Azərbaycan</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
