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
import { PublicCollectionCardComponent } from './public-collection-card/public-collection-card.component';
import { PublicCollectionDetailsComponent } from './public-collection-details/public-collection-details.component';
import { PublicCardComponent } from './public-card/public-card.component';
import { GoToPractisePopupComponent } from './go-to-practise-popup/go-to-practise-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CollectionsListComponent,
    CollectionCardComponent,
    CollectionDetailsComponent,
    CardComponent,
    NewCardComponent,
    NewDeckPopupComponent,
    PublicCollectionCardComponent,
    PublicCollectionDetailsComponent,
    PublicCardComponent,
    GoToPractisePopupComponent
  ],
  entryComponents: [GoToPractisePopupComponent],
  exports: [
    CollectionCardComponent
  ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class CollectionsModule { }
