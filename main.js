// Toggle Dark Mode with Icon Swap and Save Preference
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  const toggleBtn = document.querySelector(".toggle-btn");
  toggleBtn.textContent = isDark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
}

// Load theme on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const toggleBtn = document.querySelector(".toggle-btn");
    if (toggleBtn) toggleBtn.textContent = "☀️ Mode Terang";
  }

  // Show scroll-to-top if needed
  window.addEventListener("scroll", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
});

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Send message to WhatsApp
function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !message) return false;

  const fullMessage = `Halo, saya ${name}. ${message}`;
  const whatsappLink = `https://wa.me/6285779212809?text=${encodeURIComponent(
    fullMessage
  )}`;
  window.open(whatsappLink, "_blank");
  return false;
}

// Optional: Typing effect (on h1 with id="typed")
const typeText = "Unleashed Dev";
let index = 0;
function typeWriter() {
  const el = document.getElementById("typed");
  if (el && index < typeText.length) {
    el.innerHTML += typeText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.addEventListener("load", typeWriter);
