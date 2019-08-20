import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { ReferComponent } from './refer/refer.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentopeningsComponent,
    ReferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
