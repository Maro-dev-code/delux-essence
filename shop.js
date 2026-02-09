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
   PRODUCT DATA
   (Kept structure, fixed IDs & consistency)
===================================================== */

const products = [
  {
    id: "de-001",
    name: "Soft Linen Midi Dress 01",
    price: 45000,
    category: "set",
    images: ["img/img-1.PNG", "img/pic-2.png"],
    isNew: true,
  },
  {
    id: "de-001",
    name: "Soft Linen Midi Dress 02",
    price: 45000,
    category: "set",
    images: ["img/img-2.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 03",
    price: 45000,
    category: "dress",
    images: ["img/img-3.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 04",
    price: 45000,
    category: "dress",
    images: ["img/img-4.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 06",
    price: 45000,
    category: "set",
    images: ["img/img-5.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 07",
    price: 45000,
    category: "dress",
    images: ["img/img-6.png", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 08",
    price: 45000,
    category: "dress",
    images: ["img/img-7.JPG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 09",
    price: 45000,
    category: "dress",
    images: ["img/img-8.png", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 001",
    price: 45000,
    category: "dress",
    images: ["img/img-9.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 002",
    price: 45000,
    category: "set",
    images: ["img/pic-1.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 003",
    price: 45000,
    category: "dress",
    images: ["img/pic-2.PNG", "img/pic-2.png"],
    isNew: true,
  },{
    id: "de-001",
    name: "Soft Linen Midi Dress 004",
    price: 45000,
    category: "dress",
    images: ["img/pic-3.PNG", "img/pic-2.png"],
    isNew: true,
  },
  {
    id: "de-002",
    name: "Everyday Relaxed Set 005",
    price: 38000,
    category: "set",
    images: ["img/pic-4.JPG", "img/pic-4.jpg"],
    isNew: false,
  },
  {
    id: "de-003",
    name: "Elegant Evening Gown 006",
    price: 60000,
    category: "dress",
    images: ["img/pic-5.PNG", "img/pic-6.png"],
    isNew: true,
  },
  {
    id: "de-004",
    name: "Classic Wide-Leg Pants 105",
    price: 35000,
    category: "bottom",
    images: ["img/pic-6.PNG", "img/img-2.png"],
    isNew: false,
  },
  {
    id: "de-005",
    name: "Classic Wide-Leg Pants 007",
    price: 35000,
    category: "bottom",
    images: ["img/pic-1.PNG", "img/img-4.png"],
    isNew: false,
  },
  {
    id: "de-006",
    name: "Classic Wide-Leg Pants 008",
    price: 35000,
    category: "bottom",
    images: ["img/img-5.PNG", "img/img-6.png"],
    isNew: false,
  },
  {
    id: "de-001",
    name: "Soft Linen Midi Dress 009",
    price: 45000,
    category: "dress",
    images: ["img/pic-1.PNG", "img/pic-2.png"],
    isNew: true,
  },
  {
    id: "de-002",
    name: "Everyday Relaxed Set 010",
    price: 38000,
    category: "set",
    images: ["img/pic-3.PNG", "img/pic-4.jpg"],
    isNew: false,
  },
  {
    id: "de-003",
    name: "Elegant Evening Gown 011",
    price: 60000,
    category: "dress",
    images: ["img/pic-5.PNG", "img/pic-6.png"],
    isNew: true,
  },
  {
    id: "de-004",
    name: "Classic Wide-Leg Pants 012",
    price: 35000,
    category: "bottom",
    images: ["img/img-1.PNG", "img/img-2.png"],
    isNew: false,
  },
  {
    id: "de-005",
    name: "Classic Wide-Leg Pants 013",
    price: 35000,
    category: "bottom",
    images: ["img/img-4.PNG", "img/img-4.png"],
    isNew: false,
  },
  {
    id: "de-006",
    name: "Classic Wide-Leg Pants 014",
    price: 35000,
    category: "bottom",
    images: ["img/img-9.PNG", "img/img-6.png"],
    isNew: false,
  },
];

/* =====================================================
   PRODUCT GRID
===================================================== */

const productGrid = document.getElementById("productGrid");

if (!productGrid) {
  console.error("❌ productGrid not found");
}

/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts(list) {
  productGrid.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
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

    productGrid.appendChild(card);
  });

  enableImageToggle();
}

/* =====================================================
   IMAGE TOGGLE (HOVER + TAP)
===================================================== */

function enableImageToggle() {
  const images = document.querySelectorAll(".product-image img");

  images.forEach((img) => {
    const first = img.dataset.first;
    const second = img.dataset.second;
    let showingFirst = true;

    img.addEventListener("mouseenter", () => {
      img.src = second;
    });

    img.addEventListener("mouseleave", () => {
      img.src = first;
      showingFirst = true;
    });

    img.addEventListener("click", () => {
      img.src = showingFirst ? second : first;
      showingFirst = !showingFirst;
    });
  });
}

// function enableImageToggle() {
//   const images = document.querySelectorAll(".product-image img");

//   images.forEach((img) => {
//     const first = img.dataset.first;
//     const second = img.dataset.second;
//     let showingFirst = true;

//     function fadeSwitch(newSrc) {
//       img.style.opacity = 0;
//       setTimeout(() => {
//         img.src = newSrc;
//         img.style.opacity = 1;
//       }, 200);
//     }

//     img.addEventListener("mouseenter", () => fadeSwitch(second));
//     img.addEventListener("mouseleave", () => fadeSwitch(first));
//     img.addEventListener("click", () => {
//       showingFirst = !showingFirst;
//       fadeSwitch(showingFirst ? first : second);
//     });
//   });
// }


/* =====================================================
   FILTER SYSTEM
===================================================== */

const filterAll = document.getElementById("filterAll");
const filterDresses = document.getElementById("filterDresses");
const filterCasual = document.getElementById("filterCasual");
const filterSets = document.getElementById("filterSets");

function setActive(btn) {
  document.querySelectorAll(".filter-btn").forEach((b) =>
    b.classList.remove("active")
  );
  btn.classList.add("active");
}

if (filterAll) {
  filterAll.addEventListener("click", function () {
    setActive(this);
    renderProducts(products);
  });
}

if (filterDresses) {
  filterDresses.addEventListener("click", function () {
    setActive(this);
    renderProducts(products.filter((p) => p.category === "dress"));
  });
}

if (filterCasual) {
  filterCasual.addEventListener("click", function () {
    setActive(this);
    renderProducts(products.filter((p) => p.category === "bottom"));
  });
}

if (filterSets) {
  filterSets.addEventListener("click", function () {
    setActive(this);
    renderProducts(products.filter((p) => p.category === "set"));
  });
}

/* =====================================================
   CART SYSTEM (LOCAL STORAGE SAFE)
===================================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

productGrid.addEventListener("click", function (e) {
  if (!e.target.classList.contains("add-to-cart")) return;

  const card = e.target.closest(".product-card");
  const name = card.querySelector("h3").textContent;
  const price = parseInt(
    card.querySelector("p").textContent.replace(/[₦,]/g, "")
  );
  const img = card.querySelector("img").dataset.first;

  const existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart`);
});

/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (!cartCount) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = total;
}

/* =====================================================
   INITIAL LOAD
===================================================== */

renderProducts(products);
updateCartCount();
