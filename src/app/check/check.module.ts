import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckRoutingModule } from './check-routing.module';
import { CheckComponent } from './check.component';
import { MaterialModule } from '../material/material.module';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CheckComponent, QuestionComponent],
  imports: [CommonModule, CheckRoutingModule, MaterialModule, FormsModule],
})
export class CheckModule {}
