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
 readonly ten: number =10;
  readonly twenty: number = 20;
  readonly twentyFive: number = 25;
  readonly two: number =2;
  readonly five: number =5;
  readonly fifteen: number =15;
  selectedValue: any;
  selectedValueShort: any;
  selectedValueLong: any;



  constructor(@Inject(MAT_DIALOG_DATA) public data: PomodoroData,
              public pomodoroService: PomodoroService) { }

  ngOnInit(): void {
    this.data.pomodoroTime = this.pomodoroService.pomodoroTime;
    this.getSelectedPom()
    this.data.shortBreakTime = this.pomodoroService.shortBreakTime;
    this.getSelectedShort();
    this.data.longBreakTime = this.pomodoroService.longBreakTime;
    this.getSelectedLong();
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

  changeLongBreakTime(value: any) {
    this.pomodoroService.longBreakTime = value;
  }

  private getSelectedLong() {
    if(this.data.longBreakTime==10)
      this.selectedValueLong = this.ten;
    if(this.data.longBreakTime==15)
      this.selectedValueLong = this.fifteen;
    if(this.data.longBreakTime==20)
      this.selectedValueLong = this.twenty;
  }
}
