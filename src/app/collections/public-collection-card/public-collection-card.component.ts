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

  constructor(private service: DeckService, private router: Router) { }

  ngOnInit(): void {
  }

  addCollection() {
    if(this.deck && this.userId)
    this.service.createCopiedDeck(this.deck.id, this.userId)
      .subscribe(d=>{
        this.isAdded=true;
      },error => console.log(error))
  }

  goToCollection() {
    this.router.navigateByUrl("/collections/"+this.deck?.id)
  }
}
