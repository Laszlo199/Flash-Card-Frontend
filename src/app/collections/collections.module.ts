import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsListComponent } from './collections-list/collections-list.component';
import {FormsModule} from "@angular/forms";
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { HttpClientModule} from "@angular/common/http";
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CardComponent } from './card/card.component';
import { NewCardComponent } from './new-card/new-card.component';
import { NewDeckPopupComponent } from './new-deck-popup/new-deck-popup.component';


@NgModule({
  declarations: [
    CollectionsListComponent,
    CollectionCardComponent,
    CollectionDetailsComponent,
    CardComponent,
    NewCardComponent,
    NewDeckPopupComponent
  ],
  exports: [
    CollectionCardComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    FormsModule
  ]
})
export class CollectionsModule { }
