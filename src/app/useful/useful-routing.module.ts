import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', redirectTo: '/video', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'video', component: VideoComponent },
  { path: '**', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsefulRoutingModule {}
