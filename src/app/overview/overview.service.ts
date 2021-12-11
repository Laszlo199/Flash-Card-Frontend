import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DecksDto} from "../collections/shared/dtos/deck/decks.dto";
import {Observable} from "rxjs";
import {CardDto} from "../collections/shared/dtos/card/card.dto";
import {AttemptDto} from "../test-mode/shared/dtos/attempt.dto";
import {Activity} from "./shared/activity";

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

  getActivity(userId: number, page: number, items: number): Observable<Activity[]> {
    return this._http.get<Activity[]>("https://localhost:5001/Attempts/"+userId+"?CurrentPage="+page+"&ItemsPrPage="+items)
  }
}
