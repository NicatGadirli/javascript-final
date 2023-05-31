// Start scroll Effect

let menu = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
});

function openprofileBar() {
  const profileBar = document.querySelector(".profileBar");
  const overlay = document.querySelector(".overlay");
  profileBar.classList.toggle("active");
  overlay.classList.toggle("active");
  overlay.onclick = () => {
    profileBar.classList.remove("active");
    overlay.classList.remove("active");
  };
}
