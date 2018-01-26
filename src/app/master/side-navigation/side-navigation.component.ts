import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  @Output() isMenuOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen = window.localStorage.getItem('isNavigationMenuOpen')
    ? JSON.parse(window.localStorage.getItem('isNavigationMenuOpen')) as boolean
    : false;
  showChildren = {};

  constructor(private router: Router) { }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  displayMenu() {
    this.isOpen = !this.isOpen;
    this.isMenuOpen.emit(this.isOpen);
  }

  showMyChildren(id: number, treeRoot: any) {
    if (treeRoot.children.length > 1) {
      if (!this.showChildren[id]) {
        this.showChildren[id] = true;
      } else {
        this.showChildren[id] = !this.showChildren[id];
      }
    } else {
      // this.navigateTo(treeRoot.children[0].path, treeRoot.children[0].queryParams);
    }
  }
}
