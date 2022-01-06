import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StudentsService } from '../students.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id: string;
  student: Student = new Student("", "", 0, "", "", {}, undefined)
  constructor(private route: ActivatedRoute,
    private router: Router, private service: StudentsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id")

      if (this.id) {
        this.getSudentById(this.id)
      }
    })

  }

  getSudentById(id: string) {
    this.service.getStudentId(id).subscribe(s => this.student = s)
  }
  submit(): void {
    this.router.navigate(['/student'])
  }
}
