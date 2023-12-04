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
