import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';
import { DashboardComponent } from 'app/master/dashboard/dashboard.component';
import { MyAccountComponent } from 'app/master/my-account/my-account.component';

import { AuthGuard } from 'app/auth/auth.guard';
import { AuthService } from 'app/auth/auth.service';
import { MyAccountService } from 'app/master/my-account/my-account.service';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'account',
        component: MyAccountComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    MyAccountService,
  ]
})
export class MasterRoutingModule { }
