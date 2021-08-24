export enum TOSStatus {
  ACCEPTED = 'ACCEPTED',
  UPDATED = 'UPDATED',
}

export class TOSStatusSpec {
  constructor(public title: string, public description: string, public cssClass: string) {}
}

export const TOSStatusData = new Map<TOSStatus, TOSStatusSpec>([
  [
    TOSStatus.ACCEPTED,
    new TOSStatusSpec(
      $localize`:@@TOS_STATUS_ACCEPTED_TITLE:ACCEPTED`,
      $localize`:@@TOS_STATUS_ACCEPTED_DESCRIPTION:ACCEPTED`,
      'tos-status-accepted',
    ),
  ],
  [
    TOSStatus.UPDATED,
    new TOSStatusSpec(
      $localize`:@@TOS_STATUS_UPDATED_TITLE:UPDATED`,
      $localize`:@@TOS_STATUS_UPDATED_DESCRIPTION:UPDATED`,
      'tos-status-updated',
    ),
  ],
]);

export class TOSStatusListSpec {
  constructor(public tOSStatus: TOSStatus, public title: string, public description: string, public cssClass: string) {}
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
    <mat-option value="ACCEPTED"><ng-container i18n="@@TOS_STATUS_ACCEPTED_TITLE">ACCEPTED</ng-container></mat-option>
    <mat-option value="UPDATED"><ng-container i18n="@@TOS_STATUS_UPDATED_TITLE">UPDATED</ng-container></mat-option>
  </mat-select>
 </mat-form-field>
*/

/* Select
 <mat-form-field class="w-100">
  <mat-select name="tOSStatus" placeholder="TOSStatus" formControlName="tOSStatus">
    <mat-option value="ACCEPTED"><ng-container i18n="@@TOS_STATUS_ACCEPTED_TITLE">ACCEPTED</ng-container> (ACCEPTED)</mat-option>
    <mat-option value="UPDATED"><ng-container i18n="@@TOS_STATUS_UPDATED_TITLE">UPDATED</ng-container> (UPDATED)</mat-option>
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
