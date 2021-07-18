import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input()
  options: string[] = [];

  private _selectedOption: string = '';
  @Input()
  get selectedOption() {
    return this._selectedOption;
  }
  set selectedOption(value: string) {
    this._selectedOption = value;
    this.selectedIndex = this.options.indexOf(this._selectedOption);
  }

  selectedIndex = 0;

  @Output()
  selection = new EventEmitter<string>();


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);

    // this.selectedIndex = this.options.indexOf(this.selectedOption);
  }

  ngOnInit(): void {
    console.log('Selector is initialized');
    console.log('the options are: ', this.options);
  }

  selectOption(option: string) {
    this.selection.emit(option);    
  }

}
