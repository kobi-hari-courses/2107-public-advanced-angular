import { NgModule } from "@angular/core";
import { NAME_TOKEN } from "../common-stuff/name-token";
import { SubSharedModule } from "../sub-shared/sub-shared.module";
import { AComponent } from './components/a/a.component';

@NgModule({
  declarations: [
    AComponent
  ], 
  imports: [
    SubSharedModule
  ],
  exports: [
    AComponent, 
    SubSharedModule
  ], 
  providers: [
    {provide: NAME_TOKEN, useValue: 'SHARED'}
  ]
})
export class SharedModule {

}