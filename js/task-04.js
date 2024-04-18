let counterValue = 0;

const decr = document.querySelector("button[data-action='decrement']");
const incr = document.querySelector("button[data-action='increment']");
const theValue = document.querySelector("#value");

const clickDecr = () => {
  return (theValue.textContent = counterValue -= 1);
};

const clickIncr = () => {
  return (theValue.textContent = counterValue += 1);
};

decr.addEventListener("click", clickDecr);
incr.addEventListener("click", clickIncr);
