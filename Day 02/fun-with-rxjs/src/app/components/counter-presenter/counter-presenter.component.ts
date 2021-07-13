import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-counter-presenter',
  templateUrl: './counter-presenter.component.html',
  styleUrls: ['./counter-presenter.component.css'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPresenterComponent implements OnInit  {
   counterValue$!: Observable<number>;


  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {

    this.counterValue$ = this.counterService.getValue().pipe(
      tap(val => console.log('counter presented value changed to ' + val))
    );
  }

}
