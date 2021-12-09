import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DecksDto} from "../../collections/shared/dtos/deck/decks.dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private _http: HttpClient) { }

  getAllPublic(): Observable<DecksDto[]>{
    return this._http.get<DecksDto[]>("https://localhost:5001/Decks/GetAllPublic/")
  }
}
