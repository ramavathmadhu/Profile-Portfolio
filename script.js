const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") body.classList.add("dark");
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
});

function updateThemeIcon() {
  themeToggle.textContent = body.classList.contains("dark") ? "☀" : "☾";
}

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  menuToggle.textContent = navMenu.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
