let min = 1,
    max = 21,
    guessesLeft = 3,
    rand = 19;
 
//rand = Math.floor((Math.random() * 21) + 1);

const game = document.getElementById('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#submit'),
    guessInput = document.querySelector('#guess'),
    message = document.querySelector('.message');


guessBtn.addEventListener('click', function(e){
    let guess = parseInt(guessInput.value);
    console.log(guess);
    console.log(rand);

    if (guess === NaN || guess < min || guess > max){
        notifyUser(`Please enter a number between ${min} and ${max}!`);
    }
    else{
        
        if (guess == rand){
            notifyUser('You made a correct guess');
        }
        else {
            guessesLeft -= 1;
            notifyUser(`Wrong guess! Try again! Your remaining guesses left is ${guessesLeft}`);
        }
    }

    e.preventDefault();
});

function notifyUser(err){
    message.textContent = err;
}