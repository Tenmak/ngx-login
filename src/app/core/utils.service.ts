import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  /**
   * Filters the URLs that include angular2 QueryParams
   * @param {string} urlWithQueryParams URL with Angular2 QueryParams included
   * @returns {string} Pure URL without QueryParams
   */
  filterQueryParams(urlWithQueryParams: string): string {
    let urlSegment = urlWithQueryParams;
    if (urlSegment.includes('?')) {
      const index = urlSegment.indexOf('?');
      urlSegment = urlSegment.slice(0, index);
    }
    return urlSegment;
  }
}
