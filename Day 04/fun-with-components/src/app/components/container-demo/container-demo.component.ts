import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-demo',
  templateUrl: './container-demo.component.html',
  styleUrls: ['./container-demo.component.css']
})
export class ContainerDemoComponent implements OnInit {
  ranges = [
    {
      from: 2, 
      to: 20
    }, 
    {
      from: 25, 
      to: 30
    }, 
    {
      from: 40, 
      to: 50
    }
  ];

  



  constructor() { }

  ngOnInit(): void {
  }

}
