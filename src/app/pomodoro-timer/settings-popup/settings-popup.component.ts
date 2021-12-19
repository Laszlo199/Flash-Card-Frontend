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
  two: number =2;
  five: number =5;
  selectedValue: any;
  selectedValueShort: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: PomodoroData,
              public pomodoroService: PomodoroService) { }

  ngOnInit(): void {
    this.data.pomodoroTime = this.pomodoroService.pomodoroTime;
    this.getSelectedPom()
    this.data.shortBreakTime = this.pomodoroService.shortBreakTime;
    this.getSelectedShort();
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

  changeShortBreakTime(value: any) {
    this.pomodoroService.shortBreakTime = value;
  }

  private getSelectedShort() {
    if(this.data.shortBreakTime==2)
      this.selectedValueShort = this.two;
    if(this.data.shortBreakTime==5)
      this.selectedValueShort = this.five;
    if(this.data.shortBreakTime==10)
      this.selectedValueShort = this.ten;
  }
}
