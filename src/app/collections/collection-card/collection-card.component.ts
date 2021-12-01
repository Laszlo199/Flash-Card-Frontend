import {Component, Input, OnInit} from '@angular/core';
import {DecksDto} from "../shared/dtos/deck/decks.dto";
import {Router} from "@angular/router";


@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {

  @Input() deck?: DecksDto;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLearningMode(id: number) {
    this.router.navigateByUrl("/learningMode/"+id)
  }
}
