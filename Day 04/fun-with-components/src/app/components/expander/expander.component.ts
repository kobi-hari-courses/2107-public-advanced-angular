import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ExpanderButtonDirective } from './expander-button.directive';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.css']
})
export class ExpanderComponent implements OnInit, AfterContentInit {
  @ContentChild(ExpanderButtonDirective)
  toggleButtonDirective: ExpanderButtonDirective | undefined;

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private renderer: Renderer2) { }
  ngAfterContentInit(): void {
    // console.log('after content init, my toggle button is: ', this.toggleButtonDirective);

    // if ((this.toggleButtonDirective) && (this.toggleButtonDirective.elem)) {
    //   this.renderer.listen(this.toggleButtonDirective.elem.nativeElement, 'click', () => {
    //     this.toggle();
    //   })
    // }

  }

  ngOnInit(): void {
  }

}
