import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciseService} from "../shared/exercise.service";
import {exerciseCardsDto} from "../shared/exerciseCards.dto";
import {exerciseDecksDto} from "../shared/exerciseDecks.dto";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {

  deckId : number | undefined;
  deck: exerciseDecksDto | undefined;
  cards: exerciseCardsDto[] | undefined;
  index: number = 0;
  toggleProperty = false;
  answer: string | undefined;
  checked: boolean = false;


  constructor(private _service: ExerciseService,
              private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this._route.snapshot.paramMap.get('id');
    this.loadDeck()
  }






  private loadDeck() {
    if(this.deckId)
      this._service.getallDecks(this.deckId)
        .subscribe(deck => {
          this.deck = deck;
          this.cards = deck.cards;
          this.index = 0;
        })
  }

  Back() {
    this._router.navigateByUrl("/collections");
  }


  toggle() {
    this.toggleProperty = !this.toggleProperty;
  }

  checkAnswer() {

  }
}
