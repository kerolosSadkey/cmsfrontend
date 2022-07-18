import { DefaulPagetAdminComponent } from './defaul-paget-admin/defaul-paget-admin.component';
import { AllOrginaztionComponent } from './all-orginaztion/all-orginaztion.component';
import { CreateOrginaztionComponent } from './create-orginaztion/create-orginaztion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,

   children:[
    {path:'', redirectTo:'defaultpageAdmin', pathMatch:'full'}
    ,
    {path:"defaultpageAdmin", component:DefaulPagetAdminComponent},
    {path:"creatOraginaze", component:CreateOrginaztionComponent},
    {path:"allOraginaze", component:AllOrginaztionComponent}
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
