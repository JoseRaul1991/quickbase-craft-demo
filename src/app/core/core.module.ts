import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  ProfileAvatarComponent,
  NavigationComponent,
  MenuButtonComponent,
} from './components';
import { ClassicLayoutComponent } from './layouts';
import { Page404Component } from './pages';
import { DEFAULT_DELAY } from './constants/delay';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DelayInterceptor } from './interceptors/delay.interceptor';

const exportComponents = [ClassicLayoutComponent, Page404Component];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ...exportComponents,
    ProfileAvatarComponent,
    NavigationComponent,
    MenuButtonComponent,
  ],
  exports: exportComponents,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DelayInterceptor,
      multi: true,
    },
    {
      provide: DEFAULT_DELAY,
      useValue: 300,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
