import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'purple', 'brown', 'teal'];

  selectedColor = this.colors[0];

  onSelect(color: string) {
    console.log('Selected color: ' + color);
    this.selectedColor = color;
  }

  onHighlightHidden() {
    console.log('Highlight was clicked and hidden');
  }

  audit(mashu: any) {
    console.log(mashu);
  }
}
