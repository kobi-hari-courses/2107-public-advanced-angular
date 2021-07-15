import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { QuizDoneComponent } from './components/quiz-done/quiz-done.component';
import { ExamsModule } from './exams/exams.module';

const routes: Routes = [
  {path: '', redirectTo: 'question', pathMatch: 'full'},
  {path: 'question', component: QuestionPresenterComponent}, 
  {path: 'done', component: QuizDoneComponent}, 
  {path: 'exams', loadChildren: () => import('./exams/exams.module').then(m => ExamsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
