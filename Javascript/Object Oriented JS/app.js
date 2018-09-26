/* function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function(){

        var ageDifMs = Date.now() - this.birthday.getTime();
        var ageDate = new Date(ageDifMs); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    
}

Person.prototype.getName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const Sophia = new Person('Sophia', 'Choi', 'January 20 1997');
console.log(Sophia.calculateAge());
console.log(Sophia.getName());

function Employee(firstName, lastName, phone, position){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.constructor = Employee;

const employee1 = new Employee('Sophia', 'Ji Who', '222-2222', 'intern');
console.log(employee1.getName);

const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newlastName){
        this.lastName = this.lastName;
    }
}
const Mary = Object.create(personPrototypes);
Mary.firstName = 'Mary';
Mary.lastName = 'So';
Mary.age = 30;

Mary.getsMarried('Ro');
 */
// ES6 Classes

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`; 
    }
}

class Employee extends Person{
    constructor(firstName, lastName, phone, position){
        super(firstName, lastName);
        this.phone = phone;
        this.position = position;
    }

    static getPosition(){
        return 400;
    }
}


const Soph = new Employee('Soph', 'Ji', '222-2222', 'Intern');
console.log(Employee.getPosition());
console.log(Soph.greeting());
