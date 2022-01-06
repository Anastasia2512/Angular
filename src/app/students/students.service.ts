import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Student } from './student';
import { STUDENTS } from './dummy-data-student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  allStudents():Observable<Student[]>{
    return of(STUDENTS);
  }

  getStudentId(id:string):Observable<Student>{
    return this.allStudents().pipe(map((student: Student[]) => student.find((s) => s.id === id)))
  }
}
