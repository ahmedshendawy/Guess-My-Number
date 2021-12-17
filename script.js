'use strict';

let correctNumb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// --------------AGAIN-----------
document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  correctNumb = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

// ----------CHECK------------
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);

  // CORRECT NUMB
  if (guess === correctNumb) {
    document.querySelector('.message').textContent = 'Correct Number!!';
    document.querySelector('.number').textContent = correctNumb;
    document.body.style.backgroundColor = '#32CD32';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   NO NUMBER
  else if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  }

  //   TOO HIGH
  else if (guess >= correctNumb) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost';
    }
  }

  //   TOO LOW
  else if (guess <= correctNumb) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'You lost';
    }
  }
});
