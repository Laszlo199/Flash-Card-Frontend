import {Component, Input, OnInit} from '@angular/core';
import {DecksDto} from "../shared/dtos/decks.dto";

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() deck?: DecksDto;

  constructor() { }

  ngOnInit(): void {
  }

}
