const headerMenuContainer = document.querySelector("#header-menu-container");

const toggleClassName = (element, className1, className2) => {
  if (element.classList.contains(className1)) {
    element.classList.remove(className1);
    element.classList.add(className2);
  } else {
    element.classList.add(className1);
    element.classList.remove(className2);
  }
};

headerMenuContainer.addEventListener("click", () => {
  toggleClassName(headerMenuContainer, "rotate", "reverse");
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
