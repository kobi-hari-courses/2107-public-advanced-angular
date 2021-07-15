import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, map } from 'rxjs/operators';
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
    console.log('Router Logic started');
    this.store.select(AppSelectors.root).pipe(
      map(state => this.calcCurrentRoute(state)), 
      distinctUntilChanged()
    ).subscribe(route => {
      this.router.navigate([route]);
    });
  }

  calcCurrentRoute(state: AppState): string {
    if (isQuizDone(state)) return 'done';

    return 'question';
  }
}
