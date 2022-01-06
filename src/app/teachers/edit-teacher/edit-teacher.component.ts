import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { TeachersService } from '../teachers.service';
import { Teacher } from '../Teacher';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  id: string;
  teacher: Teacher = new Teacher("", "", 0, "", "", ["", ""], [,], 0, 0, 0)

  constructor(
    private service: TeachersService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id")

      if(this.id) {
         this.getTeacherById(this.id)
      }
   })
    
  }
  getTeacherById(id:string){
    this.service.getTeacherId(id).subscribe(t => this.teacher = t)
  }

  submit(): void {
    this.router.navigate(['/teachers'])
  }
}




