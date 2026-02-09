/* =====================================================
   NAVBAR (MOBILE MENU)
===================================================== */
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

/* =====================================================
   LOAD CART
===================================================== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

/* =====================================================
   RENDER CART ITEMS
   Includes:
   - + and - buttons for quantity
   - Individual size selection
===================================================== */
function renderCart() {
  cartItems.innerHTML = ""; // Clear previous content
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    // Create cart item container
    const div = document.createElement("div");
    div.className = "cart-item";

    // HTML structure
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>₦${item.price.toLocaleString()}</p>

        <!-- Size selection -->
        <label for="size-${index}">Size:</label>
        <select id="size-${index}" data-index="${index}">
          <option value="S" ${item.size === "S" ? "selected" : ""}>S</option>
          <option value="M" ${item.size === "M" ? "selected" : ""}>M</option>
          <option value="L" ${item.size === "L" ? "selected" : ""}>L</option>
          <option value="XL" ${item.size === "XL" ? "selected" : ""}>XL</option>
        </select>
      </div>

      <!-- Quantity and remove -->
      <div class="cart-item-actions">
        <button class="decrease" data-index="${index}">-</button>
        <span class="qty">${item.qty}</span>
        <button class="increase" data-index="${index}">+</button>
        <button class="remove" data-index="${index}">Remove</button>
      </div>
    `;

    cartItems.appendChild(div);
  });

  totalAmount.textContent = total.toLocaleString();

  // ===== EVENT LISTENERS =====

  // Size selection
  const sizeSelects = cartItems.querySelectorAll("select");
  sizeSelects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const idx = e.target.dataset.index;
      cart[idx].size = e.target.value;
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });

  // Increase quantity
  const increaseBtns = cartItems.querySelectorAll(".increase");
  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart[idx].qty += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  // Decrease quantity
  const decreaseBtns = cartItems.querySelectorAll(".decrease");
  decreaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      if (cart[idx].qty > 1) {
        cart[idx].qty -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });

  // Remove item
  const removeBtns = cartItems.querySelectorAll(".remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = e.target.dataset.index;
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

/* =====================================================
   INITIAL RENDER
===================================================== */
renderCart();

/* =====================================================
   CHECKOUT FORM
   Sends WhatsApp message with:
   - Item name, price, quantity, size
   - Image URL
   - Customer info
===================================================== */
const checkoutForm = document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Customer info
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const phone = document.getElementById("customerPhone").value;
  const address = document.getElementById("customerAddress").value;

  // Construct WhatsApp message
  let message = `Hello Deluxe Essence!%0A%0AOrder Details:%0A`;
  cart.forEach((item) => {
    const imageUrl = `${window.location.origin}/${item.img}`; // Make sure your images are publicly accessible
    message += `- ${item.name} | ₦${item.price.toLocaleString()} | Qty: ${item.qty} | Size: ${item.size || "N/A"}%0A  Image: ${imageUrl}%0A`;
  });

  message += `%0ACustomer Info:%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AAddress: ${address}`;

  // WhatsApp number (replace with real number)
  const whatsappNumber = "2347041468207"; // <-- replace with your real WhatsApp number
  const url = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Open WhatsApp
  window.open(url, "_blank");

  // Clear cart
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
  checkoutForm.reset();
});
