import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingCounterPresenter: boolean = true;

  toggleCounter() {
    this.isShowingCounterPresenter = !this.isShowingCounterPresenter;
  }

  createInterval(): Observable<number> {
    return interval(1000);
  }

  // Cold Custom Observalbe
  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(100);
      setTimeout(() => observer.next(200), 2000);
      setTimeout(() => observer.next(300), 4000);
      setTimeout(() => observer.next(400), 7000);
      setTimeout(() => observer.next(500), 8000);
      setTimeout(() => observer.complete(), 10000);

    });
  }

  // Same custom observable, but hot
  createCustomSubject(): Observable<number> {
    const subject = new Subject<number>();

    subject.next(100);
    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createCustomBehaviorSubject(): Observable<number> {
    const subject = new BehaviorSubject<number>(100);

    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }

  createCustomReplaySubject(): Observable<number> {
    const subject = new ReplaySubject<number>(1);

    subject.next(100);

    setTimeout(() => subject.next(200), 2000);
    setTimeout(() => subject.next(300), 4000);
    setTimeout(() => subject.next(400), 7000);
    setTimeout(() => subject.next(500), 8000);
    setTimeout(() => subject.complete(), 10000);

    return subject;
  }


  createObserver(id: string): Observer<number> {
    return {
      next: t => console.log(`observer ${id}, next: ${t}`),
      complete: () => console.log(`observer ${id}, complete`),
      error: err => console.log(`observer ${id}, error: ${err}`)
    };
  }



  go() {
    const observer1 = this.createObserver('A');
    const observer2 = this.createObserver('B');

    const observable = this.createCustomReplaySubject();

    observable.subscribe(observer1);

    setTimeout(() => {
      observable.subscribe(observer2);
    }, 3500);
  }

}
