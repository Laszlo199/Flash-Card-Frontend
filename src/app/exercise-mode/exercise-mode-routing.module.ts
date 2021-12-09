import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlashcardsStudyingComponent} from "../learning-mode/flashcards-studying/flashcards-studying.component";

const routes: Routes = [{}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciseModeRoutingModule { }
