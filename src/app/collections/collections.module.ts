import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsListComponent } from './collections-list/collections-list.component';
import {FormsModule} from "@angular/forms";
import { CollectionCardComponent } from './collection-card/collection-card.component';


@NgModule({
  declarations: [
    CollectionsListComponent,
    CollectionCardComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    FormsModule
  ]
})
export class CollectionsModule { }
