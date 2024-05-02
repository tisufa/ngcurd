import { Component, Input } from '@angular/core';
import { BaseComponent } from 'src/app/core/base/base-component';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent extends BaseComponent {
  @Input() label: string;
  @Input() customClass: string;
  @Input() required: boolean;

  constructor() {
    super('app.form-group');
  }

  protected onInit(): void {
    this.setStateReady();
  }
}
