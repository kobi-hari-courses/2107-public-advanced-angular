import { Directive, ElementRef, HostListener } from "@angular/core";
import { ExpanderComponent } from "./expander.component";

@Directive({
    selector:'[expander-button]'
})
export class ExpanderButtonDirective {

    // constructor(private expander: ExpanderComponent){}

    // @HostListener('click')
    // onButtonClick() {
    //     this.expander?.toggle();
    // }

    constructor(public elem: ElementRef){}


}