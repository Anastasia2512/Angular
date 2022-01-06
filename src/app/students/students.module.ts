import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


@NgModule({
  declarations: [
    StudentsListComponent,
    EditStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
