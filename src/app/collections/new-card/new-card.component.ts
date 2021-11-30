import {Component, Input, OnInit} from '@angular/core';
import {PostCardDto} from "../shared/dtos/card/post-card.dto";
import {CardService} from "../shared/card.service";

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent implements OnInit {
  question: string | undefined;
  answer: string | undefined;

  @Input() deckId: number | undefined;

  constructor(private service: CardService) { }

  ngOnInit(): void {
  }

  addCard() {
    if(this.deckId && this.question && this.answer){
      let newCard: PostCardDto = {
        question: this.question,
        answer: this.answer,
        deckId: this.deckId
      };

      this.service.addCard(newCard)
        .subscribe(data=>{
          this.sendUpdate();
        }, error => {
          console.log(error);
        });
    }
  }

  private sendUpdate(): void {
    if(this.deckId)
      this.service.sendUpdate(this.deckId);
  }
}
