import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionDetailsComponent} from "../collections/collection-details/collection-details.component";
import {FlashcardsStudyingComponent} from "./flashcards-studying/flashcards-studying.component";

const routes: Routes = [
  {
    path: ':id',
    component: FlashcardsStudyingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningModeRoutingModule { }
