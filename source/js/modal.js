var linkIndex = document.querySelector(".week-product__purchase");
var popup = document.querySelector(".modal");

linkIndex.addEventListener("click", function (evt) {
  evt.preventDefault;
  popup.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
