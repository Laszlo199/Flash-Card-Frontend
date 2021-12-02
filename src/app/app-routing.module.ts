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
    path: "test-mode",
    loadChildren: () => import('./test-mode/test-mode.module')
      .then(f=>f.TestModeModule)
  },
  {
    path: '',  redirectTo: '/home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
