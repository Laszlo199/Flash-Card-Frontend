import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FlashcardDto} from "./dtos/flashcard-dto";
import {CollectionDto} from "./dtos/collection-dto";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FlashcardsLearningModeService {

  constructor(private _http: HttpClient) { }

  /*now we can make asynchronous calls thanks to Observable*/
  getCollection(deckId: number): Observable<CollectionDto> {
    let sortOrder = "correctness_asc";
    let url = environment.api+"/Decks/GetById/"+deckId +"?sortOrder="+ sortOrder;
    return this._http.get<CollectionDto>(url);
  }
}
