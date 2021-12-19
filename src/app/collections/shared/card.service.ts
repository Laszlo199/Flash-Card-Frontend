import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {DeckDto} from "./dtos/deck/deck.dto";
import {PostCardDto} from "./dtos/card/post-card.dto";
import {CardDto} from "./dtos/card/card.dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private _http: HttpClient) { }

  private subject = new Subject<any>();

  sendUpdate(deckId: number) {
    this.subject.next(deckId);
  }

  getUpdate(): Observable<any> {
    return this.subject.asObservable();
  }

  getByDeckId(id: number, sortOrder: string): Observable<DeckDto> {
    let url =
      sortOrder=="" ? environment.api+"/Decks/GetById/"+id
                    : environment.api+"/Decks/GetById/"+id+"?sortOrder="+sortOrder;
    return this._http.get<DeckDto>(url);
  }

  addCard(newCard: PostCardDto): Observable<CardDto> {
    return this._http.post<CardDto>(environment.api+"/api/Cards", newCard);
  }

  deleteCard(id: number) {
    return this._http.delete<CardDto>(environment.api+"/api/Cards/"+id);
  }

  updateCard(newCard: CardDto): Observable<CardDto> {
    return this._http.put<CardDto>(environment.api+"/api/Cards", newCard);
  }
}
