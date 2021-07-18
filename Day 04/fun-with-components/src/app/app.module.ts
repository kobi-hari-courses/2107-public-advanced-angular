import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';
import { ExpanderComponent } from './components/expander/expander.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StamComponent } from './components/stam/stam.component';
import { ExpanderHeaderDirective } from './components/expander/expander-header.directive';
import { ExpanderButtonDirective } from './components/expander/expander-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ExpanderComponent,
    HighlightDirective,
    StamComponent, 
    ExpanderHeaderDirective, 
    ExpanderButtonDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
