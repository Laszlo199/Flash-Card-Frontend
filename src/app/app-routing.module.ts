import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "collections",
    loadChildren: () => import('./collections/collections.module')
      .then(f=>f.CollectionsModule),
  },
  {
    path: "home",
    loadChildren: () => import('./home-page/home-page.module')
      .then(f=>f.HomePageModule),
  },
  {
    path: "learningMode",
    loadChildren: () => import('./learning-mode/learning-mode.module')
      .then(f=>f.LearningModeModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
