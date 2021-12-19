import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciseModeRoutingModule } from './exercise-mode-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    ExerciseModeRoutingModule,
    FormsModule
  ]
})
export class ExerciseModeModule { }
