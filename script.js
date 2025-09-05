const navbar = document.getElementById("navbar");
const fonticons = document.getElementById("mobile-font-icons");
const image = document.getElementById("image-change");
const closeIcon = document.getElementById("close-sidebar-button");
function openSidebar() {
  navbar.classList.add("show");
  fonticons.classList.add("hide");
  image.classList.add("image-index");
  closeIcon.classList.add("show");
}

function closeSidebar() {
  navbar.classList.remove("show");
  fonticons.classList.remove("hide");
  image.classList.remove("image-index");
  closeIcon.classList.add("cross-btn");
}
