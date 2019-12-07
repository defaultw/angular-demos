import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InjectionDemoComponent } from './injection-demo/injection-demo.component';
import { LoginUserInfoService } from './service/login-user-info.service';
import { LogoutUserInfoService } from './service/logout-user-info.service';
import { UserInfoService } from './service/user-info.service';

@NgModule({
  declarations: [AppComponent, InjectionDemoComponent],
  imports: [BrowserModule],
  providers: [
    // { provide: UserInfoService, useClass: LoginUserInfoService }
    {
      provide: UserInfoService,
      useFactory: isDev => {
        // const dev = Math.random() > 0.5;
        console.log(isDev);
        if (isDev.isDev) {
          return new LoginUserInfoService();
        } else {
          return new LogoutUserInfoService();
        }
      },
      deps: ['IS_DEV']
    },
    // { provide: 'IS_DEV', useValue: true }
    { provide: 'IS_DEV', useValue: { isDev: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
