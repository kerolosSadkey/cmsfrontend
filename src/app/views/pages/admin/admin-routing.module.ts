import { UpdateOrginaztionComponent } from './update-orginaztion/update-orginaztion.component';
import { AllUserComponent } from './all-user/all-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DefaulPagetAdminComponent } from './defaul-paget-admin/defaul-paget-admin.component';
import { AllOrginaztionComponent } from './all-orginaztion/all-orginaztion.component';
import { CreateOrginaztionComponent } from './create-orginaztion/create-orginaztion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', component: AdminComponent,

   children:[
    {path:'', redirectTo:'defaultpageAdmin', pathMatch:'full'}
    ,
    {path:"defaultpageAdmin", component:DefaulPagetAdminComponent},
    {path:"creatOraginaze", component:CreateOrginaztionComponent},
    {path:"allOraginaze", component:AllOrginaztionComponent},
    {path:"updateOraginaze/:id", component:UpdateOrginaztionComponent},
    {path:"creatUser", component:CreateUserComponent},
    {path:"allUser", component:AllUserComponent},
    {path:"updateUser/:id", component:UpdateUserComponent},
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
