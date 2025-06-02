const navbarMenu = document.querySelector(".navbar-menu");
const shoppingCart = document.querySelector(".shopping-cart");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#menu-button").onclick = (e) => {
  navbarMenu.classList.toggle("active");
  e.preventDefault();
};
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus;
  e.preventDefault();
};

const menu = document.querySelector("#menu-button");
const sc = document.querySelector("#shopping-cart-button");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

document.querySelector("#continue-button").onclick = (e) => {
  shoppingCart.classList.remove("active");
  e.preventDefault();
  window.location.href = "product.html";
};
