import { Component } from '@angular/core';
import { BaseModule } from 'src/app/core/base';

@Component({
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss'],
})
export class SecureComponent extends BaseModule {
  constructor() {
    super('secure');
  }

  protected override onInit(): void {
    this.setStateReady();
  }

  public handleSignOut(): void {
    this.globalService.session.destroy();
    this.router.navigate(['/auth/sign-in']);
  }
}
