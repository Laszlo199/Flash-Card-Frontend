import {Component, Input, OnInit} from '@angular/core';
import {CardDto} from "../shared/dtos/card.dto";
import {DeckService} from "../shared/deck.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardDto | undefined;
  @Input() deckId: number | undefined;

  constructor(private service: DeckService) { }

  ngOnInit(): void {
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
}
