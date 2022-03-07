import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsefulRoutingModule } from './useful-routing.module';
import { UsefulComponent } from './useful.component';
import { MaterialModule } from '../material/material.module';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [UsefulComponent, LinksComponent],
  imports: [CommonModule, UsefulRoutingModule, MaterialModule],
})
export class UsefulModule {}
