const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

textInput.addEventListener("input", (event) => {
  if (textInput.textContent === null) {
    return (extOutput.textContent = "Anonymus");
  } else {
    return (textOutput.textContent = event.currentTarget.value);
  }
});
