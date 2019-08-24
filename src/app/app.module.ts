import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentopeningsComponent } from './currentopenings/currentopenings.component';
import { ReferComponent } from './refer/refer.component';
import { HomeComponent } from './home/home.component';
import { SelfserviceComponent } from './selfservice/selfservice.component';
import { EngageComponent } from './engage/engage.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentopeningsComponent,
    ReferComponent,
    HomeComponent,
    SelfserviceComponent,
    EngageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
