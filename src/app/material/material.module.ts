import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [MatCardModule, MatRadioModule, MatButtonModule, MatIconModule],
  exports: [MatCardModule, MatRadioModule, MatButtonModule, MatIconModule],
})
export class MaterialModule {}
