const pages = document.querySelector(".pages");
const pointsOfPages = pages.querySelectorAll("span");

const startvideos = () => {
  const videos = document.querySelectorAll("video");
  videos.forEach((item) => {
    item.play();
  });
};

const body = document.querySelector("body");
const SPEEDANIMATIONS = 1000;

setTimeout(() => {
  body.classList.add("welcome");
}, SPEEDANIMATIONS);

window.onload = () => {
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
  $.fn.fullpage.setAllowScrolling(false);
  
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
};
