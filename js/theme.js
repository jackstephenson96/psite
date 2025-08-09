const KEY = "theme";
const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
const init = localStorage.getItem(KEY) ?? (prefersDark ? "dark" : "light");
document.documentElement.setAttribute("data-theme", init);

const btn = document.getElementById("theme-toggle");
const setIcon = () => { if (btn) btn.textContent =
  document.documentElement.getAttribute("data-theme")==="dark" ? "🌙" : "☀️"; };
setIcon();

btn?.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme")==="dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(KEY, next);
  setIcon();
});
