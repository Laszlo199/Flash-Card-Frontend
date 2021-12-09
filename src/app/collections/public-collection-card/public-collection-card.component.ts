import {Component, Input, OnInit} from '@angular/core';
import {DecksDto} from "../shared/dtos/deck/decks.dto";
import {DeckService} from "../shared/deck.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-public-collection-card',
  templateUrl: './public-collection-card.component.html',
  styleUrls: ['./public-collection-card.component.css']
})
export class PublicCollectionCardComponent implements OnInit {

  @Input() deck?: DecksDto;
  @Input() userId: number | undefined;

  isAdded: boolean = false;
  errorMsg = "";

  newDeckId: number | undefined;

  constructor(private service: DeckService, private router: Router) { }

  ngOnInit(): void {
  }

  addCollection() {
    if(this.deck && this.userId && !this.isAdded)
    this.service.createCopiedDeck(this.deck.id, this.userId)
      .subscribe(d=>{
        this.isAdded=true;
        this.newDeckId = d.id;
      },error => {
        console.log(error);
        this.errorMsg = "this collection is already yours";
      })
  }

}
