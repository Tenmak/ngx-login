import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {
  private _sidenav: MatSidenav;

  get sidenav() { return this._sidenav; }
  set sidenav(value) { this._sidenav = value; }

  constructor() { }

  openSidenav() {
    if (this.sidenav) {
      this.sidenav.open();
    }
  }
}
