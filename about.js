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



const slides = document.querySelectorAll('.about-slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
  index = i;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);

