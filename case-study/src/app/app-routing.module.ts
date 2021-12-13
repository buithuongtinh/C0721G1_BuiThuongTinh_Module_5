import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import {CustomerCreateComponent} from './customers/customer-create/customer-create.component';
import {HomeComponent} from './home/home.component';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {EmployeeCreateComponent} from './employee/employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee/employee-edit/employee-edit.component';
import {CustomerEditComponent} from './customers/customer-edit/customer-edit.component';
import {EmployeeDeleteComponent} from './employee/employee-delete/employee-delete.component';
import {CustomerDeleteComponent} from './customers/customer-delete/customer-delete.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-list', component: EmployeeListComponent },
  {path: 'employee-create', component: EmployeeCreateComponent},
  {path: 'employee-edit/:id', component: EmployeeEditComponent},
  {path: 'employee-delete/:id', component: EmployeeDeleteComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer-edit/:id', component: CustomerEditComponent},
  {path: 'customer-delete/:id', component: CustomerDeleteComponent},
  {path: 'create', component: CustomerCreateComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Ng2SearchPipeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
