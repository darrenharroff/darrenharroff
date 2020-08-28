const coverTitle = document.querySelector(".cover__wrap__content");
const headerText = document.querySelector(".header__wrap__logo");
const projectCards = document.querySelectorAll(
  ".portfolio__wrap__projects__project-card"
);
const callToAction = document.querySelector(
  ".cover__wrap__call-to-action__wrap"
);
const backToTop = document.querySelector(".footer__back-to-top");

let moveFactor = 40;
window.onmousemove = function (e) {
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  coverTitle.style.transform = `translate(calc(-50% - ${
    mouseX / moveFactor
  }px),calc(-50% - ${mouseY / moveFactor}px))`;
};

window.onscroll = function (e) {
  if (window.scrollY >= window.innerHeight) {
    headerText.classList.add("scrolled");
  } else {
    headerText.classList.remove("scrolled");
  }
  if (window.scrollY >= window.innerHeight / 4) {
    callToAction.classList.add("scrolled");
  } else {
    callToAction.classList.remove("scrolled");
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

callToAction.addEventListener("click", (e) => {
  window.scrollTo(0, window.innerHeight);
});

backToTop.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});
