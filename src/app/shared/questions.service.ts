import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
   private _showAnswer: boolean = false;
  constructor() {
  }


  set showAnswer(value: boolean) {
    this._showAnswer = value;
  }

  get showAnswer(): boolean {
    return this._showAnswer;
  }
}
