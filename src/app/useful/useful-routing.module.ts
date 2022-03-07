import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsefulComponent } from './useful.component';

const routes: Routes = [{ path: '', component: UsefulComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsefulRoutingModule { }
