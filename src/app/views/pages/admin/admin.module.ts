
import { NgbDatepickerModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrginaztionComponent } from './create-orginaztion/create-orginaztion.component';
import { AllOrginaztionComponent } from './all-orginaztion/all-orginaztion.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { DefaulPagetAdminComponent } from './defaul-paget-admin/defaul-paget-admin.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarAdminComponent,
    CreateOrginaztionComponent,
    AllOrginaztionComponent,
    NavbarAdminComponent,
    DefaulPagetAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PerfectScrollbarModule,
    FeatherIconModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,

  ]
})
export class AdminModule { }
