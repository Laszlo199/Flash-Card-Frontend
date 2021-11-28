import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './app/shared/navbar/navbar.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { FooterComponent } from './app/shared/footer/footer.component';
import { PopularDecksComponent } from './app/shared/popular-decks/popular-decks.component';
import {CollectionsModule} from "./collections/collections.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    PopularDecksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CollectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
