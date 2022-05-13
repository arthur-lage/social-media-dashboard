const themeToggler = document.querySelector(".theme-toggler");

if (JSON.parse(localStorage.getItem("isDarkTheme")) === null) {
  localStorage.setItem("isDarkTheme", false);
}

if (JSON.parse(localStorage.getItem("isDarkTheme")) === true) {
  document.body.classList.add("dark");
}

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "isDarkTheme",
    JSON.stringify(document.body.classList.contains("dark"))
  );
});
