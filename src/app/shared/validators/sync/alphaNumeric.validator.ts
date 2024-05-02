import { ValidatorFn } from '@angular/forms';
import { patternValidator } from './pattern.validator';

export const alphaNumericValidator = (message: string): ValidatorFn => {
  return patternValidator(/^[a-zA-Z0-9]+$/, message);
};
