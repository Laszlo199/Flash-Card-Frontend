import { Injectable } from '@angular/core';
import {DeckDto} from "./deck.dto";
import {DECKS} from "./fake-decks";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient) { }

  getDecks(): DeckDto[] {
    return DECKS;
  }

  getByUserId(userId: number, search: string): Observable<DeckDto[]> {
    return this._http.get<DeckDto[]>("https://localhost:5001/Decks/GetByUserId/"+userId+"?search="+search);
  }
}
