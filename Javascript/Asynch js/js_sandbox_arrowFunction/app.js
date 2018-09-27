/* const sayHello = function(){
    console.log('Hello');
}
const sayHello = () => console.log('Hello');

sayHello(); */


const users = ['Sophia', 'Ji', 'Who'];

const nameLengths = users.map(function(name){
    return name.length;
});

console.log(nameLengths);

const nameLengths2 = users.map((name) => {
    return name.length;
});

console.log(nameLengths2);