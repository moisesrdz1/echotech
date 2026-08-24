const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const detailsBtn = document.getElementById("detailsBtn");
const details = document.getElementById("details");
const fillBar = document.getElementById("fillBar");
const fillValue = document.getElementById("fillValue");

menuBtn.addEventListener("click", () => {
  const active = navLinks.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", active);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

detailsBtn.addEventListener("click", () => {
  const active = details.classList.toggle("active");
  detailsBtn.textContent = active ? "Ocultar detalhes ↑" : "Ver como funciona →";
});

let level = 68;
let direction = 1;

function updateBin() {
  level += direction;

  if (level >= 82 || level <= 55) {
    direction *= -1;
  }

  fillBar.style.width = `${level}%`;
  fillValue.textContent = `${level}%`;
}

setInterval(updateBin, 2500);
