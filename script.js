let lastScrollY = 0;

window.addEventListener("scroll", function () {
  const navbar = this.document.querySelector(".navbar");

  if (this.window.scrollY > 100) {
    if (lastScrollY > this.window.scrollY) navbar.classList.remove("nav");
    else navbar.classList.add("nav");
  } else {
    navbar.classList.remove("nav");
  }

  lastScrollY = this.window.scrollY;
});
