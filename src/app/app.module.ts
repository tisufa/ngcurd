import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({
      backendAddress: environment.backendAddress,
      environtment: environment,
    }),
    SharedModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
