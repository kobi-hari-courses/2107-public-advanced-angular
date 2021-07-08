import { NgModule } from "@angular/core";
import { NAME_TOKEN } from "../common-stuff/name-token";
import { BComponent } from './components/b/b.component';

@NgModule({
  declarations: [
    BComponent
  ], 
  exports: [
    BComponent
  ], 
  providers: [
    {provide: NAME_TOKEN, useValue: 'SUB'}
  ]
})
export class SubSharedModule {

}