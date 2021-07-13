import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, NEVER, never, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { from, of, timer } from 'rxjs';
import { debounceTime, filter, map, mapTo, mergeAll, switchAll, takeUntil } from 'rxjs/operators';
import { Color } from './model/color.model';
import { ColorsService } from './services/colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  readonly pagings = [5, 10, 20, 'All'];

  whenDestroyed$ = new Subject<void>();

  inifinite$ = NEVER;



  search$ = new Subject<string>();

  paging$ = new BehaviorSubject<string | number>('All');

  results$!: Observable<Color[]>;

  isBusy$!: Observable<boolean>;

  constructor(private colorsService: ColorsService) { }

  ngOnInit(): void {
    this.inifinite$.pipe(takeUntil(this.whenDestroyed$)).subscribe(val => {

    });


    let filteredSearch$ = this.search$.pipe(
      filter(kw => kw.length >= 3),
      debounceTime(500)
    );

    let fullResults$ = filteredSearch$.pipe(
      map(keyword => this.colorsService.search(keyword)),
      switchAll()
    );

    this.results$ = combineLatest([fullResults$, this.paging$]).pipe(
      map(pair => this.collectItemsByPage(pair[0], pair[1]))
    )

    const true$ = filteredSearch$.pipe(mapTo(true));
    const false$ = this.results$.pipe(mapTo(false));

    this.isBusy$ = merge(true$, false$);
  }

  ngOnDestroy() {
    this.whenDestroyed$.next();
  }

  private collectItemsByPage(items: Color[], page: number | string): Color[] {
    if (typeof (page) === 'number') {
      return items.slice(0, page);
    } else {
      return items
    }
  }

  search(keyword: string) {
    this.search$.next(keyword);
  }

  setPaging(value: string) {
    if (value !== 'All') {
      this.paging$.next(Number(value));
    } else {
      this.paging$.next(value);
    }
  }

}
