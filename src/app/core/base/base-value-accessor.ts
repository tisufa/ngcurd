import {
  Component,
  EventEmitter,
  Inject,
  Input,
  Optional,
  Output,
  Provider,
  Type,
  forwardRef,
} from '@angular/core';
import {
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { BaseComponent } from './base-component';

export function makeProvider(component: Type<any>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => component),
    multi: true,
  };
}

@Component({
  template: '',
})
export abstract class BaseValueAccessor
  extends BaseComponent
  implements ControlValueAccessor
{
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() options: any[];
  @Input() optionValueField: string;
  @Input() optionViewField: string;

  @Output() onChange: EventEmitter<any>;

  protected formControl: FormControl;
  protected onInitBaseValueAccessor: () => void;

  private _value: any;
  private _onChange: () => void;
  private _onTouched: () => void;

  constructor(
    @Inject(String) moduleCode: string,
    @Optional() private _controlContainer: ControlContainer
  ) {
    super(moduleCode);
    this.onChange = new EventEmitter();
  }

  protected override onInit(): void {
    this.setBaseValueAccessorInitalization();
    if (!this.onInitBaseValueAccessor) return;
    this.onInitBaseValueAccessor();
  }

  private setBaseValueAccessorInitalization(): void {
    if (!this.formControlName) return;
    this.formGroup = this._controlContainer.control as FormGroup;
    this.formControl = this.formGroup.get(this.formControlName) as FormControl;
  }

  public get isValid(): boolean {
    return this.formControl.touched && this.formControl.valid;
  }

  public get isInvalid(): boolean {
    return this.formControl.touched && this.formControl.invalid;
  }

  public get errors(): ValidationErrors | null {
    return this.formControl.errors;
  }

  writeValue(value: any): void {
    this._value = value;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
