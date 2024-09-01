const menuButton = document.querySelector("#MENU_BUTTON");
const menu = document.querySelector(".menu");
const html = document.querySelector("html")

menuButton.addEventListener("click", ()=> {
  html.classList.toggle('active');
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
})
