console.log("Hello");
let val;
val = document;
val = document.all;
val = document.all[2];
val = document.head;

let scripts;
scripts = document.scripts;
let scriptArr;
scriptArr = Array.from(scripts);
console.log(scriptArr);

scriptArr.forEach(function(script) {
    console.log(script)
});

val = document.getElementById('fish-header');
val = document.getElementById('container').className;
//val = document.getElementById('container').id;
console.log(val);

//Changing the style in CSS

document.getElementById('container').style.backgroundColor = 'lightgray';
document.getElementById('container').style.color = 'black';
document.getElementById('fish-header').textContent = 'Giant Grouper Fish';
val = document.getElementById('fish-header').innerText;
document.getElementById('fish-header').innerHTML = '<span style="color: blue">Fish Img: </span>' + val;

//document.querySelector();

console.log(document.querySelector('.card'));
console.log(document.querySelector('img'));
console.log(document.querySelector('h4'));
document.querySelector('p').style.backgroundColor = 'darkgray';
document.querySelector('p').style.color = 'white';

//document.querySelector('.container: last-child').style.backgroundColor = 'lightblue';
document.querySelector('.container:last-child').style.backgroundColor = 'lightblue';
//document.querySelector('.card:nth-child(2)').style.backgroundColor = 'black';

// const cards = document.getElementsByClassName('card');
// console.log(cards);
// console.log(cards[0]); 

// const cardsQuery = document.querySelector('img').getElementsByClassName('card');
// console.log(cardsQuery);

// const listItem = document.querySelector('ul').getElementsByClassName('listItem');
// console.log(listItems);

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis [0]); 

lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function(li, index){
    console.log(li.className);
    li.textContent = (`${index}: Hello `);
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even');

liOdd.forEach(function(li, index){
    li.style.background = "#ccc";
    li.textContent = 'Odd Entry';
});

liEven.forEach(function(li, index){
    li.style.background = "darkgrey";
    li.textContent = 'Even Entry';
});

let val4;

const list = document.querySelector('ul');
const listItem= document.querySelectorAll('li.listItem:first-child');
val4 = listItem;
val4 = list.childNodes;
console.log(val4);

//Get childern element nodes;
val4 = list.children;
val4 = list.children[1];
list.children[1].textContent = "Odd Entry with content updated";

val4 = list.firstChild;
console.log(val4);
val4 = list.firstElementChild;
console.log(val4); 

const listItems = document.querySelector('li:first-child');
val4 = listItems.parentNode;
val4 = listItems.parentElement;
val4 = listItems.nextElementSibling.nextElementSibling;
val4 = listItems.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val4);