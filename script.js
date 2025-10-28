fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const grid = document.getElementById('product-grid');
    data.forEach(product => {
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
  })
  .catch(err => {
    console.error('Неуспешно зареждане на продуктите:', err);
  });
