// Slider
let slide = document.querySelector(".slide");
    slide_current = document.querySelector(".slide-current");
    slider_controls_left = document.querySelector(".slider-controls-left");
    slider_controls_right = document.querySelector(".slider-controls-right");
    slide_1 = document.querySelector(".slide-1");
    slide_2 = document.querySelector(".slide-2");
    slider_bullet_1 = document.querySelector(".slider-bullet-1");
    slider_bullet_2 = document.querySelector(".slider-bullet-2");
    slider_bullet = document.querySelector(".slider-bullet");

slider_controls_right.addEventListener("click", function () {
  console.log("next");
  slide_1.classList.toggle("slide-current");
  slide_2.classList.toggle("slide-current");
  slider_bullet_1.classList.toggle("slider-bullet-active");
  slider_bullet_2.classList.toggle("slider-bullet-active");
});

slider_controls_left.addEventListener("click", function () {
  console.log("next");
  slide_1.classList.toggle("slide-current");
  slide_2.classList.toggle("slide-current");
  slider_bullet_1.classList.toggle("slider-bullet-active");
  slider_bullet_2.classList.toggle("slider-bullet-active");
});