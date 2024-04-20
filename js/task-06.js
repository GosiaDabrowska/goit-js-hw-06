const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener("blur", () => {
  const dataLength = 6;
  if (textInput.value.length === dataLength) {
    return (textInput.className = "valid");
  }
  return (textInput.className = "invalid");
});