import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './500.component.html',
})
export class InternalServerErrorComponent extends BaseModule {
  constructor() {
    super('error.module.500');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
