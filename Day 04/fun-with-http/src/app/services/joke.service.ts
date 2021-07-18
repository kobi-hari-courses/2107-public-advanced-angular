import { HttpClient, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, publishBehavior, publishReplay, refCount, shareReplay, switchMap } from 'rxjs/operators';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private currentJoke$: Observable<[Joke, number]>;
  private fetch$ = new BehaviorSubject<[string, number]>(['programming', 0]);
  
  constructor(private http: HttpClient) {
    this.currentJoke$ = this.fetch$.pipe(
      switchMap(([type, index]) => this.getJoke(type, index)), 
      publishReplay(1), 
      refCount()
      // shareReplay(1)
    )
  }

  private getJoke(type: string, index: number): Observable<[Joke, number]> {
    const url = `http://localhost:3000/jokes?_start=${index}&_limit=1&type=${type}`;

    return this.http.get<Joke[]>(url, {observe: 'response'})
    .pipe(
      map(response => [response.body![0], Number(response.headers.get('x-total-count'))])
    );
  }

  setCurrentJokeParameters(type: string, index: number) {
    this.fetch$.next([type, index]);
  }

  getCurrentJoke(): Observable<[Joke, number]> {
    return this.currentJoke$;
  }
}
