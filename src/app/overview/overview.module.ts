import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { MainOverviewComponent } from './main-overview/main-overview.component';
import { DeckComponent } from './deck/deck.component';
import {CollectionsModule} from "../collections/collections.module";
import { ActivityCardComponent } from './activity-card/activity-card.component';


@NgModule({
  declarations: [
    MainOverviewComponent,
    DeckComponent,
    ActivityCardComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    CollectionsModule
  ]
})
export class OverviewModule { }
