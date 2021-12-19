import {Component, OnInit} from '@angular/core';
import {SettingsPopupComponent} from "../settings-popup/settings-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {PomodoroService} from "../pomodoro.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-pomodoro-app',
  templateUrl: './pomodoro-app.component.html',
  styleUrls: ['./pomodoro-app.component.css']
})
export class PomodoroAppComponent implements OnInit {
  public timerControlAction: any;
  public change: any
  no: number =1;
// Subscription
  private componentSubscription: Subscription;
  constructor(private dialog: MatDialog,
              private pomodoroService: PomodoroService) {
    this.componentSubscription= this.pomodoroService.sampleSubscriber.subscribe((value) =>
    {
      if(value=='pomodoro1' && this.no<=3){
        ++this.no;
      }

      else if(value=='pomodoro1' && this.no==4){
        this.no = 1 ;
      }

    });
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
