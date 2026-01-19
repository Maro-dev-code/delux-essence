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



// const slides = document.querySelectorAll('.about-slide');
// const dots = document.querySelectorAll('.dot');
// let index = 0;

// function showSlide(i) {
//   slides.forEach(slide => slide.classList.remove('active'));
//   dots.forEach(dot => dot.classList.remove('active'));

//   slides[i].classList.add('active');
//   dots[i].classList.add('active');
//   index = i;
// }

// dots.forEach((dot, i) => {
//   dot.addEventListener('click', () => showSlide(i));
// });

// setInterval(() => {
//   index = (index + 1) % slides.length;
//   showSlide(index);
// }, 6000);


// const track = document.querySelector(".about-track");
// const dots = document.querySelectorAll(".dot");
// const slides = document.querySelectorAll(".about-slide");

// let index = 0;

// function moveSlide(i) {
//   track.style.transform = `translateX(-${i * 100}vw)`;

//   dots.forEach(dot => dot.classList.remove("active"));
//   dots[i].classList.add("active");

//   index = i;
// }

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => moveSlide(i));
// });

// setInterval(() => {
//   index = (index + 1) % slides.length;
//   moveSlide(index);
// }, 6000);


const track = document.querySelector(".about-track");
const slides = document.querySelectorAll(".about-slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = slides.length;

function moveSlide(i) {
  track.style.transform = `translateX(-${i * 100}vw)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");

  index = i;
}

/* dot navigation */
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => moveSlide(i));
});

/* auto slide */
setInterval(() => {
  index = (index + 1) % totalSlides;
  moveSlide(index);
}, 6000);

const prevBtn = document.querySelector(".nav-btn.prev");
const nextBtn = document.querySelector(".nav-btn.next");

function nextSlide() {
  index = (index + 1) % totalSlides;
  moveSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  moveSlide(index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

let autoSlide = setInterval(nextSlide, 6000);

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 6000);
}

nextBtn.addEventListener("click", resetAutoSlide);
prevBtn.addEventListener("click", resetAutoSlide);
dots.forEach((dot) => dot.addEventListener("click", resetAutoSlide));

