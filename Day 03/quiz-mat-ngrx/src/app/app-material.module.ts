import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from '@angular/material/list';


const exportables = [
    MatButtonModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatListModule
];

@NgModule({
    imports: exportables, 
    exports: exportables
})
export class AppMaterialModule {

}