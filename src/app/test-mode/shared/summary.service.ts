import { Injectable } from '@angular/core';
import {CardDto} from "../../collections/shared/dtos/card/card.dto";

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private correctCards: Array<CardDto> = [];
  private wrongCards: Array<CardDto> = [];
  private skippedCards: Array<CardDto> = [];
  private deckId: number | undefined;

  constructor() { }

  setCorrectCards(cards: Array<CardDto>) {
    this.correctCards = cards;
  }

  setWrongCards(cards: Array<CardDto>) {
    this.wrongCards = cards;
  }

  setSkippedCards(cards: Array<CardDto>) {
    this.skippedCards = cards;
  }

  setDeckId(deckId: number) {
    this.deckId = deckId;
  }

  getCorrectCards() {
    return this.correctCards;
  }

  getWrongCards() {
    return this.wrongCards;
  }

  getSkippedCards() {
    return this.skippedCards;
  }

  getDeckId() {
    return this.deckId;
  }
}
