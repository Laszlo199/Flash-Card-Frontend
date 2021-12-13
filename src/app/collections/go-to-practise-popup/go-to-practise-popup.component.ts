import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogData} from "../shared/dialog-data";


@Component({
  selector: 'app-go-to-practise-popup',
  templateUrl: './go-to-practise-popup.component.html',
  styleUrls: ['./go-to-practise-popup.component.css']
})
export class GoToPractisePopupComponent implements OnInit {

  constructor(private router: Router,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  goToLearningMode() {
    this.router.navigateByUrl("/learningMode/"+ this.data.id)
  }

  goToTestMode() {
    this.router.navigateByUrl("/test-mode/"+ this.data.id)
  }

  goToExerciseMode() {
    this.router.navigateByUrl("/exercise-mode/"+ this.data.id)
  }
}
