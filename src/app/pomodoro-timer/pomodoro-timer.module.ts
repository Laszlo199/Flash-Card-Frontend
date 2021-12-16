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


@NgModule({
  declarations: [
    PomodoroAppComponent,
    TimerComponent,
    ControlsComponent,
    SwitchingModesComponent
  ],
  imports: [
    CommonModule,
    PomodoroTimerRoutingModule,
    CollectionsModule,
    MatButtonToggleModule,
    MatButtonModule
  ]
})
export class PomodoroTimerModule {
}
