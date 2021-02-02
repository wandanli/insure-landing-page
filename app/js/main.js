const headerMenuContainer = document.querySelector("#header-menu-container");
const headerOverlay = document.querySelector("#header-overlay");
const overlayViewPlans = document.querySelector("#overlay-view-plans");

const switchClassName = (element, className1, className2) => {
  if (element.classList.contains(className1)) {
    element.classList.remove(className1);
    element.classList.add(className2);
  } else {
    element.classList.add(className1);
    element.classList.remove(className2);
  }
};

const toggleClassName = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className1);
  } else {
    element.classList.add(className);
  }
};

headerMenuContainer.addEventListener("click", () => {
  switchClassName(headerMenuContainer, "rotate", "reverse");
  if (headerMenuContainer.classList.contains("rotate")) {
    headerOverlay.style.display = "block";
    overlayViewPlans.style.display = "block";
    switchClassName(headerOverlay, "slide-down", "slide-up");
  } else {
    switchClassName(headerOverlay, "slide-up", "slide-down");
    setTimeout(() => {
      overlayViewPlans.style.display = "none";
    }, 200);
    setTimeout(() => {
      headerOverlay.style.display = "none";
    }, 500);
  }
});

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
