import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  constructor() { }

  async confirm(message: string): Promise<boolean> {
    const confirmation = window.confirm(message);
    return confirmation;

  }
}
