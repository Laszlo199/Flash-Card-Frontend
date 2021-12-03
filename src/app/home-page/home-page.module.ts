import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {HomePageComponent} from "./home-page/home-page.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {PopularDecksComponent} from "./popular-decks/popular-decks.component";
import {CollectionsModule} from "../collections/collections.module";


@NgModule({
    declarations: [
        NavbarComponent,
        HomePageComponent,
        FooterComponent,
        PopularDecksComponent
    ],
    exports: [
        NavbarComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        HttpClientModule,
        CollectionsModule
    ]
})
export class HomePageModule { }
