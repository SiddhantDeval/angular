import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './bata-binding/interpolation/interpolation.component';
import { AllComponent } from './bata-binding/all/all.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    AllComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
