import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {exerciseDecksDto} from "./exerciseDecks.dto";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private _http: HttpClient) {
  }

  getallDecks(deckId: number): Observable<exerciseDecksDto> {
    return this._http.get<exerciseDecksDto>("https://localhost:5001/Decks/GetById/" + deckId)
  }
}
