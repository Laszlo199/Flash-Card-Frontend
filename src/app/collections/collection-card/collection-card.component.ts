import {Component, Input, OnInit} from '@angular/core';
import {DeckDto} from "../shared/deck.dto";

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() deck?: DeckDto;

  constructor() { }

  ngOnInit(): void {
  }

}
