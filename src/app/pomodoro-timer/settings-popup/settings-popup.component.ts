import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {PomodoroData} from "../shared/pomodoro-data";
import {PomodoroService} from "../pomodoro.service";



@Component({
  selector: 'app-settings-popup',
  templateUrl: './settings-popup.component.html',
  styleUrls: ['./settings-popup.component.css']
})
export class SettingsPopupComponent implements OnInit {
  ten: number =10;
  twenty: number = 20;
  twentyFive: number = 25;
  selectedValue: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: PomodoroData,
              public pomodoroService: PomodoroService) { }

  ngOnInit(): void {
    this.data.pomodoroTime = this.pomodoroService.pomodoroTime;
    this.getSelectedPom()
    this.data.shortBreakTime = this.pomodoroService.shortBreakTime;
    this.data.longBreakTime = this.pomodoroService.longBreakTime;
  }

  getSelectedPom(){
    if(this.data.pomodoroTime==10)
      this.selectedValue = this.ten;
    if(this.data.pomodoroTime==20)
      this.selectedValue = this.twenty;
    if(this.data.pomodoroTime==25)
      this.selectedValue = this.twentyFive;
  }


  changePomodoroTime(value: any) {
    this.pomodoroService.pomodoroTime = value;
  }
}
