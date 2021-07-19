import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[selectorItem]'
})
export class ItemTemplateDirective {
    constructor(public template: TemplateRef<any>){}
}