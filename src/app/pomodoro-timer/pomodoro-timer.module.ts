import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PomodoroTimerRoutingModule} from './pomodoro-timer-routing.module';
import {PomodoroAppComponent} from './pomodoro-app/pomodoro-app.component';
import {TimerComponent} from './timer/timer.component';
import {ControlsComponent} from './controls/controls.component';
import {CollectionsModule} from "../collections/collections.module";
import {SwitchingModesComponent} from './switching-modes/switching-modes.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import { SettingsPopupComponent } from './settings-popup/settings-popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";


@NgModule({
  declarations: [
    PomodoroAppComponent,
    TimerComponent,
    ControlsComponent,
    SwitchingModesComponent,
    SettingsPopupComponent
  ],
  imports: [
    CommonModule,
    PomodoroTimerRoutingModule,
    CollectionsModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ]
})
export class PomodoroTimerModule {
}
