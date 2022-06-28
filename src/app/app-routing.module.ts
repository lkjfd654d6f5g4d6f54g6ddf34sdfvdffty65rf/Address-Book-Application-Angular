import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{
  path:'',
  redirectTo:'contact',
  pathMatch:'full'
},
  {path:'contact',component:ContactComponent},
  {path:'add',component:AddcontactComponent},
  {path:'update/:id',component:AddcontactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
