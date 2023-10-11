const textInput = document.querySelector("#validation-input");
// console.log(textInput);
textInput.addEventListener("blur", renderInput);

function renderInput() {
  const dataLength = parseInt(textInput.getAttribute("data-length"));
  if (textInput.value.length === dataLength) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
