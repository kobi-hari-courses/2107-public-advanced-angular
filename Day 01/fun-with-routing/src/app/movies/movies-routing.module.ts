import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CanLeavePageGuard } from "../core/guards/can-leave-page.guard";
import { MoviesDetailsComponent } from "./components/movies-details/movies-details.component";
import { MoviesEditComponent } from "./components/movies-edit/movies-edit.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";
import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes = [
    { path: '', component: MoviesComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: MoviesListComponent }, 
      { path: 'edit/:id', component: MoviesEditComponent, canDeactivate: [CanLeavePageGuard] }, 
      { path: 'item/:id', component: MoviesDetailsComponent }
    ]}
  ];
  
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule {

}