import { Component, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

interface ColorComponents {
  red: number;
  green: number;
  blue: number;
}


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'], 
  providers: [
    {provide: NG_VALUE_ACCESSOR, 
    useExisting: ColorPickerComponent, 
    multi: true
}
  ]
})
export class ColorPickerComponent implements OnInit, OnDestroy, ControlValueAccessor {

  currentValue$ = new BehaviorSubject<string>('#000000');

  sub: Subscription[] = [];


  form = new FormGroup({
    red: new FormControl(0), 
    green: new FormControl(0), 
    blue: new FormControl(0)
  });

  onTouched = () => {}

  constructor() { }

  ngOnInit(): void {
    const value$ = this.form.valueChanges.pipe(
      map(val => val as ColorComponents),
      map(cc => this.rgbToHex(cc.red, cc.green, cc.blue)), 
    );

    this.sub.push(value$.subscribe(this.currentValue$));

  }

  ngOnDestroy(): void {
    for (const sub of this.sub) {
      sub.unsubscribe();
    }
  }

  componentToHex(c: number): string {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  rgbToHex(r: number, g: number, b: number): string {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  hexToRgb(hex: string) : ColorComponents | null {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? {
        red: parseInt(result[1], 16), 
        green: parseInt(result[2], 16), 
        blue: parseInt(result[3], 16)
      }
      : null;
  }

  writeValue(obj: any): void {
    let hex = String(obj);
    this.currentValue$.next(hex);
    let componets = this.hexToRgb(hex) || {red: 0, green: 0, blue: 0};
    this.form.setValue(componets, {emitEvent: false});
  }

  registerOnChange(fn: any): void {
    this.sub.push(this.form.valueChanges.pipe(
      map(val => val as ColorComponents), 
      map(cc => this.rgbToHex(cc.red, cc.green, cc.blue))
    ).subscribe(fn));
  }
  registerOnTouched(fn: any): void {
    this.sub.push(this.form.valueChanges.subscribe(fn));
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }




}
