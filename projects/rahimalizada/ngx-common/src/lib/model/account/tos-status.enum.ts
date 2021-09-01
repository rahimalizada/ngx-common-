export enum TOSStatus {
  ACCEPTED = 'ACCEPTED',
  UPDATED = 'UPDATED',
}

export class TOSStatusSpec {
  constructor(public cssClass: string, public title: string, public description: string) {}
}

export const TOSStatusData = new Map<TOSStatus, TOSStatusSpec>([
  [
    TOSStatus.ACCEPTED,
    new TOSStatusSpec(
      'tos-status-accepted',
      $localize`:@@TOS_STATUS_ACCEPTED_TITLE:Accepted`,
      $localize`:@@TOS_STATUS_ACCEPTED_DESCRIPTION:User has reviewed and accepted TOS`,
    ),
  ],
  [
    TOSStatus.UPDATED,
    new TOSStatusSpec(
      'tos-status-updated',
      $localize`:@@TOS_STATUS_UPDATED_TITLE:Updated`,
      $localize`:@@TOS_STATUS_UPDATED_DESCRIPTION:TOS have been updated and user has not reviewd/accepted it yet`,
    ),
  ],
]);

export class TOSStatusListSpec {
  constructor(public tOSStatus: TOSStatus, public cssClass: string, public title: string, public description: string) {}
}

export const TOSStatusList: TOSStatusListSpec[] = [...TOSStatusData.entries()].map((entry) => ({ tOSStatus: entry[0], ...entry[1] }));

/* Select
 <mat-form-field class="w-100">
  <mat-select name="tOSStatus" placeholder="TOSStatus" formControlName="tOSStatus">
    <mat-option value="ACCEPTED">ACCEPTED</mat-option>
    <mat-option value="UPDATED">UPDATED</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="tOSStatus" placeholder="TOSStatus" formControlName="tOSStatus">
    <mat-option value="ACCEPTED"><ng-container i18n="@@TOS_STATUS_ACCEPTED_TITLE">Accepted</ng-container></mat-option>
    <mat-option value="UPDATED"><ng-container i18n="@@TOS_STATUS_UPDATED_TITLE">Updated</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="tOSStatus" placeholder="TOSStatus" formControlName="tOSStatus">
    <mat-option value="ACCEPTED"><ng-container i18n="@@TOS_STATUS_ACCEPTED_TITLE">Accepted</ng-container> (ACCEPTED)</mat-option>
    <mat-option value="UPDATED"><ng-container i18n="@@TOS_STATUS_UPDATED_TITLE">Updated</ng-container> (UPDATED)</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="tOSStatus" placeholder="TOSStatus" formControlName="tOSStatus">
    <mat-option [value]="option.key" *ngFor="let option of TOSStatusData | keyvalue: GenericEnumSort ">
			{{option.key}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of TOSStatusData | keyvalue: GenericEnumSort ">
			{{option.value.title}}</mat-option>
    <mat-option [value]="option.key" *ngFor="let option of TOSStatusData | keyvalue: GenericEnumSort ">
			{{option.value.title}} ({{option.key}})</mat-option>
  </mat-select>
 </mat-form-field>
*/

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="TOS_STATUS_ACCEPTED_TITLE">
      <segment state="translated">
        <source>Accepted</source>
        <target>Qəbul olunub</target>
      </segment>
    </unit>
    <unit id="TOS_STATUS_ACCEPTED_DESCRIPTION">
      <segment state="translated">
        <source>User has reviewed and accepted TOS</source>
        <target>İstifadəçi qaydaları ilə taniş olub və qəbul edib</target>
      </segment>
    </unit>
    <unit id="TOS_STATUS_UPDATED_TITLE">
      <segment state="translated">
        <source>Updated</source>
        <target>Təzələnib</target>
      </segment>
    </unit>
    <unit id="TOS_STATUS_UPDATED_DESCRIPTION">
      <segment state="translated">
        <source>TOS have been updated and user has not reviewd/accepted it yet</source>
        <target>İstifadəçi qaydaları təzələnib və istifadəçi qaydaları qəbul etməsini təsdiq etməyib</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
