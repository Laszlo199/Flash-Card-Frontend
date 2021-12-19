import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeckDto} from "../../collections/shared/dtos/deck/deck.dto";
import {PostAttemptDto} from "./dtos/post-attempt.dto";
import {AttemptDto} from "./dtos/attempt.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private _http: HttpClient) { }

  getDeck(deckId: number): Observable<DeckDto> {
    return this._http.get<DeckDto>(environment.api+"/Decks/GetById/"+deckId);
  }

  createAttempt(attempt: PostAttemptDto) {
    return this._http.post(environment.api+"/Attempts", attempt);
  }

  getAttempts(userId: number, cardId: number, quantity: number): Observable<AttemptDto[]> {
    return this._http.get<AttemptDto[]>(environment.api+"/Attempts?userId="+userId+"&cardId="+cardId+"&quantity="+quantity);
  }
}
