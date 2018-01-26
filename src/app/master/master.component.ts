import { Component } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

import { AuthService } from 'app/auth/auth.service';

@Component({
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  isMenuOpen = window.localStorage.getItem('isNavigationMenuOpen')
    ? JSON.parse(window.localStorage.getItem('isNavigationMenuOpen')) as boolean
    : false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  getMenuStatus(dataOutput: boolean) {
    this.isMenuOpen = dataOutput;
    window.localStorage.setItem('isNavigationMenuOpen', dataOutput.toString());
  }
}
