import { Component } from '@angular/core';
import { BaseModule } from './core/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseModule {
  title = 'danamontest';
  constructor() {
    super('app');
  }

  protected override onInit(): void {
    this.setStateReady();
  }
}
