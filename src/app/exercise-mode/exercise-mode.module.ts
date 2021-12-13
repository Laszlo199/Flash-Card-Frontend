import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseModeRoutingModule } from './exercise-mode-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';


@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    ExerciseModeRoutingModule
  ]
})
export class ExerciseModeModule { }
