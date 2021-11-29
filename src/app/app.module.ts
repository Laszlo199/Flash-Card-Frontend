import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { PopularDecksComponent } from './home-page/popular-decks/popular-decks.component';
import {CollectionsModule} from "./collections/collections.module";
import {HomePageModule} from "./home-page/home-page.module";


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
