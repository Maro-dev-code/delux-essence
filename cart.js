const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
} 

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

const quickView = document.getElementById("quickView");
const quickImage = document.getElementById("quickImage");
const quickName = document.getElementById("quickName");
const quickPrice = document.getElementById("quickPrice");
const quickDesc = document.getElementById("quickDesc");
const closeQuickView = document.getElementById("closeQuickView");

function openQuickView(product) {
  quickImage.src = "img/" + product.images[0]; // CHANGE IMAGE PATH HERE
  quickName.textContent = product.name;
  quickPrice.textContent = "₦" + product.price.toLocaleString();
  quickDesc.textContent =
    product.description || "Beautifully designed for everyday comfort.";

  quickView.classList.remove("hidden");
}

card.addEventListener("click", function () {
  openQuickView(product);
});

closeQuickView.addEventListener("click", function () {
  quickView.classList.add("hidden");
});

document
  .querySelector(".quick-view-overlay")
  .addEventListener("click", function () {
    quickView.classList.add("hidden");
  });

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    quickView.classList.add("hidden");
  }
});


const modal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

let selectedProduct = null;

/* OPEN FORM */
function openOrderForm(product) {
  selectedProduct = product;

  productImage.src = "img/" + product.image; // CHANGE IMAGE FOLDER HERE
  productName.textContent = product.name;
  productPrice.textContent = "₦" + product.price.toLocaleString();

  modal.classList.remove("hidden");
}

/* CLOSE FORM */
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

/* SEND TO WHATSAPP */
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const size = document.getElementById("productSize").value;
  const qty = document.getElementById("productQty").value;
  const name = document.getElementById("customerName").value;
  const phone = document.getElementById("customerPhone").value;
  const email = document.getElementById("customerEmail").value;
  const address = document.getElementById("customerAddress").value;

  let message = `Hello Deluxe Essence 👗✨%0A%0A`;
  message += `NEW ORDER%0A%0A`;
  message += `Product: ${selectedProduct.name}%0A`;
  message += `Size: ${size}%0A`;
  message += `Quantity: ${qty}%0A`;
  message += `Price: ₦${selectedProduct.price.toLocaleString()}%0A`;
  message += `Image: https://yourdomain.com/img/${selectedProduct.image}%0A%0A`;
  message += `Customer Name: ${name}%0A`;
  message += `Phone: ${phone}%0A`;
  message += `Email: ${email}%0A`;
  message += `Delivery Address: ${address}%0A`;

  const whatsappNumber = "2349011659275";
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

  modal.classList.add("hidden");
});

