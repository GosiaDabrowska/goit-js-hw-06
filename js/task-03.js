const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1. images to tablica obiektów
// 2. z obiektów tworzymy element <img>
// 3. elementy <img> wkładamy do <li>
// 4. aby utworzyć znaczniki uzyjemy "template strings" (tj: `template strings`)" i metody insertAdjacentHTML()

const list = document.querySelector(".gallery"); // odwołanie się do listy ul poprzez klasę (kropka oznacza klasę - klasa gallery to: .gallery)

const galleryList = images
  .map(
    ({ url, alt }) =>
      `<li><img src = '${url}' alt = '${alt}' width="350" height="230"></li>`
  )
  .join("");
list.insertAdjacentHTML("beforeend", galleryList);

list.style.cssText = `
display: flex;
list-style-type: none;
aling-items: center;
justify-content: center;
`;
