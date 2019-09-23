/*Q2 How to create a Javascript class in ES6? Write code with example using
inheritance. */
class human{
    constructor (name, age )
    {
        this.name = name;
        this.age = age;
        
    }
    getName(){
        console.log( this.name);
    }
}
class student extends human 
{
    constructor(admission_no)
    {
        super("student admission no: ", admission_no);
    }
    getName(){
        console.log( this.name);
    }
    get details(){
        return this.age;
    }
}
const q = new student(123);
q.getName();
console.log(q.details);


