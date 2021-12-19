import {Component, OnInit} from '@angular/core';
import {SettingsPopupComponent} from "../settings-popup/settings-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-pomodoro-app',
  templateUrl: './pomodoro-app.component.html',
  styleUrls: ['./pomodoro-app.component.css']
})
export class PomodoroAppComponent implements OnInit {
  public timerControlAction: any;
  public change: any

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  receiveAction($event: any) {
    this.timerControlAction = $event;
  }

  receiveChangeStart($event: any) {
    this.change = $event;
  }

  openPopup() {
    const dialogRef= this.dialog.open(SettingsPopupComponent,
      {
        height: '450px',
        width: '700px',
        data: {}, //we need to pass that empty data!
        autoFocus: false
      });
  }
}
