import {Component, Input, OnInit} from '@angular/core';
import {CardDto} from "../shared/dtos/card/card.dto";
import {DeckService} from "../shared/deck.service";
import {PostCardDto} from "../shared/dtos/card/post-card.dto";
import {CardService} from "../shared/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardDto | undefined;
  @Input() deckId: number | undefined;

  editMode: boolean = false;
  newQuestion: string | undefined;
  newAnswer: string | undefined;

  constructor(private service: CardService) { }

  ngOnInit(): void {
    if(this.card) {
      this.newQuestion = this.card.question;
      this.newAnswer = this.card.answer;
    }
  }

  delete() {
    if(this.card)
    this.service.deleteCard(this.card.id)
      .subscribe(data=>{
        this.sendUpdate();
      }, error=>{
        console.log(error);
      })
  }

  private sendUpdate() {
    if(this.deckId)
      this.service.sendUpdate(this.deckId);
  }

  edit() {
    this.editMode=true;
  }

  editSave() {
    if(this.card && this.newQuestion && this.newAnswer){
      let newCard: CardDto = {
        id: this.card.id,
        question: this.newQuestion,
        answer: this.newAnswer,
        correctness: this.card.correctness
      };

      this.service.updateCard(newCard)
        .subscribe(data=> {
          this.sendUpdate();
          this.editMode=false;
        }, error => {
          console.log(error)
        });
    }
  }

  editCancel() {
    this.editMode = false;
    this.newAnswer = this.card?.answer;
    this.newQuestion = this.card?.question;
  }
}
