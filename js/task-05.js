const textInput = document.querySelector("#name-input");
const outputInput = document.querySelector("#name-output");
// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });

textInput.addEventListener("input", (event) => {
  const currentInputValue = event.currentTarget.value;
  if (currentInputValue.trim() === "") {
    outputInput.textContent = "Anonymous";
  } else {
    outputInput.textContent = currentInputValue;
  }
});
