//Storing the results frm the buttons to variables using querySelector
const jsRockEle = document.querySelector(".js-rock-btn");
const jsPaperEle = document.querySelector(".js-paper-btn");
const jsScissorsEle = document.querySelector(".js-scissors-btn");
const jsResetEle = document.querySelector(".js-reset-btn");

//Adding event listener to each button
//Rock
if (jsRockEle.addEventListener("click", function () {
    //User move
    var userInput = 'rock';

    //Computer move
    pickComputerMove();

    //Comparing computer input and user input with respect to scissors
    compareComputerAndUserInputs(computerInput, userInput);

    //Printing the result
    //resultOfTheGame(result, userInput, computerInput);
    updateScore(result, userInput, computerInput);
}));

//Paper
if (jsPaperEle.addEventListener("click", function () {
    //User move
    userInput = 'paper';

    //Computer move
    pickComputerMove();

    //Comparing computer input and user input with respect to scissors
    compareComputerAndUserInputs(computerInput, userInput);

    //Printing the result
    //resultOfTheGame(result, userInput, computerInput);
    updateScore(result, userInput, computerInput);
}));

//Scissors
if (jsScissorsEle.addEventListener("click", function () {
    //User move
    var userInput = 'scissors';

    //Computer move
    pickComputerMove();

    //Comparing computer input and user input with respect to scissors
    compareComputerAndUserInputs(computerInput, userInput);

    //Printing the result
    //resultOfTheGame(result, userInput, computerInput);
    updateScore(result, userInput, computerInput);
}));

//Reset
if (jsResetEle.addEventListener("click", function () {
    reset(result);
    document.querySelector('.js-score-para').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}));


//functions which takes input from the buttons and gives the result
let computerInput = '';
let result = '';

const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

function pickComputerMove() {
    //Making computer input
    computerInput = Math.round(Math.random() * 2);
    //Assigning computer input a value with respect to rock
    if (computerInput == 0) {
        computerInput = 'rock';
    }

    else if (computerInput == 1) {
        computerInput = 'paper';
    }

    else {
        computerInput = 'scissors';
    }
}

function compareComputerAndUserInputs(computerInput, userInput) {
    //Comparing computer input and user input with respect to rock
    if (computerInput == userInput) {
        result = 'Its a Tie';
    }

    else if (computerInput == 'rock' && userInput == 'paper') {
        result = 'You win';
    }

    else if (computerInput == 'paper' && userInput == 'scissors') {
        result = 'You win';
    }

    else if (computerInput == 'scissors' && userInput == 'rock') {
        result = 'You win';
    }

    else if (computerInput == 'rock' && userInput == 'scissors') {
        result = 'You lost';
    }

    else if (computerInput == 'paper' && userInput == 'rock') {
        result = 'You lost';
    }

    else if (computerInput == 'scissors' && userInput == 'paper') {
        result = 'You lost';
    }

    return result;
}

function total(result) {
    if (result === 'You win') {
        score.wins += 1;
    }
    else if (result === 'You lost') {
        score.losses += 1;
    }
    else if (result === 'Its a Tie') {
        score.ties += 1;
    }

    return score.wins;
}

function reset() {
    //Clearing the result
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}

//This whole function is put inside the para element
// function resultOfTheGame(result, userInput, computerInput) {
//     if (result === 'Its a Tie') {
//         console.log(`You picked ${userInput} and Computer picked ${computerInput}. ${result}`);
//         total(result);
//         console.log(`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`); 
//     }

//     else {
//         console.log(`You picked ${userInput} and Computer picked ${computerInput}. ${result}`);
//         total(result);
//         console.log(`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
//     }
// }

//Displaying the score on the page using a paragraph element
function updateScore(result, userInput, computerInput){

    if (result === 'Its a Tie') {
        document.querySelector(".js-your-moves").innerHTML = (`You picked ${userInput}`);
        document.querySelector(".js-computer-moves").innerHTML = (`Computer picked ${computerInput}. ${result}`);
        total(result);
        document.querySelector(".js-score-para").innerHTML = (`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`); 
    }

    else {
        document.querySelector(".js-your-moves").innerHTML = (`You picked ${userInput}`);
        document.querySelector(".js-computer-moves").innerHTML = (`Computer picked ${computerInput}. ${result}`);
        total(result);
        document.querySelector(".js-score-para").innerHTML = (`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
    }
}
