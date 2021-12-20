import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsListComponent} from "./collections-list/collections-list.component";
import {CollectionDetailsComponent} from "./collection-details/collection-details.component";
import {AuthGuard} from "../auth/guards/auth.guard";
import {PublicCollectionDetailsComponent} from "./public-collection-details/public-collection-details.component";

const routes: Routes = [
  {
    path: '',
    component: CollectionsListComponent
  },
  {
    path: 'preview/:id',
    component: PublicCollectionDetailsComponent
  },
  {
    path: ':id',
    component: CollectionDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
