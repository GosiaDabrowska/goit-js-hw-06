const textInput = document.querySelector(`#validation-input`);

textInput.addEventListener("blur", () => {
  if (textInput.value.length === `${"data-length"}`) {
    return textInput.classList.add("valid");
  } else {
    return textInput.classList.add("invalid");
  }
});
