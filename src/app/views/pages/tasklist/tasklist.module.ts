import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';

import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown"
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    TasklistComponent
  ],
  imports: [
    CommonModule,
    TasklistRoutingModule,
    NgxPaginationModule,
    NgbDropdownModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()


  ]
})
export class TasklistModule { }
