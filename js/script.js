const pages = document.querySelector(".pages");
const pointsOfPages = pages.querySelectorAll("span");

const startvideos = () => {
  const videos = document.querySelectorAll("video");
  videos.forEach((item) => {
    item.play();
  });
};

$("#fullpage").fullpage({
  css3: false,
  responsiveWidth: 1250,
  afterLoad: function (anchorLink, index) {
    pointsOfPages[index - 1].classList.add("active");
  },
  onLeave: function (index, nextIndex, direction) {
    pointsOfPages[index - 1].classList.remove("active");
    pointsOfPages[nextIndex - 1].classList.add("active");
  },
});

// welcome
const body = document.querySelector("body");
$.fn.fullpage.setAllowScrolling(false);
const SPEEDANIMATIONS = 1500;
setTimeout(() => {
  body.classList.add("welcome");
}, SPEEDANIMATIONS);

setTimeout(() => {
  body.classList.remove("welcome");
  body.classList.add("bg");
  startvideos();
}, SPEEDANIMATIONS * 2);

setTimeout(() => {
  body.classList.add("overlay");
  body.classList.add("title");
}, SPEEDANIMATIONS * 3);

setTimeout(() => {
  $.fn.fullpage.setAllowScrolling(true);
}, SPEEDANIMATIONS * 5.5);
