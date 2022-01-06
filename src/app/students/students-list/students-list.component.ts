import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StudentsService } from '../students.service';
import { Student } from '../student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []
  constructor(private service : StudentsService,
    private router: Router) {}

  ngOnInit(): void {
    this.getStudents()
  }
  getStudents():void{
  this.service.allStudents().subscribe(student => this.students = student)
  }
  goToEdit(id: string): void {
    this.router.navigate(['/student/edit', id])
  }

}
