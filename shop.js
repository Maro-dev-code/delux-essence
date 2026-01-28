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
   SHOP PAGE SCRIPT
   Author: You 🙂
   Purpose: Display products on shop page
===================================== */


/* =====================================
   1. PRODUCT DATA
   This is where ALL products live.
   When new designs come in later,
   you ONLY add them here.
===================================== */

const products = [
  {
    id: "de-001", // unique product ID
    name: "Soft Linen Midi Dress", // product name
    price: 45000, // price in naira
    category: "dress", // used later for filtering

    // 👇 IMAGES MUST BE INSIDE THE img FOLDER
    // Make sure the name and .PNG match exactly
    images: ["img/pic-1.PNG", "img/pic-2.PNG"],

    isNew: true, // shows "New" badge if true
  },

  {
    id: "de-002",
    name: "Everyday Relaxed Set",
    price: 38000,
    category: "set",
    images: ["img/pic-3.PNG", "img/pic-4.JPG"],
    isNew: false,
  },

  {
    id: "de-003",
    name: "Elegant Evening Gown",
    price: 60000,
    category: "dress",
    images: ["img/pic-5.PNG", "img/pic-6.PNG"],
    isNew: true,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-1.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-005",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-2.PNG", "img/img-4.PNG"],
    isNew: false,
  },

  {
    id: "de-006",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-4.JPG", "img/img-6.PNG"],
    isNew: false,
  },

  {
    id: "de-007",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-5.PNG", "img/img-8.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-7.JPG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-1.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-6.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-5.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-4.JPG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-3.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-2.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/pic-1.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-1.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-2.PNG", "img/img-2.PNG"],
    isNew: false,
  },

  {
    id: "de-004",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "bottom",
    images: ["img/img-3.PNG", "img/img-2.PNG"],
    isNew: false,
  },
];

/* =====================================
   END OF PRODUCT DATA
   Nothing will display yet — this is OK.
===================================== */

/* =====================================
   2. GET HTML ELEMENT
   We are selecting where products
   will be displayed on the page
===================================== */

const productGrid = document.getElementById("productGrid");

/* Safety check (good practice) */
if (!productGrid) {
  console.error("productGrid not found in HTML");
}

/* =====================================
   3. DISPLAY PRODUCTS ON THE PAGE
===================================== */

/* Loop through each product */
products.forEach(function (product) {

  /* Create a div for ONE product */
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  /* Insert product content */
  productCard.innerHTML = `
    <div class="product-image">
      <!-- MAIN PRODUCT IMAGE -->
     <img 
        src="${product.images[0]}" 
        alt="${product.name}"
        data-first="${product.images[0]}"
        data-second="${product.images[1]}"
      >


      <!-- SHOW 'NEW' BADGE IF TRUE -->
      ${product.isNew ? `<span class="badge">New</span>` : ""}
    </div>

    <div class="product-info">
      <h3>${product.name}</h3>
      <p>₦${product.price.toLocaleString()}</p>

      <!-- ADD TO CART BUTTON (FOR LATER) -->
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;

  /* Add product card to the page */
  productGrid.appendChild(productCard);

  

});

/* =====================================
   4. IMAGE TOGGLE (HOVER + TAP)
   Works for desktop AND mobile
===================================== */

// Get all product images
const productImages = document.querySelectorAll(".product-image img");

// Loop through each image
productImages.forEach(function (img) {

  // Store image paths
  const firstImage = img.getAttribute("data-first");
  const secondImage = img.getAttribute("data-second");

  // Track which image is currently showing
  let isFirstImage = true;

  /* -------- DESKTOP: HOVER -------- */
  img.addEventListener("mouseenter", function () {
    img.src = secondImage;
  });

  img.addEventListener("mouseleave", function () {
    img.src = firstImage;
  });

  /* -------- MOBILE/TABLET: TAP -------- */
  img.addEventListener("click", function () {
    if (isFirstImage) {
      img.src = secondImage;
      isFirstImage = false;
    } else {
      img.src = firstImage;
      isFirstImage = true;
    }
  });

});

/* =====================================
   5. CATEGORY FILTER SYSTEM
   Touch-friendly, click-based
===================================== */

// Get buttons
const filterAll = document.getElementById("filterAll");
const filterDresses = document.getElementById("filterDresses");
const filterCasual = document.getElementById("filterCasual");
const filterSets = document.getElementById("filterSets");

// Function to clear grid
function clearProducts() {
  productGrid.innerHTML = "";
}

// Function to display products
function displayProducts(list) {
  clearProducts();

  list.forEach(function (product) {

    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <div class="product-image">
        <img 
          src="${product.images[0]}" 
          alt="${product.name}"
          data-first="${product.images[0]}"
          data-second="${product.images[1]}"
        >
        ${product.isNew ? `<span class="badge">New</span>` : ""}
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p>₦${product.price.toLocaleString()}</p>
        <button class="add-to-cart">Add to Cart</button>
      </div>
    `;

    productGrid.appendChild(productCard);
  });

  // Re-enable image toggle after re-render
  enableImageToggle();
}

/* =====================================
   FILTER BUTTON EVENTS
===================================== */

filterAll.addEventListener("click", function () {
  setActive(this);
  displayProducts(products);
});

filterDresses.addEventListener("click", function () {
  setActive(this);
  const dresses = products.filter(function (p) {
    return p.category === "dresses";
  });
  displayProducts(dresses);
});

filterCasual.addEventListener("click", function () {
  setActive(this);
  const casual = products.filter(function (p) {
    return p.category === "casual";
  });
  displayProducts(casual);
});

filterSets.addEventListener("click", function () {
  setActive(this);
  const sets = products.filter(function (p) {
    return p.category === "sets";
  });
  displayProducts(sets);
});

/* =====================================
   ACTIVE BUTTON UI
===================================== */

function setActive(activeBtn) {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  activeBtn.classList.add("active");
}

/* =====================================
   IMAGE TOGGLE FUNCTION
===================================== */

function enableImageToggle() {
  const productImages = document.querySelectorAll(".product-image img");

  productImages.forEach(function (img) {
    const firstImage = img.getAttribute("data-first");
    const secondImage = img.getAttribute("data-second");
    let isFirstImage = true;

    // Desktop hover
    img.addEventListener("mouseenter", function () {
      img.src = secondImage;
    });

    img.addEventListener("mouseleave", function () {
      img.src = firstImage;
    });

    // Mobile tap
    img.addEventListener("click", function () {
      if (isFirstImage) {
        img.src = secondImage;
        isFirstImage = false;
      } else {
        img.src = firstImage;
        isFirstImage = true;
      }
    });
  });
}

/* =====================================
   INITIAL LOAD
===================================== */

displayProducts(products);


/* =====================================
   6A. CART SYSTEM - SETUP
===================================== */

// Check if cart already exists in localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =====================================
   ADD TO CART BUTTON FUNCTION
===================================== */

// Use event delegation (works for dynamic products)
document.getElementById("productGrid").addEventListener("click", function(e) {
  if (e.target && e.target.classList.contains("add-to-cart")) {
    const productCard = e.target.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = parseInt(productCard.querySelector("p").textContent.replace(/₦|,/g, ''));
    const productImg = productCard.querySelector("img").getAttribute("data-first");

    // Check if product is already in cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
      existingItem.qty += 1; // Increase quantity
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        img: productImg,
        qty: 1
      });
    }

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${productName} added to cart!`);
  }
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQty = 0;

  cart.forEach((item) => {
    totalQty += item.qty;
  });

  document.getElementById("cartCount").textContent = totalQty;
}

// Run on page load
updateCartCount();


