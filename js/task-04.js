let counterValue = 0;
const spanValue = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", addButton);
const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", deleteButton);
function addButton() {
  counterValue++;
  spanValue.textContent = counterValue;
}
function deleteButton() {
  counterValue--;
  spanValue.textContent = counterValue;
}
