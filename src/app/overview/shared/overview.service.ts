import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DecksDto} from "../../collections/shared/dtos/deck/decks.dto";
import {Observable} from "rxjs";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {AttemptDto} from "../../test-mode/shared/dtos/attempt.dto";
import {ActivityDto} from "./activity.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private _http: HttpClient) { }

  getDecksForUser(userId: number): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>(environment.api+"/Decks/GetByUserId/"+userId)
  }

  getCardsForDeck(deckId: number): Observable<CardDto[]> {
    return this._http.get<CardDto[]>(environment.api+"/api/Cards?deckId="+deckId)
  }

  getActivity(userId: number, page: number, items: number): Observable<ActivityDto[]> {
    return this._http.get<ActivityDto[]>(environment.api+"/Attempts/"+userId+"?CurrentPage="+page+"&ItemsPrPage="+items)
  }

  getAllActivity(userId: number): Observable<ActivityDto[]> {
    return this._http.get<ActivityDto[]>(environment.api+"/Attempts/"+userId+"?CurrentPage=1&ItemsPrPage=30")
  }
}
