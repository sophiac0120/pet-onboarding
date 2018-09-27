document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

const textDiv = document.getElementById('output');

/* function getExternal(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
   })
   .then(function(data){
       output = '';
       data.forEach(function(user){
           output += `<li>${user.login}</li>`
       });
       textDiv.innerHTML = output;
   })
   .catch(function(err){
       console.log(err);
   });  
} */

function getExternal(){
    fetch('https://api.github.com/users').then(res => res.json())
   .then(data => {
       output = '';
       data.forEach(function(user){
           output += `<li>${user.login}</li>`
       });
       textDiv.innerHTML = output;
   })
   .catch(err => console.log(err));  
}

/* function getJSON(){
    fetch('posts.json').then(function(res){
         return res.json();
    })
    .then(function(data){
        output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        textDiv.innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
} */

function getJSON(){
    fetch('posts.json').then(res => res.json())
    .then(data => {
        output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        textDiv.innerHTML = output;
    })
    .catch(err => console.log(err));
}

/* function getText(){
    fetch('text.txt').then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        textDiv.innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
} */

function getText(){
    fetch('text.txt').then(res => res.text())
    .then((data) => {
        console.log(data);
        textDiv.innerHTML = data;
    })
    .catch(err => console.log(err));
    };