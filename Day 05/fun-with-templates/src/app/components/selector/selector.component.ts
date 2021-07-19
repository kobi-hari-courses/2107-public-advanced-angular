import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemTemplateDirective } from './item-template.directive';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @ContentChild(ItemTemplateDirective)
  itemTemplateDirective: ItemTemplateDirective | undefined;


  @Input()
  options: string[] = [];

  @Input()
  selectedOption: string = '';

  @Output()
  selection = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(value: string) {
    this.selection.emit(value);
    this.selectedOption = value;
  }

}
