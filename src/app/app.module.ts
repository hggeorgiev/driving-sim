import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UvvDrivingSimulatorModule} from "./uvv-driving-simulator/uvv-driving-simulator.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UvvDrivingSimulatorModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
