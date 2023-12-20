function toggleMenu() {
  const menu = document.querySelector(".navigate-list1");
  const menuIcon = document.querySelector(".menu-bar");
  const crossIcon = document.querySelector(".cross");
  crossIcon.classList.remove("inactive");
  crossIcon.classList.add("active");
  menuIcon.classList.add("inactive");
  menu.classList.add("inactive");
}
