import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsService } from './utils.service';
import { SidenavService } from './sidenav.service';
import { AuthGuard } from 'app/auth/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
  ],
  providers: [
    UtilsService,
    SidenavService,
    AuthGuard,
  ]
})

export class CoreModule { }
