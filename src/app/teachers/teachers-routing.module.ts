import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';

const routes: Routes = [
  {path:'teachers',component: TeachersListComponent},
   { path: "teachers/edit/:id", component: EditTeacherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
