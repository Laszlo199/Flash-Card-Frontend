import { Injectable } from '@angular/core';
import {DecksDto} from "./dtos/deck/decks.dto";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {PostDeckDto} from "./dtos/deck/post-deck.dto";
import {PutDeckDto} from "./dtos/deck/put-deck.dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient) {
  }

  private subject = new Subject<any>();

  sendUpdate(deckCreated: boolean) {
    this.subject.next(deckCreated);
  }

  getUpdate(): Observable<any> {
    return this.subject.asObservable();
  }

  getByUserId(userId: number, search: string): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>(environment.api+"/Decks/GetByUserId/" + userId + "?search=" + search);
  }

  getPublic(searchPhrase: string, currentPage: number, itemsPrPage: number): Observable<DecksDto[]> {
    let url = searchPhrase==""?
      environment.api+ "/Decks/GetAllPublic?CurrentPage="+currentPage+"&ItemsPrPage="+itemsPrPage
    : environment.api+"/Decks/GetAllPublic?search="+searchPhrase+"&CurrentPage="+currentPage+"&ItemsPrPage="+itemsPrPage
    return this._http.get<DecksDto[]>(url);
  }

  createDeck(deck: PostDeckDto): Observable<DecksDto> {
    return this._http.post<DecksDto>(environment.api+"/Decks", deck);
  }

  deleteDeck(deckId: number) {
    return this._http.delete<any>(environment.api+"/Decks/" + deckId);
  }

  updateDeck(newDeck: PutDeckDto) {
    return this._http.put<any>(environment.api+"/Decks", newDeck);
  }

  createCopiedDeck(deckId: number, userId: number): Observable<DecksDto> {
    return this._http.post<DecksDto>(environment.api+"/Decks/CreateCopied?deckId=" + deckId + "&userId=" + userId, null);
  }
}
