import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamsContainerComponent } from './components/exams-container/exams-container.component';

const routes: Routes = [
  {path: '', component: ExamsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
