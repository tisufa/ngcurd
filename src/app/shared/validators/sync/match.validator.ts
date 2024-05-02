import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export const matchValidator = (
  matchWith: string,
  message?: string
): ValidatorFn => {
  return (AC: AbstractControl): ValidationErrors | null => {
    if (AC.parent && AC.value) {
      const formControlMatchWith = AC.parent.get(matchWith);
      if (formControlMatchWith) {
        formControlMatchWith.valueChanges.subscribe((val) => {
          if (
            (AC.invalid && val == AC.value) ||
            (AC.valid && val != AC.value)
          ) {
            AC.updateValueAndValidity();
          }
        });
        if (AC.value != formControlMatchWith.value) {
          return {
            message: message || `Value doesn't match with '${matchWith}' value`,
          };
        }
      }
    }
    return null;
  };
};
