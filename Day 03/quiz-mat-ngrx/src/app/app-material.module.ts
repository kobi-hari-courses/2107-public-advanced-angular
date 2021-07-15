import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";


const exportables = [
    MatButtonModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatCardModule
];

@NgModule({
    imports: exportables, 
    exports: exportables
})
export class AppMaterialModule {

}