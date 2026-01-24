/* =====================================
   6B. CART PAGE LOGIC
===================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const cartSummary = document.getElementById("cartSummary");

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartSummary.innerHTML = "";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" width="120">
        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>₦${item.price.toLocaleString()}</p>
          <div class="cart-qty">
            <button class="decrease" data-index="${index}">-</button>
            <span>${item.qty}</span>
            <button class="increase" data-index="${index}">+</button>
          </div>
          <button class="remove" data-index="${index}">Remove</button>
        </div>
      </div>
    `;
  });

  cartSummary.innerHTML = `<h3>Total: ₦${total.toLocaleString()}</h3>`;
}

renderCart();

/* =====================================
   CART BUTTONS LOGIC
===================================== */

cartItems.addEventListener("click", function (e) {
  const index = e.target.dataset.index;
  if (e.target.classList.contains("increase")) {
    cart[index].qty += 1;
  }
  if (e.target.classList.contains("decrease")) {
    cart[index].qty -= 1;
    if (cart[index].qty < 1) cart.splice(index, 1);
  }
  if (e.target.classList.contains("remove")) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
});
