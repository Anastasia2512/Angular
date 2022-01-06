import { Person } from "../Person";
import { Classes } from "../Classes";

export class Teacher extends Person{
    subject:string[];
    classes:Classes[];
    seniority:number;
    numOfHours:number;
    selery:number;


    constructor( 
        id:string,
        fullName:string,
        age:number,
        city:string,
        image:string,
        subject:string[],
        classes:Classes[],
        seniority:number,
        numOfHours:number,
        selery:number
    ){
     super(id,fullName,age,city,image) 
            this.subject = subject;
            this.classes = classes;
            this.seniority = seniority;
            this.numOfHours = numOfHours;
            this.selery = selery; 
    }
}