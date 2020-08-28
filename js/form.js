const formItems = document.querySelectorAll(
    ".contact__wrap__form__item__input"
  ),
  formCheckboxes = document.querySelectorAll(
    ".contact__wrap__form__options__option__checkbox"
  );

formItems.forEach((item) => {
  item.addEventListener("focus", (e) => {
    item.previousElementSibling.classList.add("active");
  });
  item.addEventListener("blur", (e) => {
    if (item.value) {
      return;
    } else {
      item.previousElementSibling.classList.remove("active");
    }
  });
});

formCheckboxes.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.checked) {
      option.parentElement.classList.add("filled");
    } else {
      option.parentElement.classList.remove("filled");
    }
  });
});
