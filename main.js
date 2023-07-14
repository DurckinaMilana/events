/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
  constructor() {
    this.size = 4;
  }
  draw() {
    const container = document.querySelector(".container");
    for (let i = 0; i < this.size * this.size; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      container.appendChild(block);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  constructor() {
    this.noCaught = 0;
    this.caught = 0;
  }
  changePosition() {
    const position = [...document.querySelectorAll(".block")];
    let posGoblin = 0;
    const gob = document.querySelector(".goblins");
    let interval = setInterval(() => {
      const ran = Math.floor(Math.random() * position.length);
      if (ran !== posGoblin) {
        position[posGoblin].classList.remove("goblin");
        position[ran].classList.add("goblin");
        this.noCaught += 1;
        posGoblin = ran;
        gob.innerText = `Пропущено: ${this.noCaught}`;
      }
      if (this.noCaught === 5) {
        position[ran].classList.remove("goblin");
        alert("Game over. Goblin win!");
        clearInterval(interval);
      }
    }, 1000);
  }
  goblinCatch(element) {
    const points = document.querySelector(".points");
    element.addEventListener("click", event => {
      const e = event.target;
      if (e.className.includes("goblin")) {
        e.classList.remove("goblin");
        this.noCaught -= 1;
        this.caught += 1;
        points.innerText = `Поймано: ${this.caught}`;
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


const container = document.querySelector(".container");
let board = new Board();
const goblin = new Goblin();
board.draw();
goblin.changePosition();
goblin.goblinCatch(container);
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;