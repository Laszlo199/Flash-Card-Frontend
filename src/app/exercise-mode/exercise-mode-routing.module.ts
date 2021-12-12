import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlashCardsViewComponent} from "./flash-cards-view/flash-cards-view.component";

const routes: Routes = [
  {path: ':id', component: FlashCardsViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseModeRoutingModule { }
