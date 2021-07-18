import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token$ = new BehaviorSubject<string>('');


  login(username: string) {
    this.token$.next(`--**${username}**--`);
  }

  logout() {
    this.token$.next('');
  }

  getToken(): Observable<string> {
    return this.token$.asObservable();
  }

  constructor() { }
}
