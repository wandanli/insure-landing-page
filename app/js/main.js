const headerMenuContainer = document.querySelector("#header-menu-container");
const headerOverlay = document.querySelector("#header-overlay");
const body = document.querySelector("body");
const header = document.querySelector("#header");

const switchClassName = (element, className1, className2) => {
  if (element.classList.contains(className1)) {
    element.classList.remove(className1);
    element.classList.add(className2);
  } else {
    element.classList.add(className1);
    element.classList.remove(className2);
  }
};

// const toggleClassName = (element, className) => {
//   if (element.classList.contains(className)) {
//     element.classList.remove(className1);
//   } else {
//     element.classList.add(className);
//   }
// };

headerMenuContainer.addEventListener("click", () => {
  switchClassName(headerMenuContainer, "rotate", "reverse");
  if (headerMenuContainer.classList.contains("rotate")) {
    body.classList.add("noscroll");
    headerOverlay.style.display = "flex";
    switchClassName(headerOverlay, "slide-down", "slide-up");
  } else {
    body.classList.remove("noscroll");
    switchClassName(headerOverlay, "slide-up", "slide-down");
  }
});

const scrollFunction = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
};
window.onscroll = () => {
  scrollFunction();
};

// These are working
// headerMenuContainer.addEventListener("click", function () {
//   toggleClassName(headerMenuContainer, "rotate");
// });

// These are not working
// headerMenuContainer.addEventListener(
//   "click",
//   toggleClassName(headerMenuContainer, "rotate")
// );

// These are working
// headerMenuContainer.addEventListener("click", function () {
//   if (headerMenuContainer.classList.contains("rotate")) {
//     headerMenuContainer.classList.remove("rotate");
//   } else {
//     headerMenuContainer.classList.add("rotate");
//   }
// });
