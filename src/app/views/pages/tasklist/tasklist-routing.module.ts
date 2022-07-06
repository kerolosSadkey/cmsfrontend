import { ShowDocumentComponent } from './show-document/show-document.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './tasklist.component';

const routes: Routes = [{ path: '', component: TasklistComponent },
  {path:"task/:id",component:ShowDocumentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasklistRoutingModule {


 }
