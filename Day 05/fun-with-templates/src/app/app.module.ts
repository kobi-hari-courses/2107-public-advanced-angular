import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IfDirective } from './directives/if.directive';
import { RepeatDirective } from './directives/repeat.directive';
import { SelectorComponent } from './components/selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    IfDirective,
    RepeatDirective,
    SelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
