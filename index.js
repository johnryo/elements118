'use strict';

import elements from './elements.js';

const elementNumber = document.querySelector('.element-number');
const nextElement = document.getElementById('next-element');
const startOver = document.getElementById('start-over');
const newQuiz = document.getElementById('new-quiz');

const elementData = document.querySelector('.element-data');
const info = document.getElementById('info');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const name = document.getElementById('name');
// const weight = document.getElementById('weight');

// MAIN
let count, min, max, i;
init();
const arr = generateRandomNumbers(count, min, max);

// FUNCTIONS
// Starting conditions
function init() {
  count = 118;
  min = 1;
  max = 118;
  i = 0;

  elementNumber.textContent = '0';
  nextElement.textContent = 'Next Element';
  nextElement.classList.remove('no-more-elements');
  number.textContent = 'Number';
  symbol.textContent = 'Symbol';
  name.textContent = 'Name';
  // weight.textContent = 'Weight';
}

// Generate an array of unique random numbers
function generateRandomNumbers(count, min, max) {
  if (count > max - min + 1) {
    return '❌'; // count cannot be greater than the upper limit of range
  }
  let uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    uniqueNumbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(uniqueNumbers);
}

// Show next element until count is reached
function showNextElement() {
  if (i < count) {
    elementNumber.textContent = arr[i];

    // Access element data via random number array
    const element = Object.values(elements[arr[i] - 1]);
    number.textContent = element[0];
    symbol.textContent = element[1];
    name.textContent = element[2];
    // weight.textContent = element[3];
    i++;
  } else {
    elementNumber.innerHTML = '000';
    nextElement.textContent = 'No More Elements';
    nextElement.classList.add('no-more-elements');
  }
}

// EVENT LISTENERS
// Show next element until last one in array
nextElement.addEventListener('click', showNextElement);

// Show element data
elementData.addEventListener('mouseenter', () => {
  info.style.opacity = 1;
});

// Hide element data
elementData.addEventListener('mouseleave', () => {
  info.style.opacity = 0;
});

// Restart current quiz
startOver.addEventListener('click', init);

// Start new quiz
newQuiz.addEventListener('click', () => {
  location.reload();
});

// Reference https://ptable.com for atomic weights
// (often used interchangeably with the newer term "relative atomic mass" (r.a.m))
