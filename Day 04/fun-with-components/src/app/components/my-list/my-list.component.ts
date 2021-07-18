import { Component, OnInit } from '@angular/core';
import { MyItemComponent } from '../my-item/my-item.component';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  select(item: MyItemComponent) {
    console.log(item);
  }

}
