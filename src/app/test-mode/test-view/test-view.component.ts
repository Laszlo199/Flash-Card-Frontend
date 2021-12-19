import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CollectionService} from "../shared/collection.service";
import {DeckDto} from "../../collections/shared/dtos/deck/deck.dto";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {SummaryService} from "../shared/summary.service";
import {PostAttemptDto} from "../shared/dtos/post-attempt.dto";
import {AuthService} from "../../auth/shared/auth.service";
import {QuestionsService} from "../../shared/questions.service";


@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit {
  showAnswerFirst :boolean =false;
  userId: number | undefined;
  deckId : number | undefined;
  deck: DeckDto | undefined;
  cards: CardDto[] | undefined;
  currentCardIndex: number = 0;

  correct: number = 0;
  wrong: number = 0;
  skipped: number = 0;
  answer: string | undefined;

  correctCards: Array<CardDto> = [];
  wrongCards: Array<CardDto> = [];
  skippedCards: Array<CardDto> = [];

  checked: boolean = false;
  answeredCorrectly: boolean | undefined;

  constructor(private route: ActivatedRoute, private service: CollectionService,
              private router: Router, private summaryService: SummaryService,
              private loginService: AuthService,
              private questionService: QuestionsService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.userId = this.loginService.getUserId();
    this.loadDeck();
    this.showAnswerFirst = this.questionService.showAnswer
  }

  private loadDeck() {
    if(this.deckId)
      this.service.getDeck(this.deckId)
        .subscribe(deck => {
          this.deck = deck;
          this.cards = deck.cards;
          this.currentCardIndex = 0;
        })
  }

  checkAnswer() {
    if(!this.checked && this.answer && this.cards && this.userId) {
      this.checked = true;

      let card;
      if(!this.showAnswerFirst)
        card = this.cards[this.currentCardIndex].answer.toLowerCase();
      else
        card = this.cards[this.currentCardIndex].question.toLowerCase();

      if (this.answer.toLowerCase() == card) {
        this.answeredCorrectly = true;
        this.correct++;
        this.correctCards.push(this.cards[this.currentCardIndex]);

        let attempt: PostAttemptDto = {
          "userId": this.userId,
          "cardId": this.cards[this.currentCardIndex].id,
          "wasCorrect": true,
          "date": new Date()
        };
        this.service.createAttempt(attempt)
          .subscribe(a=> {
            console.log(a);
          }, error => console.log(error))

      } else {
        this.answeredCorrectly = false;
        this.wrong++;
        this.wrongCards.push(this.cards[this.currentCardIndex]);

        let attempt: PostAttemptDto = {
          "userId": this.userId,
          "cardId": this.cards[this.currentCardIndex].id,
          "wasCorrect": false,
          "date": new Date()
        };
        this.service.createAttempt(attempt)
          .subscribe(a=> {
            console.log(a);
          }, error => console.log(error))
      }
    }
  }

  nextQuestion() {
    this.answer = undefined;
    this.answeredCorrectly = undefined;
    this.checked = false;

    if(this.currentCardIndex+1 == this.cards?.length) {
      this.goToSummary();
    }
    else this.currentCardIndex++;
  }

  skip() {
    if(this.cards && !this.checked) {
      this.skipped++;
      this.skippedCards.push(this.cards[this.currentCardIndex]);
      this.nextQuestion();
    }
  }

  showHint() {
    if (this.cards) {

      if(this.showAnswerFirst)
        this.answer = this.cards[this.currentCardIndex].question.charAt(0);
      else
        this.answer = this.cards[this.currentCardIndex].answer.charAt(0);
    }
  }

  private goToSummary() {
    this.router.navigateByUrl('/test-mode/summary');
    this.summaryService.setCorrectCards(this.correctCards);
    this.summaryService.setWrongCards(this.wrongCards);
    this.summaryService.setSkippedCards(this.skippedCards);
    if (this.deckId != null) {
      this.summaryService.setDeckId(this.deckId);
    }
  }

  leave() {
    if(confirm("Are you sure you want to leave?") && this.deckId)
      this.router.navigateByUrl("/collections/"+this.deckId);
  }
}
