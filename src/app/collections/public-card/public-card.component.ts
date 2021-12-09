import {Component, Input, OnInit} from '@angular/core';
import {CardDto} from "../shared/dtos/card/card.dto";

@Component({
  selector: 'app-public-card',
  templateUrl: './public-card.component.html',
  styleUrls: ['./public-card.component.css']
})
export class PublicCardComponent implements OnInit {

  @Input() card: CardDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
