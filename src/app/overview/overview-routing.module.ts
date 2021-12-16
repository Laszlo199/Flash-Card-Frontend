import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainOverviewComponent} from "./main-overview/main-overview.component";

const routes: Routes = [
  {
    path: '', component: MainOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
