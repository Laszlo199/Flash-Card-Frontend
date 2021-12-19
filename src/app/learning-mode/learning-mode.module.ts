import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LearningModeRoutingModule} from './learning-mode-routing.module';
import {FlashcardComponent} from './flashcard/flashcard.component';
import {FlashcardsStudyingComponent} from './flashcards-studying/flashcards-studying.component';
import {HttpClientModule} from "@angular/common/http";
import {CollectionsModule} from "../collections/collections.module";


@NgModule({
  declarations: [
    FlashcardComponent,
    FlashcardsStudyingComponent
  ],
  imports: [
    CommonModule,
    LearningModeRoutingModule,
    HttpClientModule,
    CollectionsModule
  ]
})
export class LearningModeModule { }
