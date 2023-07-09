// TODO: write code here
import Board from "./board";
import Goblin from "./goblin";

const container = document.querySelector(".container");
let board = new Board();
const goblin = new Goblin();
board.draw();
goblin.changePosition();
goblin.goblinCatch(container);
