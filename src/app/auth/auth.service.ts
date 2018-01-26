import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import { tokenNotExpired, AuthHttp } from 'angular2-jwt';

import { environment } from 'environments/environment';

@Injectable()
export class AuthService {
  private _isAuthenticated = false;

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  // Temporary for demo
  set isAuthenticated(value) {
    this._isAuthenticated = value;
  }

  constructor(
    // private httpClient: HttpClient,
    // private authHttp: AuthHttp,
    private router: Router
  ) { }

  logOut() {
    this.isAuthenticated = false;
    // Redirect the user
    this.router.navigate(['/auth/login']);
  }
}
