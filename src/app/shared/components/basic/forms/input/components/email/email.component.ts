import { Component } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import {
  BaseValueAccessor,
  makeProvider,
} from 'src/app/core/base/base-value-accessor';

@Component({
  selector: 'app-input[type=email]',
  templateUrl: './email.component.html',
  providers: [makeProvider(InputEmailComponent)],
})
export class InputEmailComponent extends BaseValueAccessor {
  constructor(controlContainer: ControlContainer) {
    super('app.input.email', controlContainer);
  }

  public handleInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value.toLowerCase();
    this.formControl.patchValue(value);
    inputElement.value = value;
    if (this.formControl.dirty) return;
    this.formControl.markAsDirty();
  }
}
