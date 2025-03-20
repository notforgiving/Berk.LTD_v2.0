const cursor = document.querySelector("#cursor");
const cursorFollowers = cursor.querySelectorAll("span");
const bdb_items = document.querySelectorAll(".bdb_item");

let mouseX = 0;
let mouseY = 0;

let tail = [];

let mouseMove = false;
let returnInStart = false;

setInterval(() => {
  mouseMove = false;
}, 30);

const checkPosition = (
  clientX,
  clientWidth,
  clientY,
  clientHeight,
  mouseX,
  mouseY
) => {
  const finishX = clientX + clientWidth;
  const finishY = clientY + clientHeight;
  if (
    mouseX >= clientX &&
    mouseX <= finishX &&
    mouseY >= clientY &&
    mouseY <= finishY
  ) {
    return true;
  }

  return false;
};

const setActiveItem = (target, classname, set) => {
  if (set) {
    target.classList.add(classname);
  } else {
    target.classList.remove(classname);
  }
};

const moveEvent = (event) => {
  cursor.style.opacity = "1";
  mouseX = event.clientX;
  mouseY = event.clientY;

  tail.push({
    mouseX: mouseX - cursor.clientWidth / 2,
    mouseY: mouseY - cursor.clientHeight / 2,
  });

  if (tail.length > 500) {
    tail.shift();
  }

  mouseMove = true;
  if (!!bdb_items.length) {
    bdb_items.forEach((item) => {
      setActiveItem(
        item,
        "active",
        checkPosition(
          item.getBoundingClientRect().x,
          item.clientWidth,
          item.getBoundingClientRect().y,
          item.clientHeight,
          mouseX,
          mouseY
        )
      );
    });
  }
};

document.addEventListener("mousemove", moveEvent);

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function () {
    cursorFollowers.forEach((item, index) => {
      if (!!tail.length && tail.length - (8 * index + 1) >= 0) {
        returnInStart = false;
        TweenMax.set(item, {
          css: {
            left: tail[tail.length - (8 * index + 1)].mouseX,
            top: tail[tail.length - (8 * index + 1)].mouseY,
            opacity: mouseMove ? "1" : "0",
          },
        });
      }
    });

    TweenMax.set(cursor, {
      css: {
        left: mouseX - cursor.clientWidth / 2,
        top: mouseY - cursor.clientHeight / 2,
      },
    });
  },
});
