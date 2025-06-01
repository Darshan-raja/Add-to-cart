document.addEventListener("DOMContentLoaded", function () {
  const products = [ //  Create an array of products
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Shoes", price: 2500 },
    { id: 3, name: "Watch", price: 3000 },
    { id: 4, name: "Mobile Phone", price: 20000 },
    { id: 5, name: "Headphones", price: 1500 },
    { id: 6, name: "Backpack", price: 2000 },
    { id: 7, name: "Camera", price: 30000 },
    { id: 8, name: "Tablet", price: 15000 },
    { id: 9, name: "Smart TV", price: 40000 },
    { id: 10, name: "Gaming Console", price: 25000 }
  ];

  const productsContainer = document.getElementById("products"); //  Get the products container from the DOM
  const cartContainer = document.getElementById("cart"); //  Get the cart container from the DOM
  const totalContainer = document.getElementById("total"); //  Get the element with the id "total" and assign it to the variable totalContaine
  const Cart = document.getElementById("clearCart");
  let cart = []; 
 
  //  Create an empty array to store the cart items

  // Function to add product to cart
  function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    renderCart();
  }
  // Function to clear cart items
  function clearCartItems(){
    cart = [];
    renderCart();
  }
  Cart.addEventListener("click", clearCartItems);

// Attach event listener to the button


  // Attach event listeners in renderProducts
  function renderProducts() {
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "col-md-4";
      productElement.innerHTML = `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">₹${product.price}</p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    `;
      productElement
        .querySelector("button")
        .addEventListener("click", () => addToCart(product.id));
      productsContainer.appendChild(productElement);
    });
  }

  // Function to render cart
  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.className = "list-group-item";
      cartItem.textContent = `${item.name} - ₹${item.price}`;
      cartContainer.appendChild(cartItem);
      total += item.price;
    });
    totalContainer.textContent = total;
  }

  // Initial render
  renderProducts();
});