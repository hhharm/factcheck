import { qnas } from '../assets/data/qna';
import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'fake-check';
  totalQuestions = qnas.length;
  score = 0;
  started = false;

  qna = qnas[0];
  index = 0;

  onNextClick(correct: boolean) {
    this.index++;
    if (correct) this.score++;
    this.qna = qnas[this.index];
  }
}
