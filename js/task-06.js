const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === input.dataset.length) {
    return (textInput.className = "valid");
  }
  return (textInput.className = "invalid");
});
