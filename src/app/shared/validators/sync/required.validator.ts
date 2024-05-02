import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
export const requiredValidator = (message: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const error = Validators.required(control);
    if (error) return { message };
    return null;
  };
};
