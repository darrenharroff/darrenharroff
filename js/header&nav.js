const menuToggle = document.querySelector(".header__header-wrap__menu-toggle");
const mobileMenu = document.querySelector(".header__header-wrap__menu-wrap");
const filledBars = document.querySelectorAll(
  ".about__who-am-i__skills__topic__scale--filled"
);

filledBars.forEach(bar => {
  bar.classList.add("visible");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("toggled");
});

mobileMenu.addEventListener("click", e => {
  if (
    e.target.className ==
    "header__header-wrap__menu-wrap__menu__menu-item__menu-item-link"
  ) {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("toggled");
  }
});
