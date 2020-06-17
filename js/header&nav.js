const menuToggle = document.querySelector(".header__wrap__menu-toggle");
const mobileMenu = document.querySelector(".header__wrap__menu-wrap");
const filledBars = document.querySelectorAll(
  ".about__who-am-i__skills__topic__scale--filled"
);

filledBars.forEach((bar) => {
  bar.classList.add("visible");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  mobileMenu.classList.toggle("toggled");
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target.className == "header__wrap__menu-wrap__menu__item__link") {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("toggled");
  }
});
