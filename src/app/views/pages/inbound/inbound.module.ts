import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundRoutingModule } from './inbound-routing.module';
import { InboundComponent } from './inbound.component';
import { CreatCorrespondenceComponent } from './creat-correspondence/creat-correspondence.component';

import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown"
@NgModule({
  declarations: [
    InboundComponent,
    CreatCorrespondenceComponent,

  ],
  imports: [
    CommonModule,
    InboundRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[

  ]
})
export class InboundModule { }
