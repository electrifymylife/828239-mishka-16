var linkCatalog = document.querySelectorAll(".products__item-buy");
var popup = document.querySelector(".modal");

linkCatalog.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault;
    popup.classList.add("modal--show");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      evt.preventDefault();
      popup.classList.remove("modal--show");
    }
  }
});
