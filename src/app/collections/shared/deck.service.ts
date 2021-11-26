import { Injectable } from '@angular/core';
import {DeckDto} from "./deck.dto";
import {DECKS} from "./fake-decks";

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor() { }

  getDecks(): DeckDto[] {
    return DECKS;
  }
}
