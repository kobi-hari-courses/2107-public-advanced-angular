import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChipComponent } from './components/chip/chip.component';
import { OptionAComponent } from './components/option-a/option-a.component';
import { OptionBComponent } from './components/option-b/option-b.component';
import { OptionCComponent } from './components/option-c/option-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    OptionAComponent,
    OptionBComponent,
    OptionCComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
})
export class AppModule { }
