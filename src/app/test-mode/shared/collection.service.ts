import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DeckDto} from "../../collections/shared/dtos/deck/deck.dto";

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private _http: HttpClient) { }

  getDeck(deckId: number): Observable<DeckDto> {
    return this._http.get<DeckDto>("https://localhost:5001/Decks/GetById/"+deckId);
  }
}
