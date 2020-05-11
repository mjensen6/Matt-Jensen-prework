const answerkey = ['badgers', 'bascom', 'langdon', 'randall', 'madison', 'state', 'capitol', 'mctaggarts'];
const letterRef = document.querySelector('#letter');
const wordRef = document.querySelector('#word');
const guessRef = document.querySelector('#guess');
const winsRef = document.querySelector('#wins')
let gamenum = 0;
let wins = 0;
let answer = answerkey[gamenum].split("");
let answerDisplay = [];
let guessed = [];
let numguess = 10;
let answerString = answer.join(" ")
var myAudio = document.createElement('audio');
if (myAudio.canPlayType('audio/mpeg')) {
    myAudio.setAttribute('src', 'audio.mp3');
}

// Set display starting points
function initialize() {
    answer = answerkey[gamenum].split("");
    answerDisplay = [];
    guessed = []
    numguess = 10;
    answerString = answer.join(" ")

    for (i = 0; i < answer.length; i++) {
        answerDisplay.push('_');
    }
    answerDisplayString = answerDisplay.join(" ");
    wordRef.innerText = answerDisplayString;
    guessRef.innerText = numguess;
    winsRef.innerText = wins;
    letterRef.innerText = guessed;

}
initialize();

//Function to check if the letter matches any answer letters
function answerFunc(event) {
    myAudio.pause();    //music was getting annoying so I just put the next key as the pause button
    const key = event.key;
    answerCheck = false;
    for (i = 0; i < answer.length; i++) {
        if (key === answer[i]) {
            answerDisplay[i] = key;
            answerDisplayString = answerDisplay.join(" ");
            wordRef.innerText = answerDisplayString;
            answerCheck = true;
            gameReset();
            
        }
    }

    if (answerCheck === false) {
        guessFunc(key);
    }

}

//Function that updates the guess array and weeds out repeat characters
function guessFunc(key) {
    
    sameCheck = true;
    for (i = 0; i < guessed.length; i++) {
        if (key === guessed[i]) {
            sameCheck = false;
        }
    }
    if (sameCheck === true) {
        guessed.push(key);
        letterRef.innerText = guessed;
        numguess--;
        guessRef.innerText = numguess;

    }
    gameReset();
}

//Game reset function for winning or losing
function gameReset() {
    if (numguess === 0) {
        gamenum++;
        initialize();
    }

    if (answerString === answerDisplayString) {
        console.log('made it')
        myAudio.play();
        gamenum++;
        wins++;
        initialize();
    }
}

document.addEventListener('keyup', answerFunc);











