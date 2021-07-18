import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from './models/joke.model';
import { JokeService } from './services/joke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  joke$!: Observable<Joke>;
  count$!: Observable<number>;

  isShowingJokes: boolean= false;

  index: number = 0;


  constructor(private jokesService: JokeService){}
  ngOnInit(): void {
    this.joke$ = this.jokesService.getCurrentJoke().pipe(map(pair => pair[0]));
    this.count$ = this.jokesService.getCurrentJoke().pipe(map(pair => pair[1]));
  }

  toggleShowingJokes() {
    this.isShowingJokes = !this.isShowingJokes;
  }

  next() {
    this.index++;
    this.jokesService.setCurrentJokeParameters('programming', this.index);
  }

  prev() {
    this.index--;
    this.jokesService.setCurrentJokeParameters('programming', this.index);
  }

  // go() {
  //   // const res$ = this.jokesService.getCurrentJoke();
  //   // this.jokesService.setCurrentJokeIndex(5);
  //   // setTimeout(() => {
  //   //   res$.subscribe(res => console.log('first subscribe: ', res));
  //   // }, 2000);

  //   // setTimeout(() => {
  //   //   res$.subscribe(res => console.log('second subscribe: ', res));
  //   // }, 4000);

  //   this.index++;
  //   this.jokesService.setCurrentJokeParameters('programming', this.index);
  // }

}
