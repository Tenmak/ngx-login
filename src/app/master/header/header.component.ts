import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';

import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMenuOpen: boolean = window.localStorage.getItem('isNavigationMenuOpen')
    ? JSON.parse(window.localStorage.getItem('isNavigationMenuOpen')) as boolean
    : false;
  searchBarExpand = false;
  searchIsActivated = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  expand() {
    this.searchBarExpand = !this.searchBarExpand;
    if (!this.searchBarExpand) {
      this.searchIsActivated = false;
    }
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  openSideBar() {
    // this.sidenavService.openSidenav();
  }

  /**
  * On research in the header searchBar
  * @param {Event} event
  */
  updateFilter(event: Event) {
  }

  logOut() {
    this.authService.logOut();
  }

  changeLanguage(language: string) {

  }
}
