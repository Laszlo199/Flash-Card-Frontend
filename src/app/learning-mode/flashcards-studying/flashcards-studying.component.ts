import {Component, Input, OnInit} from '@angular/core';
import {FlashcardsLearningModeService} from "../shared/flashcards-learning-mode.service";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {CollectionDto} from "../shared/dtos/collection-dto";
import {FlashcardDto} from "../shared/dtos/flashcard-dto";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-flashcards-studying',
  templateUrl: './flashcards-studying.component.html',
  styleUrls: ['./flashcards-studying.component.css']
})
export class FlashcardsStudyingComponent implements OnInit {

  deckId: number|undefined;
  private collection$: Subscription | undefined;
 flashcards$: Array<FlashcardDto> | undefined;
 private counter: number =0;
  flash: FlashcardDto | undefined;

  constructor( private route: ActivatedRoute
               ,private _flashcardsService: FlashcardsLearningModeService) {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.collection$ = this._flashcardsService.getCollection(this.deckId).subscribe(
      s => {
        this.flashcards$ = s.cards;
        this.flash = this.flashcards$[0] //works
      }
    );

  }


  ngOnInit(): void {

  }

  next(): void {
      this.flash = this.flashcards$?.[++this.counter]; //fucking doesnt work
  }

  previews(): void {
    this.flash = this.flashcards$?.[--this.counter]; //fucking doesnt work
  }

}
