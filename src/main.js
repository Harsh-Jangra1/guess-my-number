'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// 🔄 Reset function to restart the game (used after win or on 'Again' button)
const reset = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').width = '15rem';
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value)

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number'
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').style.width = '30rem'
    score++;
    document.querySelector('.score').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    setTimeout(reset, 1500);

  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📈 Too Low' : '📉 Too High');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('🔥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
})

document.querySelector('.again').addEventListener('click', reset);