import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Teacher } from './Teacher';
import { TEACHERS } from './dummy-data-teachers';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() {}

  allTeachers(): Observable<Teacher[]>{
    return of(TEACHERS);
  }

  getTeacherId(id:string):Observable<Teacher>{
    return this.allTeachers().pipe(map((teacher: Teacher[]) => teacher.find(t => t.id ===id)))
  }

}
