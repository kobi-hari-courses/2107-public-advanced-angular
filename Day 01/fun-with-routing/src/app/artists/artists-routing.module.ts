import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsDetailsComponent } from './components/artists-details/artists-details.component';
import { ArtistsEditComponent } from './components/artists-edit/artists-edit.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  { path: '', component: ArtistsComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ArtistsListComponent }, 
    { path: 'edit/:id', component: ArtistsEditComponent }, 
    { path: 'item/:id', component: ArtistsDetailsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
