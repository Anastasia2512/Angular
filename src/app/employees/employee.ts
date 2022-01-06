import { Person } from "../Person";

export class Employee extends Person{
    occupation:string;
    monthlyHours:number;
    hourlyWage:number;


    constructor(id:string,fullName:string,age:number,city:string, image:string,occupation:string,monthlyHours:number,hourlyWage:number) {
        super(id,fullName,age,city,image);

        this.occupation = occupation;
        this.monthlyHours = monthlyHours;
        this.hourlyWage = hourlyWage;   
    }

    get monthlyPay(){
        return this.hourlyWage * this.monthlyHours
    }

}