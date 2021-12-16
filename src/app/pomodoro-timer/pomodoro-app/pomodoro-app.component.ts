import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-app',
  templateUrl: './pomodoro-app.component.html',
  styleUrls: ['./pomodoro-app.component.css']
})
export class PomodoroAppComponent implements OnInit {
  public timerControlAction: any;
  public change: any

  constructor() {
  }

  ngOnInit(): void {
  }

  receiveAction($event: any) {
    this.timerControlAction = $event;
  }

  receiveChangeStart($event: any) {
    this.change = $event;
  }
}
