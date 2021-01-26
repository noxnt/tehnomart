// Modal map
let map_button = document.querySelector(".map-img button");
    modal_map = document.querySelector(".modal-map");
    modal_map_close = document.querySelector(".modal-map-close");

// Modal write us
let write_us_button = document.querySelector(".write-us-button");
let write_us_close = document.querySelector(".write-us-close");
let modal_write_us = document.querySelector(".write-us");
  let write_us_name = modal_write_us.querySelector("[name=name]");
  let write_us_email = modal_write_us.querySelector(["[name=email]"]);
  let write_us_text = modal_write_us.querySelector(["[name=text]"]);
let write_us_form = document.querySelector(".modal-form");

let isStorageSupport = true;
let storage_name = localStorage.getItem("write_us_name");

// Modal write us
write_us_close.addEventListener("click", function () {
  console.log('Клик по кнопке "закрыть модальное окно"');
  modal_write_us.classList.remove("write-us-active");
  modal_write_us.classList.remove("modal-error");
});

try {
  storage_name = localStorage.getItem("write_us_name");
} catch (err) {
  isStorageSupport = false;
}

write_us_button.addEventListener("click", function () {
  console.log('Клик по кнопке "напишите нам"');
  modal_write_us.classList.add("write-us-active");
  write_us_name.value = localStorage.getItem("storage_name");
  if (write_us_name.value) {
    write_us_email.focus();
  } else {
    write_us_name.focus();
  }
});

write_us_form.addEventListener("submit", function (evt) {
  if (!write_us_name.value || !write_us_email.value || !write_us_text.value) {
    evt.preventDefault();
    console.log("error");
    modal_write_us.classList.remove("modal-error");
    modal_write_us.offsetWidth = modal_write_us.offsetWidth;
    modal_write_us.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("storage_name", write_us_name.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_write_us.classList.contains("write-us-active")) {
      evt.preventDefault();
      modal_write_us.classList.remove("write-us-active");
      modal_write_us.classList.remove("modal-error");
    }
  }
});

// Modal map
map_button.addEventListener("click", function () {
  console.log("Клик по карте-кнопке");
  modal_map.classList.add("modal-map-active");
});

modal_map_close.addEventListener("click", function () {
  console.log('Клик по кнопке "закрыть модальное окно"');
  modal_map.classList.remove("modal-map-active");
});