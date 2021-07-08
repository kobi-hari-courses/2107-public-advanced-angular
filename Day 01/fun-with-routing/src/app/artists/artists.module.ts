import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistsDetailsComponent } from './components/artists-details/artists-details.component';
import { ArtistsEditComponent } from './components/artists-edit/artists-edit.component';


@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistsListComponent,
    ArtistsDetailsComponent,
    ArtistsEditComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule
  ]
})
export class ArtistsModule { }
