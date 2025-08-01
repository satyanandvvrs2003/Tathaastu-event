// theme-toggle.js

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
});