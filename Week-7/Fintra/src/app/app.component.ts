import { Component } from '@angular/core';
import { QuestionService } from './_services/question.service';
import { QuestionBase } from './question/question-base';
import { Observable } from 'rxjs';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <h2>Job Application for Heroes</h2>
  //     <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
  //   </div>
  // `,
  styleUrls: ['./app.component.css'], 
  providers:  [QuestionService],
})
export class AppComponent {
  title = 'Fintra';

  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
