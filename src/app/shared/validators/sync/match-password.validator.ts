import { ValidatorFn } from '@angular/forms';
import { matchValidator } from './match.validator';

export const matchPasswordValidator = (
  message: string,
  matchWith: string = 'password'
): ValidatorFn => {
  return matchValidator(matchWith, message);
};
