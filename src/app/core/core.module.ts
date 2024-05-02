import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { initializationFactory } from './factory';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ConfigModel } from './models';
import { InitializationService } from './services';

@NgModule({
  exports: [InterceptorsModule],
})
export class CoreModule {
  public static forRoot(config: ConfigModel): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        InitializationService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializationFactory(config),
          deps: [InitializationService],
          multi: true,
        },
      ],
    };
  }
}
