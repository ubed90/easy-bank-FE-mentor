const hamBurger = document.querySelector(".header__content--nav__menu");
const navBar = document.querySelector(".header__content--nav__links");
const navBarLinks = document.querySelectorAll(
  ".header__content--nav__links--item a"
);
const overLay = document.querySelector(".header__content--overlay");
const body = document.querySelector("body");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navBar.classList.toggle("active");
  overLay.classList.toggle("active");
  body.classList.toggle("noscroll");
  navBarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navBar.classList.contains("active")) {
        hamBurger.classList.remove("active");
        navBar.classList.remove("active");
        overLay.classList.remove("active");
        body.classList.remove("noscroll");
      } else {
        return;
      }
    });
  });
});
