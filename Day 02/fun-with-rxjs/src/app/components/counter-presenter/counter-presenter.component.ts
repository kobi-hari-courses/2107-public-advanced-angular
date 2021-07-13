import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css']
})
export class CounterPresenterComponent implements OnInit, OnDestroy {
  counterValue: number = 0;
  sub!: Subscription;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.sub = this.counterService
      .getValue()
      .subscribe(val => {
        this.counterValue = val;
        console.log('presenter value changed to ' + val);
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


}
