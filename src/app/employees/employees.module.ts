import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';


@NgModule({
  declarations: [
    EditEmployeeComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
