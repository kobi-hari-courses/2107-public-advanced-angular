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

  selectedColor = this.colors[0];

  fonts = ['Verdana', 'Times new Roman', 'Consolas', 'Arial', 'Segoe UI', 'Tahoma'];

  selectedFont = this.fonts[0];

  toggle() {
    this.isShowing = !this.isShowing;
  }

  addColor(color: string) {
    this.colors.push(color);
  }

  selectColor(color: string) {
    this.selectedColor = color;
  }

  selectFont(font: string) {
    this.selectedFont = font;
  }
}
