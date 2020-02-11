const galleryCards = document.querySelectorAll(
  ".graphics > .portfolio__gallery__card"
);
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.append(overlay);

const modal = document.createElement("div");
modal.className = "gallery-modal";
const modalWrap = document.createElement("div");
modalWrap.className = "gallery-modal__wrap";
const modalClose = document.createElement("h1");
modalClose.className = "gallery-modal__close";
modalClose.innerHTML = "X";
const modalPrev = document.createElement("h1");
modalPrev.className = "gallery-modal__prev";
modalPrev.innerHTML = "<";
const modalNext = document.createElement("h1");
modalNext.className = "gallery-modal__next";
modalNext.innerHTML = ">";
const modalImage = document.createElement("img");

modal.append(modalPrev);
modal.append(modalNext);
modal.append(modalWrap);
modal.append(modalClose);
document.body.append(modal);

galleryCards.forEach(card => {
  card.addEventListener("click", e => {
    overlay.classList.add("visible");
    modal.classList.add("visible");

    if (e.target.classList.contains("portfolio__gallery__card__image")) {
      modalImage.src = e.target.getAttribute("src");
      modalImage.className = "gallery-modal__wrap__image";
    } else if (e.target.classList.contains("portfolio__gallery__card")) {
      modalImage.src = e.target.firstElementChild.getAttribute("src");
      modalImage.className = "gallery-modal__wrap__image";
    }

    modalWrap.append(modalImage);
  });
});

modalNext.addEventListener("click", () => {
  const firstImage = galleryCards[0].firstElementChild.getAttribute("data-src");

  if (
    document.querySelector(
      `img[data-src="${modalNext.nextElementSibling.firstElementChild.getAttribute(
        "src"
      )}"]`
    ).parentElement.nextElementSibling === null
  ) {
    modalNext.nextElementSibling.firstElementChild.src = firstImage;
  } else {
    const nextImage = document
      .querySelector(
        `img[data-src="${modalNext.nextElementSibling.firstElementChild.getAttribute(
          "src"
        )}"]`
      )
      .parentElement.nextElementSibling.firstElementChild.getAttribute(
        "data-src"
      );
    modalNext.nextElementSibling.firstElementChild.src = nextImage;
  }
});

modalPrev.addEventListener("click", () => {
  const lastImage = galleryCards[
    galleryCards.length - 1
  ].firstElementChild.getAttribute("data-src");

  if (
    document.querySelector(
      `img[data-src="${modalNext.nextElementSibling.firstElementChild.getAttribute(
        "src"
      )}"]`
    ).parentElement.previousElementSibling === null
  ) {
    modalNext.nextElementSibling.firstElementChild.src = lastImage;
  } else {
    const prevImage = document
      .querySelector(
        `img[data-src="${modalNext.nextElementSibling.firstElementChild.getAttribute(
          "src"
        )}"]`
      )
      .parentElement.previousElementSibling.firstElementChild.getAttribute(
        "data-src"
      );
    modalNext.nextElementSibling.firstElementChild.src = prevImage;
  }
});

modalClose.addEventListener("click", e => {
  modal.classList.remove("visible");
  overlay.classList.remove("visible");
  setTimeout(() => {
    modalImage.src = null;
  }, 250);
});

overlay.addEventListener("click", e => {
  if (e.target.classList == "overlay visible") {
    overlay.classList.remove("visible");
    modal.classList.remove("visible");
    overlay.classList.remove("visible");
    setTimeout(() => {
      modalImage.src = null;
    }, 250);
  }
});
