import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from 'src/app/models/question.model';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.scss']
})
export class QuestionPresenterComponent implements OnInit {
  currentQuestion$: Observable<Question> = of({
    caption: 'What do you get if you mix Green and Red', 
    answers: [
      'Brown', 
      'Yellow', 
      'Ugly', 
      'Black'
    ], 
    correctAnswer: 1
  });

  constructor() { }

  ngOnInit(): void {
  }

}
