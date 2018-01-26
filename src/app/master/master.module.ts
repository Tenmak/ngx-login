import { NgModule } from '@angular/core';

import { MasterRoutingModule } from './master-routing.module';
import { SharedBaseModule } from 'app/shared/shared-base.module';

import { MasterComponent } from './master.component';
import { SideNavigationComponent } from 'app/master/side-navigation/side-navigation.component';
import { DashboardComponent } from 'app/master/dashboard/dashboard.component';
import { MyAccountComponent } from 'app/master/my-account/my-account.component';
import { HeaderComponent } from 'app/master/header/header.component';

@NgModule({
  imports: [
    SharedBaseModule,
    MasterRoutingModule,
  ],
  declarations: [
    MasterComponent,
    SideNavigationComponent,
    DashboardComponent,
    MyAccountComponent,
    HeaderComponent,
  ],
  providers: [
  ]
})
export class MasterModule { }
