import { NgModule } from "@angular/core";
import { MoviesDetailsComponent } from "./components/movies-details/movies-details.component";
import { MoviesEditComponent } from "./components/movies-edit/movies-edit.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { MoviesRoutingModule } from "./movies-routing.module";

// Feature Module
@NgModule({
    declarations: [
        MoviesComponent, 
        MoviesEditComponent, 
        MoviesListComponent, 
        MoviesDetailsComponent
    ], 
    imports: [
        MoviesRoutingModule
    ]
})
export class MoviesModule {

}