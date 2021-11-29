import { Injectable } from '@angular/core';
import {DecksDto} from "./decks.dto";
import {DECKS} from "./fake-decks";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(private _http: HttpClient) { }

  getDecks(): DecksDto[] {
    return DECKS;
  }

  getByUserId(userId: number, search: string): Observable<DecksDto[]> {
    return this._http.get<DecksDto[]>("https://localhost:5001/Decks/GetByUserId/"+userId+"?search="+search);
  }

}
