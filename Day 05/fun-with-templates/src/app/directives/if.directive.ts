import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class IfDirective {
  private _myIf = false;
  private _isShowing = false;

  @Input()
  get myIf(): boolean {return this._myIf;}
  set myIf(value: boolean) {
    this._myIf = value;
    this.invalidate();
  }

  invalidate() {
    if (this._myIf === this._isShowing) return;

    this._isShowing = this._myIf;

    if (this._myIf) {
      const view = this.template.createEmbeddedView(null);
      this.viewContainerRef.insert(view);
    } else {
      this.viewContainerRef.clear();
    }
  }


  constructor(
    private template: TemplateRef<any>, 
    private viewContainerRef: ViewContainerRef
  ) { 
  }

}
