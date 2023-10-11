const changeBtn = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
const divContent = document.querySelector(".widget");
const elBody = divContent.parentNode;

changeBtn.addEventListener("click", handleClick);
function handleClick() {
  let changeColor = getRandomHexColor();
  elBody.style.backgroundColor = changeColor;
  spanText.textContent = changeColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
