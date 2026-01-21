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


const form = document.getElementById('waForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const waMessage = `Hello Deluxe Essence,
My name is ${name}.
My email is ${email}.
Message: ${message}`;

  const encodedMessage = encodeURIComponent(waMessage);
  const waNumber = '2349011659275'; // Your WhatsApp number

  // Open WhatsApp app or web with pre-filled message
  window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
});

