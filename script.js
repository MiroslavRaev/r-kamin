const products = [
  {
    name: "Камина Венеция",
    image: "https://via.placeholder.com/300x200?text=Venezia",
    price: "1200 лв.",
    description: "Модерна камина с италиански дизайн и висока ефективност."
  },
  {
    name: "Камина София",
    image: "https://via.placeholder.com/300x200?text=Sofia",
    price: "980 лв.",
    description: "Компактна камина подходяща за малки помещения."
  },
  {
    name: "Камина Торино",
    image: "https://via.placeholder.com/300x200?text=Torino",
    price: "1450 лв.",
    description: "Класически дизайн с модерен огнеупорен корпус."
  }
];

const grid = document.getElementById('product-grid');

products.forEach(product => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p class="price">${product.price}</p>
    <p>${product.description}</p>
  `;
  grid.appendChild(div);
});
