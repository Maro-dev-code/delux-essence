// ==========================
// PRODUCTS DATA - 10 PRODUCTS
// ==========================
const products = [
  {
    id: "de-001",
    name: "Soft Linen Midi Dress",
    price: 45000,
    category: "dresses",
    images: ["img/img-1.PNG", "img/img-2.PNG"],
    isNew: true,
  },
  {
    id: "de-002",
    name: "Everyday Relaxed Set",
    price: 38000,
    category: "casual",
    images: ["img/img-3.PNG", "img/img-4.PNG"],
    isNew: false,
  },
  {
    id: "de-003",
    name: "Elegant Evening Gown",
    price: 60000,
    category: "dresses",
    images: ["img/img-5.PNG", "img/img-6.PNG"],
    isNew: true,
  },
  {
    id: "de-004",
    name: "Chic Summer Top",
    price: 18000,
    category: "tops",
    images: ["img/img-7.PNG", "img/img-8.PNG"],
    isNew: false,
  },
  {
    id: "de-005",
    name: "Classic Wide-Leg Pants",
    price: 35000,
    category: "pants",
    images: ["img/img-9.PNG", "img/img-10.PNG"],
    isNew: true,
  },
  {
    id: "de-006",
    name: "Cozy Knit Sweater",
    price: 27000,
    category: "tops",
    images: ["img/img-11.PNG", "img/img-12.PNG"],
    isNew: false,
  },
  {
    id: "de-007",
    name: "Statement Blazer",
    price: 42000,
    category: "jackets",
    images: ["img/img-13.PNG", "img/img-14.PNG"],
    isNew: true,
  },
  {
    id: "de-008",
    name: "Relaxed Linen Shorts",
    price: 22000,
    category: "shorts",
    images: ["img/img-15.PNG", "img/img-16.PNG"],
    isNew: false,
  },
  {
    id: "de-009",
    name: "Elegant Maxi Skirt",
    price: 40000,
    category: "skirts",
    images: ["img/img-17.PNG", "img/img-18.PNG"],
    isNew: true,
  },
  {
    id: "de-010",
    name: "Classic Cotton Shirt",
    price: 25000,
    category: "shirts",
    images: ["img/img-19.PNG", "img/img-20.PNG"],
    isNew: false,
  },
];

// ==========================
// GET PRODUCT GRID CONTAINER
// ==========================
const productGrid = document.getElementById("productGrid");

if (productGrid) {
  // ==========================
  // CREATE PRODUCT CARDS
  // ==========================
  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    // Wrap the entire card in a clickable link
    card.innerHTML = `
      <a href="#" class="product-link">
        <div class="product-image">
          <img 
            src="${product.images[0]}" 
            data-hover="${product.images[1] || product.images[0]}" 
            alt="${product.name}" 
            loading="lazy"
          >
          ${product.isNew ? '<span class="badge">New</span>' : ""}
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>₦${product.price.toLocaleString()}</p>
        </div>
      </a>
      <button class="add-cart-btn">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });

  // ==========================
  // HOVER IMAGE SWAP
  // ==========================
  document.querySelectorAll(".product-card img").forEach((img) => {
    const originalSrc = img.src;
    const hoverSrc = img.dataset.hover;

    img.addEventListener("mouseenter", () => {
      img.src = hoverSrc;
    });
    img.addEventListener("mouseleave", () => {
      img.src = originalSrc;
    });
  });

  // ==========================
  // ADD-TO-CART BUTTON
  // ==========================
  document.querySelectorAll(".add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productName = e.target
        .closest(".product-card")
        .querySelector("h3").textContent;
      alert(`${productName} added to cart! (Functionality coming soon)`);
    });
  });
} else {
  console.error(
    "No product grid found. Make sure <section id='productGrid'> exists.",
  );
}
