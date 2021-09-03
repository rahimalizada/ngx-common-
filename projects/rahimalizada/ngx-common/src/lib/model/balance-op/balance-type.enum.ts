export enum BalanceType {
  ORDER = 'ORDER',
  SHIPMENT = 'SHIPMENT',
  DELIVERY = 'DELIVERY',
  SERVICE_FEE = 'SERVICE_FEE',
}

export class BalanceTypeSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const BalanceTypeData = new Map<BalanceType, BalanceTypeSpec>([
  [
    BalanceType.ORDER,
    new BalanceTypeSpec(
      'balance-type-order',
      $localize`:@@BALANCE_TYPE_ORDER_TITLE:Order`,
      $localize`:@@BALANCE_TYPE_ORDER_DESCRIPTION:Order operation`,
    ),
  ],
  [
    BalanceType.SHIPMENT,
    new BalanceTypeSpec(
      'balance-type-shipment',
      $localize`:@@BALANCE_TYPE_SHIPMENT_TITLE:Shipment`,
      $localize`:@@BALANCE_TYPE_SHIPMENT_DESCRIPTION:Shipment operation`,
    ),
  ],
  [
    BalanceType.DELIVERY,
    new BalanceTypeSpec(
      'balance-type-delivery',
      $localize`:@@BALANCE_TYPE_DELIVERY_TITLE:Delivery`,
      $localize`:@@BALANCE_TYPE_DELIVERY_DESCRIPTION:Delivery operation`,
    ),
  ],
  [
    BalanceType.SERVICE_FEE,
    new BalanceTypeSpec(
      'balance-type-service-fee',
      $localize`:@@BALANCE_TYPE_SERVICE_FEE_TITLE:Service fee`,
      $localize`:@@BALANCE_TYPE_SERVICE_FEE_DESCRIPTION:Service fee operation`,
    ),
  ],
]);

export class BalanceTypeListSpec {
  constructor(public balanceType: BalanceType, public cssClass: string, public title: string, public description: string) {}
}

export const BalanceTypeList: BalanceTypeListSpec[] = [...BalanceTypeData.entries()].map((entry) => ({
  balanceType: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceType" placeholder="BalanceType" formControlName="balanceType">
    <mat-option value="ORDER">ORDER</mat-option>
    <mat-option value="SHIPMENT">SHIPMENT</mat-option>
    <mat-option value="DELIVERY">DELIVERY</mat-option>
    <mat-option value="SERVICE_FEE">SERVICE_FEE</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceType" placeholder="BalanceType" formControlName="balanceType">
    <mat-option value="ORDER"><ng-container i18n="@@BALANCE_TYPE_ORDER_TITLE">Order</ng-container></mat-option>
    <mat-option value="SHIPMENT"><ng-container i18n="@@BALANCE_TYPE_SHIPMENT_TITLE">Shipment</ng-container></mat-option>
    <mat-option value="DELIVERY"><ng-container i18n="@@BALANCE_TYPE_DELIVERY_TITLE">Delivery</ng-container></mat-option>
    <mat-option value="SERVICE_FEE"><ng-container i18n="@@BALANCE_TYPE_SERVICE_FEE_TITLE">Service fee</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceType" placeholder="BalanceType" formControlName="balanceType">
    <mat-option value="ORDER"><ng-container i18n="@@BALANCE_TYPE_ORDER_TITLE">Order</ng-container> (ORDER)</mat-option>
    <mat-option value="SHIPMENT"><ng-container i18n="@@BALANCE_TYPE_SHIPMENT_TITLE">Shipment</ng-container> (SHIPMENT)</mat-option>
    <mat-option value="DELIVERY"><ng-container i18n="@@BALANCE_TYPE_DELIVERY_TITLE">Delivery</ng-container> (DELIVERY)</mat-option>
    <mat-option value="SERVICE_FEE"><ng-container i18n="@@BALANCE_TYPE_SERVICE_FEE_TITLE">Service fee</ng-container> (SERVICE_FEE)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="balanceType" placeholder="BalanceType" formControlName="balanceType">
    <mat-option [value]="option.key" *ngFor="let option of BalanceTypeData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of BalanceTypeData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="BALANCE_TYPE_ORDER_TITLE">
      <segment state="translated">
        <source>Order</source>
        <target>Sifarış</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_ORDER_DESCRIPTION">
      <segment state="translated">
        <source>Order operation</source>
        <target>Sifariş balans əməliyyatı</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_SHIPMENT_TITLE">
      <segment state="translated">
        <source>Shipment</source>
        <target>Daşınma</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_SHIPMENT_DESCRIPTION">
      <segment state="translated">
        <source>Shipment operation</source>
        <target>Daşınma balans əməliyyatı</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_DELIVERY_TITLE">
      <segment state="translated">
        <source>Delivery</source>
        <target>Çatdırılma</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_DELIVERY_DESCRIPTION">
      <segment state="translated">
        <source>Delivery operation</source>
        <target>Çatdırılma balans əməliyyatı</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_SERVICE_FEE_TITLE">
      <segment state="translated">
        <source>Service fee</source>
        <target>Xidmət haqqı</target>
      </segment>
    </unit>
    <unit id="BALANCE_TYPE_SERVICE_FEE_DESCRIPTION">
      <segment state="translated">
        <source>Service fee operation</source>
        <target>Xidmət haqqı balans əməliyyatı</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
