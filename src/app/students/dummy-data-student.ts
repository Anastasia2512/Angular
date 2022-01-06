import { Student} from "./student";
import { Classes} from "../Classes";
import { TEACHERS} from "../teachers/dummy-data-teachers";

export const STUDENTS: Student[]=[
    new Student("224", "Bob Green", 18, "Tal-Aviv", "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2648001.jpg",
    {math:55,English: 61, Chemistry: 65},new Classes(112,"Math",32,"10.6.112",TEACHERS[2])),
    new Student("363", "Alice Wesly", 18, "Tal-Aviv", "https://www.colourbox.com/preview/4505439-happy-student.jpg",
    {math:77,English: 89, Art: 92},new Classes(66,"Chemistry",25,"1.4.66",TEACHERS[4])),
    new Student("216", "John Smith", 17, "Tal-Aviv", "https://freedesignfile.com/upload/2017/11/Student-carrying-a-bag-smiling-Stock-Photo.jpg",
    {Chemistry:75,Science: 88, math: 90},new Classes(55,"Science",21,"2.1.55",TEACHERS[2])),
    new Student("398", "Henry Berger", 17, "Tal-Aviv", "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3999238.jpg",
    {Literature:90,English: 95, Chemistry: 80},new Classes(91,"English",33,"7.3.91",TEACHERS[5])),
    new Student("265", "Rahel schwarz", 17, "Tal-Aviv", "https://freedesignfile.com/upload/2017/11/Young-female-college-student-Stock-Photo.jpg",
    {math:60,History: 65, English: 100},new Classes(25,"History",28,"1.1.20",TEACHERS[4])),
    new Student("278", "Judy Friedman", 19, "Tal-Aviv", "https://previews.123rf.com/images/dolgachov/dolgachov1403/dolgachov140300076/26342347-smiling-student-with-bag-folders-and-tablet-pc-computer-standing.jpg",
    {math:99,Hebrew: 95, English: 80},new Classes(154,"Hebrew",25,"9.3.154",TEACHERS[1])),
    new Student("315", "Tim Dylan", 18, "Tal-Aviv", "https://previews.123rf.com/images/espies/espies1707/espies170700316/82494117-handsome-and-young-indian-male-college-student-carrying-bag-on-white-background-while-holding-colleg.jpg",
    {History:77,Literature: 85, Science: 78},new Classes(55,"Science",21,"2.1.55",TEACHERS[2])),
    new Student("387", "Emma Butler", 17, "Tal-Aviv", "https://thumbs.dreamstime.com/b/smiling-student-bag-folders-tablet-pc-education-technology-people-concept-computer-standing-36037285.jpg",
    {Science:100,Art: 89, Math: 75},new Classes(78,"Art",31,"4.5.78",TEACHERS[3])),
]