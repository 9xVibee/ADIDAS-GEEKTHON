Shery.textAnimate(".navbar .header-black-section" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

let lastScrollY = 0;

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");

  if (this.window.scrollY > 100) {
    if (lastScrollY > this.window.scrollY)
      navbar.classList.remove("nav-display");
    else navbar.classList.add("nav-display");
  } else {
    navbar.classList.remove("nav-display");
  }

  lastScrollY = this.window.scrollY;
});

// gsap
// Menu sidebar Hiding and showing
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", function () {
  gsap.to(".sidebar", {
    x: "0%",
  });
});

const closeBtn = document.querySelector(".close-logo");
closeBtn.addEventListener("click", function () {
  gsap.to(".sidebar", {
    x: "-100%",
  });
});

// Search sidebar
const searchIconBtn = document.querySelector(".search-btn-sidebar");
const searchSidebar = document.querySelector(".search-sidebar");
const closeSearchSidebar = document.querySelector(".close-search-sidebar");

searchIconBtn.addEventListener("click", function () {
  gsap.to(".search-sidebar", {
    x: "0%",
  });
});

closeSearchSidebar.addEventListener("click", function () {
  gsap.to(".search-sidebar", {
    x: "100%",
  });
});

const searchSidebarInput = document.getElementById("searchSidebarInput");

// Add an event listener for the input event
const clearContent = document.querySelector(".clear-content");
searchSidebarInput.addEventListener("input", function () {
  var inputValue = searchSidebarInput.value;
  if (inputValue.length > 0) clearContent.style.display = "block";
});

clearContent.addEventListener("click", function () {
  searchSidebarInput.value = "";
  clearContent.style.display = "none";
});

// Sign up
const signupBtn = document.getElementById("signup-btn");
signupBtn.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.remove("display");
  console.log("clicked");
});

const closebtnSignup = document.getElementById("close-btn-signup");
closebtnSignup.addEventListener("click", function () {
  const signupDisplay = document.getElementById("signup-display");
  signupDisplay.classList.add("display");
});

// Shery Js
Shery.makeMagnet(".menu-bar", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
