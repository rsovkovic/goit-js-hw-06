const textInput = document.querySelector("#font-size-control");
const spanValue = document.querySelector("#text");
textInput.addEventListener("input", (event) => {
  spanValue.style.fontSize = event.target.value + "px";
});
