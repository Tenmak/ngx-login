import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';
import { UserInformations, UserPassword } from './my-account.interface';

@Injectable()
export class MyAccountService {

  constructor() { }

  updatePassword(userPasswordUpdate: UserPassword) {
    return new Observable();
  }

  updateUser(userUpdate: UserInformations) {
    return new Observable();
  }

  updateLogo(logoUpdate: FormData) {
    return new Observable();
  }

  /**
   * Error message display when catch is called
   * @param {*} error
   * @returns {Promise<any>}
   */
  handleError(error: any): Observable<any> {
    // console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
