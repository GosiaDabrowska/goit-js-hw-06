const controler = document.querySelector(`#font-size-control`);
const textSize = document.querySelector(`#text`);

controler.addEventListener("input", (event) => {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
});
