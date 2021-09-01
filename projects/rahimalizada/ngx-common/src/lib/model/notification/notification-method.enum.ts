export enum NotificationMethod {
  APP = 'APP',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
}

export class NotificationMethodSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const NotificationMethodData = new Map<NotificationMethod, NotificationMethodSpec>([
  [
    NotificationMethod.APP,
    new NotificationMethodSpec(
      'notification-method-app',
      $localize`:@@NOTIFICATION_METHOD_APP_TITLE:App`,
      $localize`:@@NOTIFICATION_METHOD_APP_DESCRIPTION:In-app/browser notification`,
    ),
  ],
  [
    NotificationMethod.EMAIL,
    new NotificationMethodSpec(
      'notification-method-email',
      $localize`:@@NOTIFICATION_METHOD_EMAIL_TITLE:Email`,
      $localize`:@@NOTIFICATION_METHOD_EMAIL_DESCRIPTION:Email notification`,
    ),
  ],
  [
    NotificationMethod.SMS,
    new NotificationMethodSpec(
      'notification-method-sms',
      $localize`:@@NOTIFICATION_METHOD_SMS_TITLE:SMS`,
      $localize`:@@NOTIFICATION_METHOD_SMS_DESCRIPTION:SMS notification`,
    ),
  ],
  [
    NotificationMethod.WHATSAPP,
    new NotificationMethodSpec(
      'notification-method-whatsapp',
      $localize`:@@NOTIFICATION_METHOD_WHATSAPP_TITLE:WhatsApp`,
      $localize`:@@NOTIFICATION_METHOD_WHATSAPP_DESCRIPTION:WhatsApp notification`,
    ),
  ],
]);

export class NotificationMethodListSpec {
  constructor(public notificationMethod: NotificationMethod, public cssClass: string, public title: string, public description: string) {}
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
    <mat-option value="APP"><ng-container i18n="@@NOTIFICATION_METHOD_APP_TITLE">App</ng-container></mat-option>
    <mat-option value="EMAIL"><ng-container i18n="@@NOTIFICATION_METHOD_EMAIL_TITLE">Email</ng-container></mat-option>
    <mat-option value="SMS"><ng-container i18n="@@NOTIFICATION_METHOD_SMS_TITLE">SMS</ng-container></mat-option>
    <mat-option value="WHATSAPP"><ng-container i18n="@@NOTIFICATION_METHOD_WHATSAPP_TITLE">WhatsApp</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="notificationMethod" placeholder="NotificationMethod" formControlName="notificationMethod">
    <mat-option value="APP"><ng-container i18n="@@NOTIFICATION_METHOD_APP_TITLE">App</ng-container> (APP)</mat-option>
    <mat-option value="EMAIL"><ng-container i18n="@@NOTIFICATION_METHOD_EMAIL_TITLE">Email</ng-container> (EMAIL)</mat-option>
    <mat-option value="SMS"><ng-container i18n="@@NOTIFICATION_METHOD_SMS_TITLE">SMS</ng-container> (SMS)</mat-option>
    <mat-option value="WHATSAPP"><ng-container i18n="@@NOTIFICATION_METHOD_WHATSAPP_TITLE">WhatsApp</ng-container> (WHATSAPP)</mat-option>
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

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="NOTIFICATION_METHOD_APP_TITLE">
      <segment state="translated">
        <source>App</source>
        <target>Tətbiq</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_APP_DESCRIPTION">
      <segment state="translated">
        <source>In-app/browser notification</source>
        <target>Tətbiq/brauzer vasitəsilə göndərilən bildiriş</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_EMAIL_TITLE">
      <segment state="translated">
        <source>Email</source>
        <target>E-poçt</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_EMAIL_DESCRIPTION">
      <segment state="translated">
        <source>Email notification</source>
        <target>E-poçt vasitəsilə göndərilən bildiriş</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_SMS_TITLE">
      <segment state="translated">
        <source>SMS</source>
        <target>SMS</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_SMS_DESCRIPTION">
      <segment state="translated">
        <source>SMS notification</source>
        <target>SMS vasitəsilə göndərilən bildiriş</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_WHATSAPP_TITLE">
      <segment state="translated">
        <source>WhatsApp</source>
        <target>WhatsApp</target>
      </segment>
    </unit>
    <unit id="NOTIFICATION_METHOD_WHATSAPP_DESCRIPTION">
      <segment state="translated">
        <source>WhatsApp notification</source>
        <target>WhatsApp vasitəsilə göndərilən bildiriş</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
