export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  AZN = 'AZN',
  TRY = 'TRY',
  UAH = 'UAH',
}

export class CurrencySpec {
  constructor(public cssClass: string, public title: string, public shortName: string, public symbol: string) {}
}

export const CurrencyData = new Map<Currency, CurrencySpec>([
  [
    Currency.USD,
    new CurrencySpec(
      'currency-usd',
      $localize`:@@CURRENCY_USD_TITLE:United States dollar`,
      $localize`:@@CURRENCY_USD_SHORTNAME:dollar`,
      '$',
    ),
  ],
  [Currency.EUR, new CurrencySpec('currency-eur', $localize`:@@CURRENCY_EUR_TITLE:Euro`, $localize`:@@CURRENCY_EUR_SHORTNAME:euro`, '€')],
  [
    Currency.AZN,
    new CurrencySpec('currency-azn', $localize`:@@CURRENCY_AZN_TITLE:Azerbaijani manat`, $localize`:@@CURRENCY_AZN_SHORTNAME:manat`, '₼'),
  ],
  [
    Currency.TRY,
    new CurrencySpec('currency-try', $localize`:@@CURRENCY_TRY_TITLE:Turkish lira`, $localize`:@@CURRENCY_TRY_SHORTNAME:lira`, '₺'),
  ],
  [
    Currency.UAH,
    new CurrencySpec('currency-uah', $localize`:@@CURRENCY_UAH_TITLE:Ukrainian hryvnia`, $localize`:@@CURRENCY_UAH_SHORTNAME:hrivnia`, '₴'),
  ],
]);

export class CurrencyListSpec {
  constructor(public currency: Currency, public cssClass: string, public title: string, public shortName: string, public symbol: string) {}
}

export const CurrencyList: CurrencyListSpec[] = [...CurrencyData.entries()].map((entry) => ({ currency: entry[0], ...entry[1] }));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="currency" placeholder="Currency" formControlName="currency">
    <mat-option value="USD">USD</mat-option>
    <mat-option value="EUR">EUR</mat-option>
    <mat-option value="AZN">AZN</mat-option>
    <mat-option value="TRY">TRY</mat-option>
    <mat-option value="UAH">UAH</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="currency" placeholder="Currency" formControlName="currency">
    <mat-option value="USD"><ng-container i18n="@@CURRENCY_USD_TITLE">United States dollar</ng-container></mat-option>
    <mat-option value="EUR"><ng-container i18n="@@CURRENCY_EUR_TITLE">Euro</ng-container></mat-option>
    <mat-option value="AZN"><ng-container i18n="@@CURRENCY_AZN_TITLE">Azerbaijani manat</ng-container></mat-option>
    <mat-option value="TRY"><ng-container i18n="@@CURRENCY_TRY_TITLE">Turkish lira</ng-container></mat-option>
    <mat-option value="UAH"><ng-container i18n="@@CURRENCY_UAH_TITLE">Ukrainian hryvnia</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="currency" placeholder="Currency" formControlName="currency">
    <mat-option value="USD"><ng-container i18n="@@CURRENCY_USD_TITLE">United States dollar</ng-container> (USD)</mat-option>
    <mat-option value="EUR"><ng-container i18n="@@CURRENCY_EUR_TITLE">Euro</ng-container> (EUR)</mat-option>
    <mat-option value="AZN"><ng-container i18n="@@CURRENCY_AZN_TITLE">Azerbaijani manat</ng-container> (AZN)</mat-option>
    <mat-option value="TRY"><ng-container i18n="@@CURRENCY_TRY_TITLE">Turkish lira</ng-container> (TRY)</mat-option>
    <mat-option value="UAH"><ng-container i18n="@@CURRENCY_UAH_TITLE">Ukrainian hryvnia</ng-container> (UAH)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="currency" placeholder="Currency" formControlName="currency">
    <mat-option [value]="option.key" *ngFor="let option of CurrencyData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of CurrencyData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of CurrencyData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="CURRENCY_USD_TITLE">
      <segment state="translated">
        <source>United States dollar</source>
        <target>ABŞ dolları</target>
      </segment>
    </unit>
    <unit id="CURRENCY_USD_SHORTNAME">
      <segment state="translated">
        <source>dollar</source>
        <target>dollar</target>
      </segment>
    </unit>
    <unit id="CURRENCY_EUR_TITLE">
      <segment state="translated">
        <source>Euro</source>
        <target>Avro</target>
      </segment>
    </unit>
    <unit id="CURRENCY_EUR_SHORTNAME">
      <segment state="translated">
        <source>euro</source>
        <target>avro</target>
      </segment>
    </unit>
    <unit id="CURRENCY_AZN_TITLE">
      <segment state="translated">
        <source>Azerbaijani manat</source>
        <target>Azərbaycan manatı</target>
      </segment>
    </unit>
    <unit id="CURRENCY_AZN_SHORTNAME">
      <segment state="translated">
        <source>manat</source>
        <target>manat</target>
      </segment>
    </unit>
    <unit id="CURRENCY_TRY_TITLE">
      <segment state="translated">
        <source>Turkish lira</source>
        <target>Türk lirəsi</target>
      </segment>
    </unit>
    <unit id="CURRENCY_TRY_SHORTNAME">
      <segment state="translated">
        <source>lira</source>
        <target>lirə</target>
      </segment>
    </unit>
    <unit id="CURRENCY_UAH_TITLE">
      <segment state="translated">
        <source>Ukrainian hryvnia</source>
        <target>Ukrayna qrivnası</target>
      </segment>
    </unit>
    <unit id="CURRENCY_UAH_SHORTNAME">
      <segment state="translated">
        <source>hrivnia</source>
        <target>qrivna</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
