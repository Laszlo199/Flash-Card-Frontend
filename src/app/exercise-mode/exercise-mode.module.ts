import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseModeRoutingModule } from './exercise-mode-routing.module';
import { FlashCardsViewComponent } from './flash-cards-view/flash-cards-view.component';


@NgModule({
  declarations: [
    FlashCardsViewComponent
  ],
  imports: [
    CommonModule,
    ExerciseModeRoutingModule
  ]
})
export class ExerciseModeModule { }
