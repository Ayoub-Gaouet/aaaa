import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionsComponent } from './add-avions/add-avions.component';
import { FormsModule } from '@angular/forms';
import { UpdateAvionsComponent } from './update-avions/update-avions.component';
@NgModule({
  declarations: [
    AppComponent,
    AvionsComponent,
    AddAvionsComponent,
    UpdateAvionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
