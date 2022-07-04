import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundRoutingModule } from './inbound-routing.module';
import { InboundComponent } from './inbound.component';
import { CreatCorrespondenceComponent } from './creat-correspondence/creat-correspondence.component';


@NgModule({
  declarations: [
    InboundComponent,
    CreatCorrespondenceComponent
  ],
  imports: [
    CommonModule,
    InboundRoutingModule,
    
  ],
  exports:[

  ]
})
export class InboundModule { }
