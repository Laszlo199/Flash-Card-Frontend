import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogData} from "../shared/dialog-data";
import {QuestionsService} from "../../shared/questions.service";


@Component({
  selector: 'app-go-to-practise-popup',
  templateUrl: './go-to-practise-popup.component.html',
  styleUrls: ['./go-to-practise-popup.component.css']
})
export class GoToPractisePopupComponent implements OnInit {
  showAnswer = false;

  constructor(private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private questionService: QuestionsService) {

  }

  ngOnInit(): void {
    this.showAnswer = this.questionService.showAnswer
  }

  goToLearningMode() {
    this.router.navigateByUrl("/learningMode/"+ this.data.id)
  }

  goToTestMode() {
    this.router.navigateByUrl("/test-mode/"+ this.data.id)
  }



  onChange($event: any) {
    this.questionService.showAnswer = $event;
  }
  goToExerciseMode() {
    this.router.navigateByUrl("/exercise-mode/"+ this.data.id)
  }
}
