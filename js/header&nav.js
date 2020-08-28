const menuToggle = document.querySelector(".header__wrap__menu-toggle");
const headerWrap = document.querySelector(".header__wrap");

menuToggle.addEventListener("click", () => {
  headerWrap.classList.toggle("toggled");
});

headerWrap.addEventListener("click", (e) => {
  if (e.target.className == "header__wrap__menu-wrap__menu__item__link") {
    headerWrap.classList.toggle("toggled");
  }
});
