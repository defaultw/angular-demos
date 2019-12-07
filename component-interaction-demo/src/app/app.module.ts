import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
    ChildInputComponentComponent
} from './child-input-component/child-input-component.component';
import {
    ChildNgonchangeComponentComponent
} from './child-ngonchange-component/child-ngonchange-component.component';
import {
    ChildOutputComponentComponent
} from './child-output-component/child-output-component.component';
import {
    ChildServiceComponentComponent
} from './child-service-component/child-service-component.component';
import { ChildSetComponentComponent } from './child-set-component/child-set-component.component';
import {
    ChildValueComponentComponent
} from './child-value-component/child-value-component.component';
import {
    ChildViewchildComponentComponent
} from './child-viewchild-component/child-viewchild-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildInputComponentComponent,
    ChildSetComponentComponent,
    ChildNgonchangeComponentComponent,
    ChildOutputComponentComponent,
    ChildValueComponentComponent,
    ChildViewchildComponentComponent,
    ChildServiceComponentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
