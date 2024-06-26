//Napisz skrypt, który:

//Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
//Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
//Po wykonaniu w konsoli znajdą się takie komunikaty.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

const categories = Array.from(document.querySelectorAll(".item"));

console.log(`Number of categories: ${categories.length}`);

for (const item of categories) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}
