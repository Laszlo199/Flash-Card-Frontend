import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeckDto} from "../../collections/shared/dtos/deck/deck.dto";
import {PostAttemptDto} from "./dtos/post-attempt.dto";
import {AttemptDto} from "./dtos/attempt.dto";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private _http: HttpClient) { }

  getDeck(deckId: number): Observable<DeckDto> {
    return this._http.get<DeckDto>("https://localhost:5001/Decks/GetById/"+deckId);
  }

  createAttempt(attempt: PostAttemptDto) {
    return this._http.post("https://localhost:5001/Attempts", attempt);
  }

  getAttempts(userId: number, cardId: number, quantity: number): Observable<AttemptDto[]> {
    return this._http.get<AttemptDto[]>("https://localhost:5001/Attempts?userId="+userId+"&cardId="+cardId+"&quantity="+quantity);
  }
}
