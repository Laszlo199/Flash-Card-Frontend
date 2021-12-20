import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciseService} from "../shared/exercise.service";
import {exerciseCardsDto} from "../shared/exerciseCards.dto";
import {exerciseDecksDto} from "../shared/exerciseDecks.dto";
import {PostAttemptDto} from "../../test-mode/shared/dtos/post-attempt.dto";
import {AuthService} from "../../auth/shared/auth.service";

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
  answeredCorrectly: boolean | undefined;
  private userId: number=0;


  constructor(private _service: ExerciseService,
              private _router: Router, private _route: ActivatedRoute, private loginService: AuthService) {}

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this._route.snapshot.paramMap.get('id');
    this.userId = this.loginService.getUserId();// I need the user id but I dont have this function in this branch
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

  async checkAnswer() {

      if (!this.checked && this.answer && this.cards) {
        this.checked = true;

        if (this.answer.toLowerCase() == this.cards[this.index].answer.toLowerCase()) {
          this.answeredCorrectly = true;
          console.log('good');
          let attempt: PostAttemptDto = {
            "userId": this.userId,
            "cardId": this.cards[this.index].id,
            "wasCorrect": true,
            "date": new Date()
          };
          this._service.createAttempt(attempt)
            .subscribe(a=> {
              console.log(a);
            }, error => console.log(error))
          await new Promise(f => setTimeout(f, 2000));
          if (this.cards.length == 1){
            this.goBackToCollectionsById();
          }
          this.toggle();
          this.hideAnswer();
          if (this.index+1 == this.cards.length) {
            this.index = 0;
            this.cards.splice(this.cards.length-1, 1);
          }else {
            this.cards.splice(this.index, 1);
          }
        } else {
          this.answeredCorrectly = false;
          let attempt: PostAttemptDto = {
            "userId": this.userId,
            "cardId": this.cards[this.index].id,
            "wasCorrect": false,
            "date": new Date()
          };
          this._service.createAttempt(attempt)
            .subscribe(a=> {
              console.log(a);
            }, error => console.log(error))

          console.log('wrong');
          this.checked = true;
          await new Promise(f => setTimeout(f, 2000));
          this.hideAnswer();
          this.checked = false;
          this.toggle();
          this.skip();
        }
      }
  }

  hideAnswer() {
    this.checked = false;
  }

  async skip() {
    if (this.index + 1 == this.cards?.length || this.index == this.cards?.length) {
      this.index = 0;
    }else {
     this.index++;
    }
  }

  async idontKnow() {
    this.checked = true;
    this.toggle();
    await new Promise(f => setTimeout(f, 2000));
    this.toggle();
    this.checked = false;
    this.skip();
  }

  goBackToCollectionsById(){
      this._router.navigateByUrl("/collections/"+this.deckId);
  }
}
