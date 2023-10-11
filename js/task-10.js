const divContent = document.querySelector("#controls");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const firstChild = divContent.firstElementChild;
firstChild.classList.add("text");
const textInput = document.querySelector(".text");
boxesDiv.innerHTML = createDiv();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {}
