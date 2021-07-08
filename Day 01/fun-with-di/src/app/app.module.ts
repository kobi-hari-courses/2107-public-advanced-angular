import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { WrongAdditionService } from './services/wrong-addition.service';
import { PREFIX_TOKEN } from './contants/prefix-token';
import { HistoryService } from './services/history.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: WrongAdditionService, useClass: WrongAdditionService},
    {provide: AdditionService, useExisting: WrongAdditionService},
    {provide: PREFIX_TOKEN, useFactory: async () => 'ABC'}, 
    {provide: APP_INITIALIZER, useValue: () => console.log('I am initialized'), multi: true}, 
    {provide: APP_INITIALIZER, useValue: () => console.log('42'), multi: true},
    {provide: APP_INITIALIZER, useValue: () => console.log('Hello World'), multi: true}, 
    {
      provide: APP_INITIALIZER, 
      useFactory: (service: HistoryService) => (() => service.initializeHistory()), 
      deps: [HistoryService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
