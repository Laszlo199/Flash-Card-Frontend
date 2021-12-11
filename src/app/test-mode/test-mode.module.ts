import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TestModeRoutingModule} from './test-mode-routing.module';
import {TestViewComponent} from './test-view/test-view.component';
import {FormsModule} from "@angular/forms";
import {SummaryViewComponent} from './summary-view/summary-view.component';
import {CollectionsModule} from "../collections/collections.module";


@NgModule({
  declarations: [
    TestViewComponent,
    SummaryViewComponent
  ],
  imports: [
    CommonModule,
    TestModeRoutingModule,
    FormsModule,
    CollectionsModule
  ]
})
export class TestModeModule { }
