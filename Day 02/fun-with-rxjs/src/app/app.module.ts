import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterPresenterComponent } from './components/counter-presenter/counter-presenter.component';
import { CounterWriterComponent } from './components/counter-writer/counter-writer.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterPresenterComponent,
    CounterWriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
