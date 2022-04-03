'use strict';

//change message regarding on output
//change score regarding on output
//change highscore regarding on output
//reveal number
//change the bg colour

//define variables
const body = document.querySelector('body');
const headline = document.querySelector('h1');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const again = document.querySelector('.again');
let defaultScore = 20;
let currentHS = 0;

//generate random number from 1-20
let guessedNum = Math.floor(Math.random() * 20 + 1);
//number.textContent = guessedNum;
//on click check:
document.querySelector('.check').addEventListener('click', checkFunction);
function checkFunction() {
  let inputValue = getInputValue();
  compareNumbers(guessedNum, inputValue);
}

//get input value
function getInputValue() {
  return Number(document.querySelector('.guess').value);
}

//compare to generated number, create conditionals

function compareNumbers(correct, tip) {
  if (correct === tip) {
    win();
  } else if (correct > tip) {
    lose();
    tipLower();
  } else if (correct < tip) {
    lose();
    tipHigher();
  }
}

function win() {
  body.style.backgroundColor = '#60b347';
  message.textContent = 'You guessed the right number✔️';
  headline.textContent = 'You won🔥';
  number.textContent = guessedNum;
  defaultScore > currentHS ? editHS() : 'You didnt reach new high score';
}

function lose() {
  headline.textContent = 'Guess Again';
  defaultScore--;
  score.textContent = defaultScore;
}

function tipLower() {
  message.textContent = 'The guessed number is higher';
}

function tipHigher() {
  message.textContent = 'The guessed number is lower';
}

function editHS() {
  currentHS = defaultScore;
  highscore.textContent = currentHS;
}

again.addEventListener('click', againFunction);

function againFunction() {
  guessedNum = Math.floor(Math.random() * 20 + 1);
  defaultScore = 20;
  message.textContent = 'Start guessing...';
  score.textContent = defaultScore;
  headline.textContent = 'Guess My Number!';
  body.style.backgroundColor = '#222';
  number.textContent = '?';
}
