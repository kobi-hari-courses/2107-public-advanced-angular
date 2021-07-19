import { Directive, DoCheck, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef, ViewRef } from '@angular/core';

export interface RepeatContext {
  $implicit: number;
  isOdd: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export interface RepeatView {
  view: ViewRef, 
  context: RepeatContext
}

@Directive({
  selector: '[myRepeat]'
})
export class RepeatDirective implements OnChanges {

  private views: RepeatView[] = [];

  @Input()
  myRepeatTimes: number = 1;

  @Input()
  myRepeatSkip: number = 1;

  @Input()
  myRepeatStartWith: number = 1;

  constructor(
    private template: TemplateRef<any>, 
    private viewContainer: ViewContainerRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.invalidate();
  }

  invalidate() {
    while (this.views.length < this.myRepeatTimes) {
      const context: RepeatContext = {
        $implicit: 0,
        isFirst: false, 
        isLast: false, 
        isOdd: false
      }

      const view = this.template.createEmbeddedView(context);
      this.views.push({context, view});
      this.viewContainer.insert(view);
    }

    while (this.views.length > this.myRepeatTimes) {
      this.views.splice(this.views.length - 1, 1);
      this.viewContainer.remove(this.viewContainer.length - 1);
    }

    for (let index = 0; index < this.views.length; index++) {
      let context = this.views[index].context;
      context.$implicit = index * this.myRepeatSkip + this.myRepeatStartWith;
      context.isFirst = (index === 0);
      context.isLast = (index === this.views.length - 1);
      context.isOdd = (index % 2 === 0);
    }

  }

}
