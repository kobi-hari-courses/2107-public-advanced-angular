import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { ProgressComponent } from './components/progress/progress.component';
import { QuestionPresenterComponent } from './components/question-presenter/question-presenter.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './redux/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appFeatureKey } from './redux/app.state';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
    QuestionPresenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    AppMaterialModule, 
    StoreModule.forRoot({
      [appFeatureKey]: appReducer
    }), 
    StoreDevtoolsModule.instrument({
      maxAge: 50, 
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
