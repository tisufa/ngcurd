import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const minLengthValidator = (
  minLength: number,
  message: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    if (control.value.length < minLength) {
      return { message };
    }
    return null;
  };
};
