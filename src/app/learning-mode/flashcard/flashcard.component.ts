import {Component, Input, OnInit} from '@angular/core';
import {FlashcardDto} from "../shared/dtos/flashcard-dto";

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  @Input() flashcard: FlashcardDto | undefined;
  @Input() question: boolean | undefined ;


  constructor() { }

  ngOnInit(): void {

  }

}
