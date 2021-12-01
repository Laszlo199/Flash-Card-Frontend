import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CollectionsModule} from "./collections/collections.module";
import {HomePageModule} from "./home-page/home-page.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CollectionsModule,
    HomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
