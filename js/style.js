const cover = document.querySelector(".cover");

cover.style.height = `calc(${window.innerHeight}px - var(--headerHeight))`;

// media query for scroll if menu btn is pressed on mobile
const menuToggleMobile = document.querySelector(".header__wrap__menu-toggle");
let screenWidth = window.matchMedia("(max-width:760px)");

watchFunction = (width) => {};
watchScreenWidth = (width) => {
  menuToggleMobile.addEventListener("click", (e) => {
    if (width.matches && window.scrollY < 200) {
      window.scrollTo(0, 200);
    }
  });
};

watchScreenWidth(screenWidth);
document.addEventListener("scroll", (e) => {
  watchScreenWidth(screenWidth);
});
