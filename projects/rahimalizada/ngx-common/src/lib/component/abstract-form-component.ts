import { HttpErrorResponse } from '@angular/common/http';
import { FormArray, FormGroup } from '@angular/forms';

export class AbstractFormComponent {
  static readonly defaultErrorMessage = $localize`:@@ABSTRACT_FORM_COMPONENT_DEFAULT_ERROR_MESSAGE:Operation failed, please try again shortly.`;
  form!: FormGroup;
  submitButtonDisabled = false;
  errorMessage?: string | null;
  showSuccessMessage = false;

  isInvalid(ctrlName: string, parent?: string, index?: number): boolean {
    const control = this.getControl(ctrlName, parent, index);
    if (!control) {
      return true;
    }
    return control.invalid && (control.touched || control.dirty);
  }

  private getControl(ctrlName: string, parent?: string, index?: number) {
    if (parent && index !== undefined) {
      const formArray = this.getFormArray(parent);
      const fromGroup = formArray.controls[index] as FormGroup;
      return fromGroup.controls[ctrlName];
    } else if (parent) {
      const fromGroup = this.getFormGroup(parent);
      return fromGroup.controls[ctrlName];
    }
    return this.form.get(ctrlName);
  }

  getFormArray(name: string): FormArray {
    return this.form.get(name) as FormArray;
  }

  getFormGroup(name: string): FormGroup {
    return this.form.get(name) as FormGroup;
  }

  onCancel(): void {
    this.form.reset();
    this.errorMessage = null;
    this.showSuccessMessage = false;
  }

  onSubmit(): void {
    this.submitButtonDisabled = true;
    this.errorMessage = null;
    this.showSuccessMessage = false;
    this.form.markAllAsTouched();
  }

  handleError(error: HttpErrorResponse): void {
    console.log(error);
    this.submitButtonDisabled = false;
    if (error.status >= 400 && error.status <= 499) {
      this.errorMessage = error.error;
    } else {
      this.errorMessage = AbstractFormComponent.defaultErrorMessage;
    }
  }
}

/* XLIFF TRANSLATION FOR LANGUAGE: AZ
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="2.0" xmlns="urn:oasis:names:tc:xliff:document:2.0" srcLang="en-US" trgLang="az">
  <file id="ngi18n" original="ng.template">
    <unit id="ABSTRACT_FORM_COMPONENT_DEFAULT_ERROR_MESSAGE">
      <segment state="translated">
        <source>Operation failed, please try again shortly.</source>
        <target>Əməliyyat yerinə yetirilərkən xəta baş verdi. Lütfən qısa müddətdən sonra yenidən cəhd edin.</target>
      </segment>
    </unit>
  </file>
</xliff>
*/
