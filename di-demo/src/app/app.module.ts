import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InjectionDemoComponent } from './injection-demo/injection-demo.component';
import { LoginUserInfoService } from './service/login-user-info.service';
import { UserInfoService } from './service/user-info.service';

@NgModule({
  declarations: [AppComponent, InjectionDemoComponent],
  imports: [BrowserModule],
  providers: [{ provide: UserInfoService, useClass: LoginUserInfoService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
