import { Person } from "../Person";
import { Classes } from "../Classes";


export class Student extends Person{

   studentClass:Classes;
   grades:Record<string, number>;
    
    constructor( id:string,
        fullName:string,
        age:number,
        city:string,
        image:string,
        grades:Record<string, number>,studentClass:Classes) {
        super(id,fullName,age,city,image);
        this.grades = grades;
        this.studentClass= studentClass;
    }

    get gradesAvg(): number {
        let sum = 0;
        let counter = 0;
        Object.keys(this.grades).map(key => {
           sum += this.grades[key];
           counter++;
        })
        let avg = Math.round(sum/counter)
  
        return avg
     }

}