import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.css'], 
  providers: [{
      provide: NG_VALUE_ACCESSOR, 
      useExisting: NumberSpinnerComponent, 
      multi: true
  }, 
 {
   provide: NG_VALIDATORS, 
   useExisting: NumberSpinnerComponent, 
   multi: true
 }]
})
export class NumberSpinnerComponent implements OnInit, ControlValueAccessor, Validator {
  @Input()
  change = 1;

  currentValue: number = 0;

  @HostListener('mousemove')
  onMove() {
    this.invalidateTouch();
  }


  onChange: (v: number) => void = (val: number) => {};

  onTouched: () => void = () => {};

  wasTouched = false;

  isDisabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  inc() {
    this.currentValue+=this.change;
    this.onChange(this.currentValue);
    this.invalidateTouch();

  }

  dec() {
    this.currentValue-=this.change;
    this.onChange(this.currentValue);
    this.invalidateTouch();
  }

  invalidateTouch() {
    if (this.isDisabled) return;
    if (this.wasTouched) return;
    this.wasTouched = true;
    this.onTouched();    
  }


  // Implementation of ControlValueAccessor
  writeValue(obj: any): void {
    console.log('Write Value', obj);
    this.currentValue = Number(obj);
  }
  registerOnChange(fn: (v: number) => void): void {
    console.log('Register On Change', fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    console.log('Register On touched', fn);
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;

  }

  // Implementation of Validator
  validate(control: AbstractControl): ValidationErrors | null {
    if (this.currentValue >= 0) return null;

    return {
      'positive': {
        'expected': 0, 
        'actual': this.currentValue
      }
    }
  }


}
