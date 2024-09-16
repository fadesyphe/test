const menuButton = document.querySelector("#MENU_BUTTON");
const menu = document.querySelector(".menu");
const html = document.querySelector("html");

menuButton.addEventListener("click", ()=> {
  html.classList.toggle('active');
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
})

const priceButton = document.querySelectorAll('[data-price]');
priceButton.forEach((element) => {
  element.addEventListener('click', () => {
    alert("в будущем ссылка на цены");
  })
})

const formButton = document.querySelectorAll('[data-form]');
formButton.forEach((element) => {
  element.addEventListener('click', () => {
    alert("в будущем форма")
  })
})
