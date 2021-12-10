import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DecksDto} from "../collections/shared/dtos/deck/decks.dto";
import {Observable} from "rxjs";
import {CardDto} from "../collections/shared/dtos/card/card.dto";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private _http: HttpClient) { }

  getDecksForUser(userId: number): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>("https://localhost:5001/Decks/GetByUserId/"+userId)
  }

  getCardsForDeck(deckId: number): Observable<CardDto[]> {
    return this._http.get<CardDto[]>("https://localhost:5001/api/Cards?deckId="+deckId)
  }
}
