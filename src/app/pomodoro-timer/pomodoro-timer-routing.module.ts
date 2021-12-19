import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PomodoroAppComponent} from "./pomodoro-app/pomodoro-app.component";

const routes: Routes = [
  {
    path: '', component: PomodoroAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PomodoroTimerRoutingModule {
}
