import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsListComponent } from './collections-list/collections-list.component';
import {FormsModule} from "@angular/forms";
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CollectionsListComponent,
    CollectionCardComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CollectionsModule { }
