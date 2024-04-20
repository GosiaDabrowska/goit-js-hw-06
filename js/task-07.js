const controler = document.querySelector(`#font-size-control`);
const textSize = document.querySelector(`#text`);

controler.addEventListener("input", (event) => {
  textSize.style.fontSize = `${event.currentTarget.value}px`; // ${}: W JavaScript, ${} jest używane wewnątrz stringów szablonowych (template strings) do wstawienia wartości zmiennej. Wartość wewnątrz ${} zostanie obliczona i wstawiona do stringa.
});
