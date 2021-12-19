import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CollectionsRoutingModule} from './collections-routing.module';
import {CollectionsListComponent} from './collections-list/collections-list.component';
import {FormsModule} from "@angular/forms";
import {CollectionCardComponent} from './collection-card/collection-card.component';
import {CollectionDetailsComponent} from './collection-details/collection-details.component';
import {CardComponent} from './card/card.component';
import {NewCardComponent} from './new-card/new-card.component';
import {NewDeckPopupComponent} from './new-deck-popup/new-deck-popup.component';
import {PublicCollectionCardComponent} from './public-collection-card/public-collection-card.component';
import {PublicCollectionDetailsComponent} from './public-collection-details/public-collection-details.component';
import {PublicCardComponent} from './public-card/public-card.component';
import {GoToPractisePopupComponent} from './go-to-practise-popup/go-to-practise-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {NavbarCollectionsComponent} from '../shared/navbar-collections/navbar-collections.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatSliderModule} from "@angular/material/slider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    CollectionsListComponent,
    CollectionCardComponent,
    CollectionDetailsComponent,
    CardComponent,
    NewCardComponent,
    NewDeckPopupComponent,
    NavbarCollectionsComponent,
    PublicCollectionCardComponent,
    PublicCollectionDetailsComponent,
    PublicCardComponent,
    GoToPractisePopupComponent
  ],
  entryComponents: [GoToPractisePopupComponent],
  exports: [
    CollectionCardComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    NavbarCollectionsComponent
  ],
    imports: [
        CommonModule,
        CollectionsRoutingModule,
        FormsModule,
        MatDialogModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        FormsModule,
        MatSliderModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatMenuModule,
        MatSlideToggleModule
    ]
})
export class CollectionsModule { }
