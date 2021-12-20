import { Component, OnInit } from '@angular/core';
import {OverviewService} from "../shared/overview.service";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {DeckOverview} from "../shared/deckOverview";
import {AttemptDto} from "../../test-mode/shared/dtos/attempt.dto";
import {ActivityDto} from "../shared/activity.dto";
import {Observable} from "rxjs";
import {AuthService} from "../../auth/shared/auth.service";

@Component({
  selector: 'app-main-overview',
  templateUrl: './main-overview.component.html',
  styleUrls: ['./main-overview.component.css']
})
export class MainOverviewComponent implements OnInit {
  userId: number | undefined;
  bestDecks: Array<DeckOverview> = [];
  okDecks: Array<DeckOverview> = [];
  badDecks: Array<DeckOverview> = [];

  activities$: Observable<ActivityDto[]> | undefined;
  currentPage = 1;
  itemsPerPage = 6;

  streak: number = 0;

  constructor(private service: OverviewService, private loginService: AuthService) {
  }

  ngOnInit(): void {
    this.userId = this.loginService.getUserId();
    //get decks
    this.service.getDecksForUser(this.userId)
      .subscribe(decks => {
        for (let deck of decks) {
          this.getCards(deck.id, deck.name);
        }
        this.sort();
      })

    //get activities
    this.activities$ = this.service.getActivity(this.userId, this.currentPage, this.itemsPerPage);

    //get all to count streak
    this.service.getAllActivity(this.userId)
      .subscribe(act => {
        this.getStreak(act);
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

    if (cards.length > 0) {
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

    if (avgCorrectness >= 80)
      this.bestDecks.push(deck);
    else if (avgCorrectness > 50)
      this.okDecks.push(deck);
    else this.badDecks.push(deck);

  }

  private sort() {
    this.bestDecks.sort((d1, d2) => d1.average - d2.average);
    this.okDecks.sort((d1, d2) => d1.average - d2.average);
    this.badDecks.sort((d1, d2) => d1.average - d2.average);
  }

  previousActivities() {
    if(this.currentPage>1 && this.userId) {
      this.currentPage--;
      this.activities$ = this.service.getActivity(this.userId, this.currentPage, this.itemsPerPage);
    }
  }

  nextActivities() {
    if(this.currentPage<5 && this.userId) {
      this.currentPage++;
      this.activities$ = this.service.getActivity(this.userId, this.currentPage, this.itemsPerPage);
    }
  }

  private getStreak(activities: ActivityDto[]) {
    for(let act of activities) {
      if(act.cardsPractised>0) this.streak++;
      else break;
    }
  }
}
