//* Scroll Effect

let menu = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
});

//* Scroll Effect

// *Typing

window.addEventListener("load", () => {
  const text = "NICAT GADIRLI";
  let i = 0;

  const typing = () => {
    if (i < text.length) {
      document.querySelector(".name").innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, 200);
    } else {
      i = 0;
      document.querySelector(".name").innerHTML = "";
      setTimeout(typing, 3000);
    }
  };

  typing();
});

// *Typing

//* profile menu open

let photobtn = document.querySelector("#photo_btn");
let profileBar = document.querySelector(".profileBar");

photobtn.addEventListener("click", function () {
  profileBar.classList.toggle("active");
});

//* account menu open

let accountBtn = document.querySelector("#account_btn");

let menu2 = document.querySelector(".profileItemDropDown");

accountBtn.addEventListener("click", function () {
  menu2.classList.toggle("active");

  if (menu2.classList.contains("active")) {
    let arrow = document.querySelector("#arrow").classList.add("arrow_down");
  } else {
    let arrow = document.querySelector("#arrow").classList.remove("arrow_down");
  }
});

//* close menu when click some where

document.addEventListener("click", function (event) {
  if (!profileBar.contains(event.target) && !photobtn.contains(event.target)) {
    profileBar.classList.remove("active");
  }
});

// *Profile bar unlock code

// *Swiper Code

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// *Swiper Code

// *Tabs Code
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// *Tabs Code
// *Card Code

var cards = [
  {
    photo: "./assets/img/slider images/Screenshot (4).png",
    name: "DESIGN",
    text: "This is a template page that I made. This is a design page.",
  },
  {
    photo: "./assets/img/slider images/Screenshot (5).png",
    name: "DEVELOPMENT",
    text: "This is a template Movie page I made.",
  },
  {
    photo: "./assets/img/slider images/Screenshot (3).png",
    name: "EXAMPLE",
    text: "This is a template portfolio page that I made.",
  },
];

var cardContainer = document.getElementById("cardContainer");

for (var i = 0; i < cards.length; i++) {
  var card = cards[i];

  var cardHTML =
    '<div class="card">' +
    '<img src="' +
    card.photo +
    '">' +
    "<h3>" +
    card.name +
    "</h3>" +
    "<p>" +
    card.text +
    "</p>" +
    "</div>";

  cardContainer.innerHTML += cardHTML;
}

// *Card Code

// *Form Code
const registrationForm = document.querySelector("#registration-form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const surnameInput = document.querySelector("#surname");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const nameError = document.querySelector("#name-error");
  const surnameError = document.querySelector("#surname-error");
  const emailError = document.querySelector("#email-error");
  const passwordError = document.querySelector("#password-error");

  const nameValue = nameInput.value.trim();
  const surnameValue = surnameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (nameValue === "") {
    nameError.innerText = "Ad yazılmalıdır";
    nameInput.style = "border-color: red;";
  } else {
    nameError.innerText = "";
  }
  if (surnameValue === "") {
    surnameError.innerText = "Soyad yazılmalıdır";
    surnameError.style.color = "red";
  } else {
    surnameError.innerText = "";
  }
  if (emailValue === "") {
    emailError.innerText = "Email yazılmalıdır";
    emailError.style.color = "red";
  } else {
    emailError.innerText = "";
  }
  if (passwordValue === "") {
    passwordError.innerText = "Şifrə yazılmalıdır";
    password.style.color = "red";
  } else {
    passwordError.innerText = "";
  }

  if (
    nameValue !== "" &&
    surnameValue !== "" &&
    emailValue !== "" &&
    passwordValue !== ""
  ) {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
      button: "Aww yiss!",
    }).then(() => {
      registrationForm.submit();
    });
  }
});
// *Form Code
