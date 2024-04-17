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

const list = document.createElement("li"); // stworzenie listy w HTML

list.append(ingredients); // dodanie elementów tablicy ingredients do listy w HTML

list.classList.add("item"); // dodanie klasy "item"
