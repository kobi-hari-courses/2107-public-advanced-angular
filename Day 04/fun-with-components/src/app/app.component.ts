import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = ['red', 'green', 'blue', 'purple', 'brown', 'teal'];
  sizes = ['18px', '24px', '36px', '48px'];

  selectedColor = this.colors[0];
  selectedSize = this.sizes[0];

  onSelectColor(color: string) {
    console.log('Selected color: ' + color);
    this.selectedColor = color;
  }

  onSelectSize(size: string) {
    this.selectedSize = size;
  }

  onHighlightHidden() {
    console.log('Highlight was clicked and hidden');
  }

  audit(mashu: any) {
    console.log(mashu);
  }
}
