import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowing = true;

  colors = ['red', 'blue', 'green', 'purple', 'teal', 'black'];

  toggle() {
    this.isShowing = !this.isShowing;
  }

  addColor(color: string) {
    this.colors.push(color);
  }
}
