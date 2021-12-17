import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {exerciseDecksDto} from "./exerciseDecks.dto";
import {PostAttemptDto} from "../../test-mode/shared/dtos/post-attempt.dto";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private _http: HttpClient) {
  }

  getallDecks(deckId: number): Observable<exerciseDecksDto> {
    return this._http.get<exerciseDecksDto>("https://localhost:5001/Decks/GetById/" + deckId)
  }

  createAttempt(attempt: PostAttemptDto) {
    return this._http.post("https://localhost:5001/Attempts", attempt);
  }
}
