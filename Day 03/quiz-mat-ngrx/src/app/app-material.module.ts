import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


const exportables = [
    MatButtonModule, 
    MatIconModule
];

@NgModule({
    imports: exportables, 
    exports: exportables
})
export class AppMaterialModule {

}