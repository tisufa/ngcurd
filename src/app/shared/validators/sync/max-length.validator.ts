import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const maxLengthValidator = (
  maxLength: number,
  message: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    if (control.value.length > maxLength) {
      return { message };
    }
    return null;
  };
};
