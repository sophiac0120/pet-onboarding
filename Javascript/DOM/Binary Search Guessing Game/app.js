let min = 1,
    max = 21,
    guessesLeft = 3,
    rand = 19;
 
//rand = Math.floor((Math.random() * 21) + 1);


const game = document.querySelector('.game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#submit'),
    guessInput = document.querySelector('#guess'),
    message = document.querySelector('.message');

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(e){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    console.log(rand);

    if (guess === NaN || guess < min || guess > max){
        notifyUser(`Please enter a number between ${min} and ${max}!`, 'red');
    }
    else{
        if (guess == rand){ 
            gameOver(true,'You made a correct guess');
        }
        else {
            guessesLeft -= 1;
            if (guessesLeft === 0){
                gameOver(false, 'You used all the remaining guesses');
            } else {
                guessInput.style.borderColor = 'red';
                notifyUser(`Wrong guess!   Try again! Your remaining guesses left is ${guessesLeft}`, 'blue');}
        }
    }

    e.preventDefault();
}); 

function notifyUser(err, color){
    message.style.color = color;  
    message.textContent = err;

}

function gameOver(won, msg){
    if (won === true){
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        notifyUser(msg, 'green');}
    else{
        guessInput.disabled = true;
        guessInput.style.borderColor = 'red';
        notifyUser(msg, 'black'); 
    }

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}