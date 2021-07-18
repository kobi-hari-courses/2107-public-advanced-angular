import { Component, HostListener, OnInit } from '@angular/core';
import { MyListComponent } from '../my-list/my-list.component';

@Component({
  selector: 'li[my-item]',
  templateUrl: './my-item.component.html',
  styleUrls: ['./my-item.component.css']
})
export class MyItemComponent implements OnInit {

  @HostListener('click')
  onClick() {
    this.myOwnerList.select(this);
  } 

  constructor(private myOwnerList: MyListComponent) { }

  ngOnInit(): void {
    console.log('my item created');
  }

}
