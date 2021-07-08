import { Component, OnInit } from '@angular/core';
import { PREFIX_TOKEN } from 'src/app/contants/prefix-token';
import { AdditionService } from 'src/app/services/addition.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [AdditionService, 
  {provide: PREFIX_TOKEN, useValue: '@@@'}]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
