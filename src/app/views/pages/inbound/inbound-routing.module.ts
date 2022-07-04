import { CreatCorrespondenceComponent } from './creat-correspondence/creat-correspondence.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboundComponent } from './inbound.component';

const routes: Routes = [
  { path: '', component: InboundComponent,
   children:[
    {path: '', component:CreatCorrespondenceComponent}
   ] },

];

@NgModule({
  imports: [

    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundRoutingModule { }
