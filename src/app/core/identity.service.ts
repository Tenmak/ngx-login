import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class IdentityService {
  private _jwtHelper: JwtHelper = new JwtHelper();

  constructor() { }

  getToken(): string {
    return window.localStorage.getItem('id_token');
  }

  setToken(token?): void {
    if (token) {
      window.localStorage.setItem('id_token', token);
    } else {
      window.localStorage.removeItem('id_token');
    }
  }
}
