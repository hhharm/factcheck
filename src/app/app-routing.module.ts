import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/useful' },
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
  { path: '**', redirectTo: '/useful' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
