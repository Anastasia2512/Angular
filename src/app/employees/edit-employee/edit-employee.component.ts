import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeesService } from '../employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  id: string;
  employee: Employee = new Employee("","",0,"","","",0,0)
  constructor(
    private service:EmployeesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
    this.id = params.get("id")

    if(this.id){
      this.getEmployeeById(this.id)
    }
  })
}
getEmployeeById(id:string){
this.service.getEmployeeId(id).subscribe(e => this.employee = e)
}
submit(): void {
  this.router.navigate(['/employees'])
}

}
