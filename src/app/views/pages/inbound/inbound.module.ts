import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundRoutingModule } from './inbound-routing.module';
import { InboundComponent } from './inbound.component';
import { CreatCorrespondenceComponent } from './creat-correspondence/creat-correspondence.component';
import {MatChipsModule} from '@angular/material/chips';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown"
import { MatCheckboxModule } from '@angular/material/checkbox/checkbox-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
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
    NgMultiSelectDropDownModule.forRoot(),
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  exports:[

  ]
})
export class InboundModule { }
