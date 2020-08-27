const coverTitle = document.querySelector(".cover__wrap__content");
const headerText = document.querySelector(".header__wrap__logo");
const projectCards = document.querySelectorAll(
  ".portfolio__wrap__projects__project-card"
);

let moveFactor = 40;
window.onmousemove = function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;
  coverTitle.style.transform = `translate(calc(-50% - ${
    mouseX / moveFactor
  }px),calc(-50% - ${mouseY / moveFactor}px))`;
};

window.onscroll = function (e) {
  if (window.scrollY >= 800) {
    headerText.classList.add("scrolled");
  } else {
    headerText.classList.remove("scrolled");
  }
};

projectCards.forEach((card) => {
  card.addEventListener("mouseover", (e) => {
    card.classList.add("hovered");
  });
  card.addEventListener("mouseleave", (e) => {
    card.classList.remove("hovered");
  });
});
