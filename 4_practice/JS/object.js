// const student1={
//     name : "Gopi",
//     attendance : 50,

//     ispresent:function(){
//         this.attendance++;
//         console.log(`${this.name} is present. Total attendance ${this.attendance}`)
//     }
// }
// student1.ispresent()



class Student{
    constructor(name,att){
        this.name=name;
        this.att=att;
    }

    ispresent(){
        this.att++;
        console.log(`${this.name} is present. total Attendence ${this.att}`)
    }
    static greet(){//only class can access this function
        console.log("hello user")
    }
}
const std1=new Student("Gopi",50);
Student.greet();
// std1.greet()  is not function()
std1.ispresent();