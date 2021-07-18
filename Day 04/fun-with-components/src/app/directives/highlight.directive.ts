import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight], .hl', 
  exportAs: 'highlight'
})
export class HighlightDirective implements OnInit, OnDestroy {
  @Input('highlight')
  highlight: string = 'pink';

  @HostBinding('style.background')
  bgColor: string = 'pink';


  @Output()
  highlightHidden = new EventEmitter<void>();
  

  @HostListener('click')
  whenClicked() {
    if (this.bgColor) {
      this.bgColor = '';
      this.highlightHidden.emit();
    }

  }


  constructor(
    private elem: ElementRef, 
    private renderer: Renderer2) {       

      // this.renderer.setStyle(elem.nativeElement, 'background', 'pink');

      // elem.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit(): void {
    if (this.highlight) {
      this.bgColor = this.highlight;
    }
  }
  ngOnDestroy(): void {
  }

  reset() {
    this.bgColor = this.highlight;
  }

}
