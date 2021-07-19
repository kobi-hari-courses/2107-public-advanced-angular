import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowing = true;

  skipper = 3;
  howManyItems = 4;

  theStartIndex = 7;

  setRepeaterValues(times: number, skip: number, start: number) {
    this.howManyItems = times;
    this.skipper = skip;
    this.theStartIndex = start;
  }

  colors = ['red', 'blue', 'green', 'purple', 'teal', 'black'];

  toggle() {
    this.isShowing = !this.isShowing;
  }

  addColor(color: string) {
    this.colors.push(color);
  }
}
