import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TeachersService} from '../teachers.service' ;
import { Teacher } from '../Teacher';
@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers: Teacher[] = []
  constructor(  private service : TeachersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTeachers()
  }
  getTeachers(): void {
    this.service.allTeachers().subscribe(teacher => this.teachers = teacher)
 }
 goToEdit(id: string): void {
  this.router.navigate(['/teachers/edit', id])
}

}
