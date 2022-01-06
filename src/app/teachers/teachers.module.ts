import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


@NgModule({
  declarations: [
    TeachersListComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
