import {Component, Input, OnInit} from '@angular/core';
import {FlashcardsLearningModeService} from "../shared/flashcards-learning-mode.service";
import {FlashcardDto} from "../shared/dtos/flashcard-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {QuestionsService} from "../../shared/questions.service";

@Component({
  selector: 'app-flashcards-studying',
  templateUrl: './flashcards-studying.component.html',
  styleUrls: ['./flashcards-studying.component.css']
})
export class FlashcardsStudyingComponent implements OnInit {

  deckId: number|undefined;
  private collection$: Subscription | undefined;
 flashcards$: Array<FlashcardDto> | undefined;
  counter: number =0;
  flash: FlashcardDto | undefined;
  answer: boolean = false;


  constructor( private route: ActivatedRoute
               ,private _flashcardsService: FlashcardsLearningModeService,
               private router: Router,
               private questionService: QuestionsService) {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.collection$ = this._flashcardsService.getCollection(this.deckId).subscribe(
      s => {
        this.flashcards$ = s.cards;
        this.flash = this.flashcards$[0];
      }
    );

  }


  ngOnInit(): void {
    this.answer = this.questionService.showAnswer;
  }

  next(): void {
    if(this.flashcards$?.[this.counter+1])
      this.flash = this.flashcards$?.[++this.counter];
  }

  previews(): void {
    if(this.flashcards$?.[this.counter-1])
      this.flash = this.flashcards$?.[--this.counter];
  }

  rotate(): void{
    if(this.answer)
      this.answer = false;
    else
      this.answer = true;
  }

  backToCollections() {
    this.router.navigateByUrl("/collections");
  }

  leave() {
    if(confirm("Are you sure you want to leave?") && this.deckId)
      this.router.navigateByUrl("/collections/"+this.deckId);
  }
}
