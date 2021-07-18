import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stam',
  templateUrl: './stam.component.html',
  styleUrls: ['./stam.component.css']
})
export class StamComponent implements OnInit {
  @Input()
  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
    console.log('Stam was created');
  }

}
