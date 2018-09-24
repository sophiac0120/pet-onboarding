const name="Sophia";

const age=21;

const hasKids = false;

const car = null;

let test;

const sym = Symbol();

const hobbies = ['swimming', 'shopping'];

const address = {
    city: 'Markham',
    Province: 'ON'
}

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasKids);
console.log(typeof car);
console.log(typeof test);
console.log(typeof sym);
console.log(typeof hobbies);
console.log(typeof address);

let val;
val = String(5);
val = String(4 + 4);
val = String(true);
val = String(new Date()); //Returns val length of 57 (The current time and day)
val = String([1,2,3,4]);

val = (5).toString();
val = (true).toString();
val = (3.1212).toString();

val = Number('5');
val = Number(true);
val = Number(null);
val = Number([1,2,3]);

val = parseInt('123213.2312312321');
val = parseFloat('123213.2312312321');


console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(5)); //Up to nth decimal point

const v1 = String(5);
const v2 = 6;
const sum = v1 + v2;

console.log(sum);
console.log(typeof sum);

val = Math.PI;
console.log(val);
console.log(Math.round(val)); 
console.log(Math.ceil(val)); //For rounding up
console.log(Math.floor(val)); //For rounding down

val = Math.random();
val = Math.floor(Math.random() * 20 + 1); //Random non-decimal val between 1 to 20 

console.log(val);

const firstName = 'William';
const lastName = 'Johnson';

let fullName;

fullName = firstName + lastName;

console.log(fullName);

name2 = firstName + ' '  + lastName;

console.log(name2);

console.log(fullName.slice(-3));

const tags = 'Web-developement, DevOps, Data-Science';
console.log(tags.split(" "));

val = tags.includes('DevOps');
console.log(val);

const username = 'Sophia';
const userage = 21;
const job = 'Intern';
const city = 'Hamilton';
let html;

html = '<ul><li>Name : ' + username + '</li><li>Age : ' + userage + '</li><li>Job : ' + job + '</li><li>City: ' + city + '</li></ul>';

function hello() {
    return 'hello';
}
// With template strings(es6)

html = `
    <ul>
        <li>${username}</li>
        <li>${userage}</li>
        <li>${job}</li>
        <li>${city}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age >= 20 ? 'Over 20 or 20' : 'Under 20'}</li>
    </ul>
`;

const numbers = [43, 34, 56, 20, 10, 3];
let val2;
val2 = numbers.length;
console.log(val2);
val2 = Array.isArray(numbers);
console.log(val2);
numbers.push(200);
console.log(numbers.length);

numbers.unshift(200);
console.log(numbers.length); //Add on to front

numbers.shift();
console.log(numbers);

// Use the "compare function"
val2 = numbers.sort(function(x,y){
    return x - y;
});

function findNumUnder20(num){
    return num < 20;
}

val2 = numbers.find(findNumUnder20);

console.log(numbers);
document.body.innerHTML = html;

const person = {
    firstName: 'Ji Who',
    sex: 'Female',
    getFirstName: function(){
        return this.firstName;
    },
    setFirstName: function(newName){
        this.firstName = newName;
    }
}

let val3;

val3 = person;
val3 = person.firstName;
val3 = person['firstName'];
val3 = person.setFirstName('SOPHIA');
console.log(person.getFirstName());

const people = [
    {name: 'John', age: 10, sex: 'male'},
    {name: 'Sophia', age: 15, sex: 'female'}
];

for (let i = 0; i < people.length; i++){
    console.log(people[i].name);
};
const today = new Date();
val3 = today;
console.log(typeof val3);
val3 = today.getMilliseconds();
console.log(val3);

var birthday = new Date('01-20-1997 04:22:14');
birthday = new Date('January 20 1997');

console.log(birthday);
console.log(typeof birthday);

val3 = birthday.getDay();
console.log(val3);
val3 = birthday.getMonth();
birthday.setDate('29');
val3 = birthday.getDate();

console.log(val3);

/* const numb = 20;

if (numb == '20'){
    console.log("Number is 20");
} else {
    console.log("Number is not 20");
}

if (numb === '20'){
    console.log("Number is 20 and in string");
} else if (numb == 20){
    console.log("Number is 20 in int");
}
 else {
     console.log("Number is not 20");
 } */

/*  if (typeof numb !== 'undefined'){
    console.log('number is defined');
 } else {
     console.log('number is undefined');
 } */


/*  const people = [
    {name: 'John', age: 10, sex: 'male'},
    {name: 'Sophia', age: 15, sex: 'female'}
]; */

if (people[0].age === 10){
    console.log(`${people[0].name} is 10.`);
} else {
    console.log(`${people[0].name} is ${people[0].age} years old.`);}

console.log(people[1].age === 15 ? `${people[1].name} is ${people[1].age} years old.` : `${people[1].name} is not ${people[1].age} years old.`);

var a = 1;
let b = 2;
const c = 3;

console.log('Global scope: ',a,b,c);
function scope(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log(a, b, c);
}


//scope();

if (true){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Block scope: ',a,b,c);
}

console.log(a,b,c);

function greet(firstName = 'Sophia', lastName = 'Choi'){
    return ('Hello ' + firstName + ' ' + lastName);
}
console.log(greet());
console.log(greet('JiWho', 'Le'));

const square  = function(x = 3) {
    return x * x;
};

console.log(square(9)); 
console.log(square());

(function() {
    console.log('IIFE run');
})();

(function(name) {
    console.log('Hello ' + name);
})('Lee');

const toDo = {
    add: function(){
        console.log('To do: add');
    },
    edit: function(edit) {
        console.log(`To do: edit by ${edit}` );
    }
}

toDo.remove = function(){
    console.log('To do: remove');
}

toDo.add(); 
toDo.edit('Soph');
toDo.remove();

//const numbers = [43, 34, 56, 20, 10, 3];//

for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

numbers.forEach(function(numb){
    console.log(`For each ${numb}` );
});

const users = [
    {id : 1, name : 'Sophie'},
    {id : 2, name : 'John'},
    {id : 3, name : 'Terry'}
];

users.forEach(function(user){
    console.log(`User id: ${user.id} and name: ${user.name}`);
});

const ids = users.map(function(user){
    return user.id;
});

const names = users.map(function(user){
    return user.name;
});

console.log(ids);
console.log(names);

names.forEach(function(name, index){
    console.log(index + " Name of user is " + name);
});

ids.forEach(function(id, index){
    console.log(index + ' Id of user is ' + id);
});

const member = {
    firstName: 'Ji Who',
    sex: 'Female',
    age: 21
}

for (let x in member){
    console.log(x + " " + member[x]);
}

//window.location.href = 'http://google.ca';
//window.history.go(-1);
//window.location.reload();

val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
