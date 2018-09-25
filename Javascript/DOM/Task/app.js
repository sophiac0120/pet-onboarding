const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListers();

function loadEventListers() {

    document.addEventListener('DOMContentLoaded', getTasks);
    
    form.addEventListener('submit', addTask);

    taskList.addEventListener('click', removeTask);

    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTasks);
}

function getTasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    if (tasks !== null){
    tasks.forEach(function(task){

        const li = document.createElement('li');
        li.className = 'collection-item';
        //li.id="new-task";
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fas fa-minus"></i>';
        li.appendChild(link);
        console.log(li);
        taskList.appendChild(li);

    });}
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else {
            task.style.display = 'none' ;
        }

    });

}

function removeTask(e){
      
     if (e.target.parentElement.classList.contains('delete-item')){
         console.log(e.target.parentElement.firstChild.textContent);
         if (confirm('Are you sure?')){e.target.parentElement.parentElement.remove();
            removeTasksFromLocalStorage(e.target.parentElement.parentElement);
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            var retrievedTask = localStorage.getItem(e.target.parentElement.parentElement);
        }
    }
}

function removeTasksFromLocalStorage(targetLi){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if (targetLi.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function clearTasks(){
    taskList.innerHTML = '';
    localStorage.clear();
}

function addTask(e){
    if (taskInput.value === ''){
        alert('Add a task');}
    else{

    const li = document.createElement('li');
    li.className = 'collection-item';
    //li.id="new-task";
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-minus"></i>';
    li.appendChild(link);
    
    storeTaskInLocalStorage(taskInput.value);

    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
    }
}

function storeTaskInLocalStorage(task){
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(taskInput.value);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



/* -------CHAPTER 4: JAVASCRIPT DOM MANIPULATION & EVENTS EXERCISES------------ 

const listItem = document.querySelector('ul').getElementsByClassName('listItem');
console.log(listItems);

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
//list.children[1].textContent = "Odd Entry with content updated";

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


//Create element
const li = document.createElement('li');
li.className = 'listItem';
li.id = 'new-item';
li.setAttribute('title', 'New Item');
li.appendChild(document.createTextNode('Hello World'));
//Create new link element

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.setAttribute('href', "#")
link.innerHTML = '<i class="fas fa-times"></i>';
li.appendChild(link);
document.querySelector('ul').appendChild(li);

console.log(li);

//Replace DOM element
const newHeading = document.createElement('h4');

newHeading.id = 'fish-header';
newHeading.appendChild(document.createTextNode('Giant Grouper Fish'));
const oldHeading = document.getElementById('fish-header');
const cardAction = document.querySelector('.container');
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//Remove list item
const lis2 = document.querySelectorAll('li');
const list2 = document.querySelector('ul');

lis2[0].remove();
list2.removeChild(lis2[1]); 

//Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const linkA = firstLi.children[0];

val4 = linkA.className;
val4 = linkA.classList;
val4 = linkA.classList[0];
linkA.classList.add('add');
linkA.classList.remove('test');

val4 = linkA;
val3 = linkA.getAttribute('href');
val4 = linkA.setAttribute('href', 'http://google.com');
linkA.setAttribute('title', 'Google');
val4 = linkA.hasAttribute('title');
linkA.removeAttribute('title');
val4 = linkA;

document.querySelector('.listItem').addEventListener('click', 
function(e){
    console.log('Hello World');
    e.preventDefault(); 
});

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
    console.log('Clicked');
    let val;

    val = e;
    val = e.target.classList;
    e.target.innerText = 'Clicked';  
    val = e.type;
    
    val = e.timeStamp;
    val = e.clientY; // Coordinates relative to the window Vertical axis
    val = e.offsetY; // relative to the element  



    console.log(val);
};

const clearBtn = document.querySelector('.clear-tasks');
const firstCard = document.querySelector('.card');
const heading = document.querySelector('h3');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);
//firstCard.addEventListener('mouseenter', runEvent);
//firstCard.addEventListener('mouseleave', runEvent);

function runEvent(e){
    console.log(`Event Type ${e.type}`);

    heading.textContent =  `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40  )`;
    //User input value
    console.log(taskInput.value);
    e.preventDefault();

} 
form.addEventListener('submit', function(e){
    alert('Button clicked');
    const task = document.getElementById('task').value;
    
    let tasks;
    if (localStorage.getItem('tasks') === null){
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();



});  

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
});



//const delItem = document.querySelector('.delete-item');
//delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);
console.log()
function deleteItem(e){
      
     if (e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();  

    }
}

*/