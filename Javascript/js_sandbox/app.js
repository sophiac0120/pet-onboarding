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