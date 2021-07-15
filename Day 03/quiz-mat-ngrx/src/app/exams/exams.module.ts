import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamsContainerComponent } from './components/exams-container/exams-container.component';
import { StoreModule } from '@ngrx/store';
import { examsReducer } from './components/redux/exams.reducer';
import { examsFeatureKey } from './components/redux/exams.state';


@NgModule({
  declarations: [
    ExamsContainerComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule, 
    StoreModule.forFeature(examsFeatureKey, examsReducer)
  ]
})
export class ExamsModule { }
