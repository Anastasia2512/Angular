import { Teacher } from "./teachers/Teacher";

export class Classes {
    id: number;
    name: string;
    numOfStudents: number;
    place: string;
    teacher?: Teacher;
    constructor(id: number,name: string,numOfStudents: number, place: string, teacher?: Teacher) {
        this.id = id;
        this.name = name;
        this.numOfStudents = numOfStudents;
        this.place = place;
        this.teacher = teacher;
    }
    
}