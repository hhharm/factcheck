import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsefulRoutingModule } from './useful-routing.module';
import { UsefulComponent } from './useful.component';
import { MaterialModule } from '../material/material.module';
import { ArticlesComponent } from './articles/articles.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [UsefulComponent, ArticlesComponent, VideoComponent],
  imports: [CommonModule, UsefulRoutingModule, MaterialModule],
})
export class UsefulModule {}
