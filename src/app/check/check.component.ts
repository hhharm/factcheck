import { Component, OnInit } from '@angular/core';
import { qnas } from '../../assets/data/qna';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
