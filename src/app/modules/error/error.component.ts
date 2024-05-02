import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent extends BaseModule {
  constructor() {
    super('error');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
