import { Injectable } from '@angular/core';
import {DecksDto} from "./dtos/decks.dto";
import {DECKS} from "./fake-decks";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {DeckDto} from "./dtos/deck.dto";
import {PostCardDto} from "./dtos/post-card.dto";
import {CardDto} from "./dtos/card.dto";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient) { }

  private subject = new Subject<any>();

  sendUpdate(deckId: number) {
    this.subject.next(deckId);
  }

  getUpdate(): Observable<any> {
    return this.subject.asObservable();
  }

  getDecks(): DecksDto[] {
    return DECKS;
  }

  getByUserId(userId: number, search: string): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>("https://localhost:5001/Decks/GetByUserId/"+userId+"?search="+search);
  }

  getByDeckId(id: number): Observable<DeckDto> {
    return this._http.get<DeckDto>("https://localhost:5001/Decks/GetById/"+id);
  }

  addCard(newCard: PostCardDto): Observable<CardDto> {
    return this._http.post<CardDto>("https://localhost:5001/api/Cards", newCard);
  }
}
