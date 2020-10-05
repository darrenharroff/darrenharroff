const menuToggle = document.querySelector(".header__wrap__menu-toggle");
const headerWrap = document.querySelector(".header__wrap");
const mainOverlay = document.querySelector(".overlay.main");

menuToggle.addEventListener("click", () => {
  headerWrap.classList.toggle("toggled");
  mainOverlay.classList.toggle("open");
});

headerWrap.addEventListener("click", (e) => {
  if (e.target.className == "header__wrap__menu-wrap__menu__item__link") {
    headerWrap.classList.toggle("toggled");
    mainOverlay.classList.toggle("open");
  }
});

mainOverlay.addEventListener("click", (e) => {
  headerWrap.classList.toggle("toggled");
  mainOverlay.classList.toggle("open");
});
