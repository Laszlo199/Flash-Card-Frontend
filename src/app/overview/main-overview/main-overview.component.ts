import { Component, OnInit } from '@angular/core';
import {OverviewService} from "../overview.service";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {DeckOverview} from "../shared/deckOverview";

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {
  userId = 1;
  bestDecks: Array<DeckOverview> = [];
  okDecks: Array<DeckOverview> = [];
  badDecks: Array<DeckOverview> = [];

  constructor(private service: OverviewService) { }

  ngOnInit(): void {
    this.service.getDecksForUser(this.userId)
      .subscribe(decks=>{
        for(let deck of decks) {
          this.getCards(deck.id, deck.name);
        }
        this.sort();
      })
  }

  private getCards(deckId: number, name: string) {
    this.service.getCardsForDeck(deckId)
      .subscribe(cards => {
        this.calculateAvg(cards, deckId, name);
      })
  }

  private calculateAvg(cards: CardDto[], deckId: number, name: string) {
    let sum = 0;
    let perfectCards = 0;
    let avgCorrectness = 0;

    if(cards.length>0) {
      for (let card of cards) {
        sum = sum + card.correctness;
        if (card.correctness == 100) perfectCards++;
      }
      avgCorrectness = sum / cards.length;
    }

    let deck = {
      "deckId": deckId,
      "name": name,
      "cards": cards.length,
      "perfectCards": perfectCards,
      "average": avgCorrectness
    };

    if(avgCorrectness>=80)
      this.bestDecks.push(deck);
    else if(avgCorrectness >50)
      this.okDecks.push(deck);
    else this.badDecks.push(deck);

  }

  private sort() {
    this.bestDecks.sort((d1,d2) => d1.average - d2.average);
    this.okDecks.sort((d1,d2) => d1.average - d2.average);
    this.badDecks.sort((d1,d2) => d1.average - d2.average);
  }

}
