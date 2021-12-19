import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DecksDto} from "../../collections/shared/dtos/deck/decks.dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private _http: HttpClient) { }

  getAllPublic(currentPage: number, itemsPrPage: number): Observable<DecksDto[]>{
    return this._http.get<DecksDto[]>(environment.api+"/Decks/GetAllPublic?CurrentPage="+currentPage+"&ItemsPrPage="+itemsPrPage)
  }
}
