import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Employee } from './employee';
import { EMPLOYEES } from './dummy-data-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() {}

  allEmployees():Observable<Employee[]>{
    return of(EMPLOYEES);
  }

  getEmployeeId(id:string):Observable<Employee>{
    return this.allEmployees().pipe(map((employee: Employee[]) => employee.find((e) => e.id === id)))
  }
}
