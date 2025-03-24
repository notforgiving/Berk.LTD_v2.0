const pages = document.querySelector(".pages");
const pointsOfPages = pages.querySelectorAll("span");
const videoBg = document.querySelector("video");
const main_title = document.querySelector(".main_title");
const videos = document.querySelectorAll("video");

document.querySelector(
  "#size"
).innerHTML = `${document.body.clientWidth}x${window.innerHeight}`;

const body = document.querySelector("body");
const SPEEDANIMATIONS = 1500;
let stopScroll = true;

setTimeout(() => {
  body.classList.add("welcome");
}, SPEEDANIMATIONS);

const mobileCondition = document.body.clientWidth <= 1250;

$("#fullpage").fullpage({
  css3: true,
  responsiveWidth: 1250,
  fixedElements: mobileCondition ? "#header" : "",
  afterLoad: function (anchorLink, index) {
    pointsOfPages[index - 1].classList.add("active");
  },
  onLeave: function (index, nextIndex, direction) {
    pointsOfPages[index - 1].classList.remove("active");
    pointsOfPages[nextIndex - 1].classList.add("active");
  },
});
$.fn.fullpage.setAllowScrolling(false);

if (stopScroll) {
  body.style.overflow = "hidden";
}

window.addEventListener("load", (event) => {
  if (videos[0]) {
    stopScroll = false;

    setTimeout(() => {
      body.classList.remove("welcome");
      body.classList.add("bg");
      videos.forEach((item) => {
        if (item) {
          item.play();
        }
      });
    }, SPEEDANIMATIONS * 2);

    setTimeout(() => {
      if (!mobileCondition) {
        body.classList.add("overlay");
      }

      body.classList.add("title");
    }, SPEEDANIMATIONS * 3);

    setTimeout(() => {
      $.fn.fullpage.setAllowScrolling(true);
      if (!stopScroll) {
        body.style.overflow = "initial";
      }
    }, SPEEDANIMATIONS * 5);

    // if (mobileCondition) {
    //   videoBg.style.height = `${main_title.clientHeight}px`;
    // }
  }
});

const setAutoHeightForBDB = () => {
  const sectionBdb = document.querySelector("#bdb");
  if (mobileCondition && sectionBdb) {
    sectionBdb.classList.add("fp-auto-height-responsive");
  }
};

setAutoHeightForBDB();
