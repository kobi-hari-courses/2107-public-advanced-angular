import { Injectable } from '@angular/core';
import { ALL_COLORS } from '../data/colors';
import { Color } from '../model/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    console.log('starting search for ' + keyword);
    await this.delay(3000);

    if ((!keyword) || (typeof (keyword) !== 'string')) {
      console.log('search completed ' + keyword);
      return [];
    }

    keyword = keyword.toLowerCase();

    let res = ALL_COLORS
      .filter(clr => clr.name.toLowerCase().includes(keyword));

    console.log('search completed ' + keyword);
    return res;
  }

}
