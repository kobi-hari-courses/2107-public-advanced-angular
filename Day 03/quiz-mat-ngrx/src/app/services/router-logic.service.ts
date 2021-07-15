import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { isQuizDone } from '../redux/app.helpers';
import { AppState } from '../redux/app.state';
import { AppSelectors } from '../redux/app.types';

@Injectable({
  providedIn: 'root'
})
export class RouterLogicService {
  constructor(
    private store: Store<any>, 
    private router: Router) { }

  start() {
    this.router.events.subscribe(
      (evt) => {
      }
    )

    console.log('Router Logic started');

    const legalRoute$ = this.store.select(AppSelectors.root).pipe(
      map(state => this.calcCurrentRoute(state)), 
      distinctUntilChanged()
    );
    
    const currentRoute$ = this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd), 
      map(ev => (ev as NavigationEnd).url)
    );

    combineLatest([legalRoute$, currentRoute$])
      .subscribe(([legal, current]) => {
        console.log(legal, current);

        if (current === '/exams') return;
        this.router.navigate([legal]);
      })

  }

  calcCurrentRoute(state: AppState): string {
    if (isQuizDone(state)) return 'done';

    return 'question';
  }
}
