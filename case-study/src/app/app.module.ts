import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDeleteComponent } from './customers/customer-delete/customer-delete.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { HomeComponent } from './home/home.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    HomeComponent,
    EmployeeDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    NgxPaginationModule,
    MatDialogModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
