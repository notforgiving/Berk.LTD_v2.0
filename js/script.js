const pages = document.querySelector(".pages");
const pointsOfPages = pages.querySelectorAll("span");
const videoBg = document.querySelector("video");
const main_title = document.querySelector(".main_title");

document.querySelector(
  "#size"
).innerHTML = `${document.body.clientWidth}x${window.innerHeight}`;

const body = document.querySelector("body");
const SPEEDANIMATIONS = 1000;

setTimeout(() => {
  body.classList.add("welcome");
}, SPEEDANIMATIONS);

const mobileCondition = document.body.clientWidth <= 1250;

window.addEventListener("load", (event) => {
  if (videoBg) {
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

    setTimeout(() => {
      body.classList.remove("welcome");
      body.classList.add("bg");
      document.querySelector("video").play();
    }, SPEEDANIMATIONS * 2);

    setTimeout(() => {
      body.classList.add("overlay");
      body.classList.add("title");
    }, SPEEDANIMATIONS * 3);

    setTimeout(() => {
      $.fn.fullpage.setAllowScrolling(true);
    }, SPEEDANIMATIONS * 5.5);

    if (mobileCondition) {
      console.log(mobileCondition,'mobileCondition');
      
      videoBg.style.height = `${main_title.clientHeight}px`;
    }
  }
});
