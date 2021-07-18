import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  @ContentChild('expanderButton', {read: ElementRef})
  toggleButton: ElementRef | undefined;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }
  ngAfterContentInit(): void {
    console.log('after content init, my toggle button is: ', this.toggleButton);

    if (this.toggleButton) {
      (this.toggleButton.nativeElement as HTMLButtonElement).addEventListener('click', () => this.toggle());
    }
  }

  ngOnInit(): void {
  }

}
