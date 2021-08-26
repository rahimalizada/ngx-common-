export enum NotificationMethod {
  APP = 'APP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
}

export class NotificationMethodSpec {
  constructor(public title: string, public description: string, public cssClass: string) {}
}

export const NotificationMethodData = new Map<NotificationMethod, NotificationMethodSpec>([
  [
    NotificationMethod.APP,
    new NotificationMethodSpec(
      $localize`:@@NOTIFICATION_METHOD_APP_TITLE:APP`,
      $localize`:@@NOTIFICATION_METHOD_APP_DESCRIPTION:APP`,
      'notification-method-app',
    ),
  ],
  [
    NotificationMethod.EMAIL,
    new NotificationMethodSpec(
      $localize`:@@NOTIFICATION_METHOD_EMAIL_TITLE:EMAIL`,
      $localize`:@@NOTIFICATION_METHOD_EMAIL_DESCRIPTION:EMAIL`,
      'notification-method-email',
    ),
  ],
  [
    NotificationMethod.SMS,
    new NotificationMethodSpec(
      $localize`:@@NOTIFICATION_METHOD_SMS_TITLE:SMS`,
      $localize`:@@NOTIFICATION_METHOD_SMS_DESCRIPTION:SMS`,
      'notification-method-sms',
    ),
  ],
  [
    NotificationMethod.WHATSAPP,
    new NotificationMethodSpec(
      $localize`:@@NOTIFICATION_METHOD_WHATSAPP_TITLE:WHATSAPP`,
      $localize`:@@NOTIFICATION_METHOD_WHATSAPP_DESCRIPTION:WHATSAPP`,
      'notification-method-whatsapp',
    ),
  ],
]);

export class NotificationMethodListSpec {
  constructor(public notificationMethod: NotificationMethod, public title: string, public description: string, public cssClass: string) {}
}

export const NotificationMethodList: NotificationMethodListSpec[] = [...NotificationMethodData.entries()].map((entry) => ({
  notificationMethod: entry[0],
  ...entry[1],
}));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="notificationMethod" placeholder="NotificationMethod" formControlName="notificationMethod">
    <mat-option value="APP">APP</mat-option>
    <mat-option value="EMAIL">EMAIL</mat-option>
    <mat-option value="SMS">SMS</mat-option>
    <mat-option value="WHATSAPP">WHATSAPP</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="notificationMethod" placeholder="NotificationMethod" formControlName="notificationMethod">
    <mat-option value="APP"><ng-container i18n="@@NOTIFICATION_METHOD_APP_TITLE">APP</ng-container></mat-option>
    <mat-option value="EMAIL"><ng-container i18n="@@NOTIFICATION_METHOD_EMAIL_TITLE">EMAIL</ng-container></mat-option>
    <mat-option value="SMS"><ng-container i18n="@@NOTIFICATION_METHOD_SMS_TITLE">SMS</ng-container></mat-option>
    <mat-option value="WHATSAPP"><ng-container i18n="@@NOTIFICATION_METHOD_WHATSAPP_TITLE">WHATSAPP</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="notificationMethod" placeholder="NotificationMethod" formControlName="notificationMethod">
    <mat-option value="APP"><ng-container i18n="@@NOTIFICATION_METHOD_APP_TITLE">APP</ng-container> (APP)</mat-option>
    <mat-option value="EMAIL"><ng-container i18n="@@NOTIFICATION_METHOD_EMAIL_TITLE">EMAIL</ng-container> (EMAIL)</mat-option>
    <mat-option value="SMS"><ng-container i18n="@@NOTIFICATION_METHOD_SMS_TITLE">SMS</ng-container> (SMS)</mat-option>
    <mat-option value="WHATSAPP"><ng-container i18n="@@NOTIFICATION_METHOD_WHATSAPP_TITLE">WHATSAPP</ng-container> (WHATSAPP)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="notificationMethod" placeholder="NotificationMethod" formControlName="notificationMethod">
    <mat-option [value]="option.key" *ngFor="let option of NotificationMethodData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of NotificationMethodData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of NotificationMethodData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/
