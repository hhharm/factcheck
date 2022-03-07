import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/check' },
  {
    path: 'check',
    loadChildren: () =>
      import('./check/check.module').then((m) => m.CheckModule),
  },
  {
    path: 'useful',
    loadChildren: () =>
      import('./useful/useful.module').then((m) => m.UsefulModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
