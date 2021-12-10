import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { MainOverviewComponent } from './main-overview/main-overview.component';
import { DeckComponent } from './deck/deck.component';
import {CollectionsModule} from "../collections/collections.module";


@NgModule({
  declarations: [
    MainOverviewComponent,
    DeckComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    CollectionsModule
  ]
})
export class OverviewModule { }
