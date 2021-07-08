import { Component, OnInit } from '@angular/core';
import { IsDirty } from 'src/app/core/guards/is-dirty.model';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit, IsDirty {
  isDirty: boolean = false;
  
  constructor() { }
  getIsDirty(): boolean {
    return this.isDirty;
  }

  ngOnInit(): void {
  }

  toggleDirty() {
    this.isDirty = !this.isDirty;
  }

}
