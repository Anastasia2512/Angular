import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeesService } from '../employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = []
  constructor( private service: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.service.allEmployees().subscribe(employee => this.employees = employee)
  }

  goToEdit(id:string):void{
    this.router.navigate(['/employees/edit', id])
  }

}
