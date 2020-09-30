var themeSwitch = document.querySelector(".switch input");

var bodyTag = document.querySelector("body");

themeSwitch.addEventListener("click", switchTheme);

function switchTheme() {
  console.log("click");
  bodyTag.classList.toggle("light");
  bodyTag.classList.toggle("dark");
}
