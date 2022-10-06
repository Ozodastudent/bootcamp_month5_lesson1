let form = document.querySelector(".form");
let inputEl = document.querySelector(".input_item");
let selectEl = document.querySelector(".select_item");
let outputEl = document.querySelector(".output_item");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var result = inputEl.value * selectEl.value;
  outputEl.textContent = result;
});
