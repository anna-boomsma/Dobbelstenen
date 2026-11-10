"use strict";

const button = document.getElementById("button");
const count = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};
const countTableItem = document.getElementsByClassName("aantal");

function rollDice() {
  const randomNumbers = [];
  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    randomNumbers.push(randomNumber);
  }

  addCount(randomNumbers);
  addToTable();
}

function addCount(arr) {
  for (let i = 0; i < arr.length; i++) {
    const numberRolled = arr[i];
    count[numberRolled]++;
  }
}

function addToTable() {
  for (const key in count) {
    countTableItem[key - 1].textContent = count[key];
  }
}

button.addEventListener("click", rollDice);
