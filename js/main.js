const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

  // ubah hamburger jadi silang
  menuToggle.classList.toggle("active");

});
