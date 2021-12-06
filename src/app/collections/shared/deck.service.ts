import { Injectable } from '@angular/core';
import {DecksDto} from "./dtos/deck/decks.dto";
import {DECKS} from "./fake-decks";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {PostDeckDto} from "./dtos/deck/post-deck.dto";
import {CardDto} from "./dtos/card/card.dto";
import {PutDeckDto} from "./dtos/deck/put-deck.dto";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient) { }

  private subject = new Subject<any>();

  sendUpdate(deckCreated: boolean) {
    this.subject.next(deckCreated);
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

  getPublic(): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>("https://localhost:5001/Decks/GetAllPublic");
  }

  createDeck(deck: PostDeckDto): Observable<DecksDto> {
    return this._http.post<DecksDto>("https://localhost:5001/Decks", deck);
  }

  deleteDeck(deckId: number) {
    return this._http.delete<any>("https://localhost:5001/Decks/"+deckId);
  }

  updateDeck(newDeck: PutDeckDto) {
    return this._http.put<any>("https://localhost:5001/Decks", newDeck);
  }
}
