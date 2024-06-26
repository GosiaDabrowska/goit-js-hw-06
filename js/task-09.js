function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(`.color`);
const buttonColor = document.querySelector(`.change-color`);

function randomColor() {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  spanColor.textContent = getRandomHexColor();
}

buttonColor.addEventListener("click", randomColor);
