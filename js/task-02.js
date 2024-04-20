//Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
//Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
//Doda do elementu klasę item.
//Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElement = document.querySelector(`#ingredients`); // odwołanie do elementu wewnątrz html którym jest lista (element z id="ingredients")

const fragment = document.createDocumentFragment(); // stworzenie "fragmentu" - potrzebny aby wg. polecenia zadania dodać wszystko do html w jednej operacji. Robiąc to bez fragment dodajesz elementy do html jeszcze wewnątrz pętli to znaczy że dodajesz je pojedynczo

for (const ingredient of ingredients) {
  // przeiterowanie po tablicy ingredients za pomocą pętli for...of
  const list = document.createElement("li"); // utworzenie elementu li wewnątrz listy ul
  list.textContent = ingredient; // dodanie elemtów tablicy do li
  list.classList.add(`item`); // przypisanie klasy do elemtu li
  fragment.appendChild(list); // przypisanie utworzonego elementu li do "fragmentu"
}

listElement.append(fragment); // przypisanie fragmentu do ul fragment zawiera w sobie wszystkie li
