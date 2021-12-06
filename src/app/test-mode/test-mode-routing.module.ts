import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestViewComponent} from "./test-view/test-view.component";
import {SummaryViewComponent} from "./summary-view/summary-view.component";

const routes: Routes = [
  {
    path: 'summary', component: SummaryViewComponent
  },
  {
    path: ':id', component: TestViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModeRoutingModule { }
