import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasklistRoutingModule } from './tasklist-routing.module';
import { TasklistComponent } from './tasklist.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown"
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowDocumentComponent } from './show-document/show-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TasklistComponent,
    ShowDocumentComponent
  ],
  imports: [
    CommonModule,
    TasklistRoutingModule,
    NgxPaginationModule,
    NgbDropdownModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
=======
>>>>>>> ebea711b52806914f2c7a82cc46d383425d7ed4b
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()


  ]
})
export class TasklistModule { }
