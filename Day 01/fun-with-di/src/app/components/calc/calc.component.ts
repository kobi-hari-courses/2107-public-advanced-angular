import { Component, Inject, OnInit } from '@angular/core';
import { PREFIX_TOKEN } from 'src/app/contants/prefix-token';
import { AdditionService } from 'src/app/services/addition.service';
import { BlankService } from 'src/app/services/blank.service';
import { WrongAdditionService } from 'src/app/services/wrong-addition.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
  providers: []
})
export class CalcComponent implements OnInit {
  result: number = 0;

  constructor(
    public additionService: AdditionService, 
    public wrondAdditionService: WrongAdditionService,
    public blank: BlankService, 
    @Inject(PREFIX_TOKEN) public prefix: string
  ) { }

  ngOnInit(): void {
  }

  add(n1: number, n2: number) {
    this.result = this.additionService.add(n1, n2);
  }

}
