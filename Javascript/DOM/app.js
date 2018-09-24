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
document.querySelector('.card:last-child').style.backgroundColor = 'lightblue';
//document.querySelector('.card:nth-child(2)').style.backgroundColor = 'black';

