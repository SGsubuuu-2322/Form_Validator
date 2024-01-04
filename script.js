const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfrmPassword = document.getElementById("password2");

function showErrorMsg(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    showErrorMsg(username, "Username is required....");
  } else {
    showSuccess(username);
  }
});
