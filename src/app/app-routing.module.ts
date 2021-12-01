import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "collections",
    loadChildren: () => import('./collections/collections.module')
      .then(f=>f.CollectionsModule)
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module')
      .then(f=>f.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
