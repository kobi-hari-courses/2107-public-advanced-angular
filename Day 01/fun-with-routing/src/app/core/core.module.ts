import { ModuleWithProviders, NgModule } from "@angular/core";
import { NAME_TOKEN } from "../common-stuff/name-token";

@NgModule({
    providers: [
        {provide: NAME_TOKEN, useValue: 'CORE'}
    ]
})
export class CoreModule {

}