import { Validators as AngularValidators } from '@angular/forms';
import { alphaNumericValidator } from './sync/alphaNumeric.validator';
import { emailValidator } from './sync/email.validator';
import { matchPasswordValidator } from './sync/match-password.validator';
import { matchValidator } from './sync/match.validator';
import { maxLengthValidator } from './sync/max-length.validator';
import { minLengthValidator } from './sync/min-length.validator';
import { patternValidator } from './sync/pattern.validator';
import { requiredValidator } from './sync/required.validator';

export const Validators = {
  compose: AngularValidators.compose,
  // start: custom
  alphaNumeric: alphaNumericValidator,
  email: emailValidator,
  matchPassword: matchPasswordValidator,
  match: matchValidator,
  maxLength: maxLengthValidator,
  minLength: minLengthValidator,
  required: requiredValidator,
  pattern: patternValidator,
};
