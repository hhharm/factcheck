import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input()
  question!: string;

  @Input()
  answer!: string;

  @Input()
  correctAnswer!: 0 | 1;

  @Output()
  next = new EventEmitter();

  public choice?: string;

  constructor() {}

  ngOnChanges(): void {
    this.choice = undefined;
  }

  ngOnInit(): void {}

  onNextClick(correct: boolean) {
    this.next.emit(correct);
  }
}
