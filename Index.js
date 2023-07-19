const submit = document.querySelector(".submit-btn");
var image = document.querySelector(".img-1");
const message = document.querySelector(".display-message");
const section = document.querySelector(".firstsection");
const input = document.querySelector(".form-control");

var x = window.matchMedia("(max-width: 550px)");

const alert = document.querySelector(".alert");
const form = document.querySelector(".form");
console.log(x);
//resize

window.addEventListener("resize", (event) => {
  if (x.matches) {
    image.src = "./assets/images/illustration-sign-up-mobile.svg";
    image.alt = "desktop";
  } else {
    image.src = "./assets/images/illustration-sign-up-desktop.svg";
  }
});

//checking the password input//
function validate(e) {
  pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$";
  if (!input.value.match(pattern) || input.value === " ") {
    alert.classList.remove("hidden");
    input.classList.add("error-message");
    e.preventDefault();
  } else {
    alert.classList.add("hidden");
  }
}

form.addEventListener("submit", (e) => {
  validate();
});

input.addEventListener("keyup", validate);

submit.addEventListener("click", () => {
  validate();
  section.classList.add("hidden");
  message.classList.remove("hidden");
});
