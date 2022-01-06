import { Teacher } from "./Teacher";
import { Classes } from "../Classes";

export const TEACHERS: Teacher[] =[
    new Teacher("123","Alice Berg", 35,
    "Tel-Aviv","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.imagesforbusiness.com.au%2Fwp-content%2Fuploads%2Ffemale-staff-member-baker-mckenzie.jpg&f=1&nofb=1",
    ["Chemistry","Science"],[new Classes(101,"Chemistry",35,"10.6.101",undefined),new Classes(133,"Science",20,"5.2.133",undefined)],5,176,85),
    new Teacher("332","David Cohen", 40,
    "Ramat-Gan","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHa-KJ-5CHqlzCizT29X2IKzUKJJWcL0EqQ&usqp=CAU",
    ["English","Hebrew"],[new Classes(26,"English",39,"1.1.26",undefined),new Classes(154,"Hebrew",25,"9.3.154",undefined)],12,149,90),
    new Teacher("215","Haim Levi", 60,
    "Kfar-Saba","https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    ["Math","Science"],[new Classes(112,"Math",32,"10.6.112",undefined),new Classes(55,"Science",21,"2.1.55",undefined)],25,135,115),
    new Teacher("365","Tali Ezra", 47,
    "Raanana","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumxD1gAwh7SBn0yEVjCnSjPhSpajTJjcZpwol_H05d1_KgAlgAAxk8r0i4TR3TI7SyyI&usqp=CAU",
    ["Literature","Art"],[new Classes(99,"Literature",28,"10.6.99",undefined),new Classes(78,"Art",31,"4.5.78",undefined)],18,185,95),
    new Teacher("445","Noa Shitrit", 39,
    "Tel-Aviv","https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwebapp2.wright.edu%2Fweb1%2Fnewsroom%2Ffiles%2F2015%2F02%2FAmelia-Hubbard-43-8-12.jpg&f=1&nofb=1",
    ["Chemistry","History"],[new Classes(66,"Chemistry",25,"1.4.66",undefined),new Classes(25,"History",28,"1.1.20",undefined)],12,180,90),
    new Teacher("198","Kevin Stone", 42,
    "Herzeliya","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    ["Literature","English"],[new Classes(129,"Literature",31,"9.2.129",undefined),new Classes(91,"English",33,"7.3.91",undefined)],15,149,99)
]