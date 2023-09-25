const goBackButton = document.querySelector("#backToTop");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const header = document.querySelector("header");
const modalButton = document.querySelector("#modalBtn");
const overlay = document.querySelector(".overlay");
const xButton = document.querySelector(".x-btn");

//triger for scroll func
window.onscroll = function () {
  scrollFunction();
};

// code from 3W School about scrolling, for two browsers
function scrollFunction() {
  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
    ? (goBackButton.style.display = "block")
    : (goBackButton.style.display = "none");

  /*  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    goBackButton.style.display = "block";
  } else {
    goBackButton.style.display = "none";
  } */
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? header.classList.add("bg")
    : header.classList.remove("bg");

  /*   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg"); // class created in JS - we add it or remove it. properties are set in CSS
  } else {
    header.classList.remove("bg");
  } */
}
const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener("click", mobMenu);
  }
  // class created in JS
  /*   if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  } */

  /* ternary operator */
  nav.classList.contains("responsive")
    ? nav.classList.remove("responsive")
    : nav.classList.add("responsive");
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; /* for 2nd broser */
};

const openModal = () => {
  overlay.classList.toggle("visible");
};

/* const openModal = () => {
  overlay.style.display = "block";
};
const closeModal = () => {
  overlay.style.display = "none";
};
 */
goBackButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
modalButton.addEventListener("click", openModal);
xButton.addEventListener("click", openModal);
