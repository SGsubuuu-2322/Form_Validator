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

function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
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

  if (email.value === "") {
    showErrorMsg(email, "Email is required....");
  } else if (!isValidEmail(email.value)) {
    showErrorMsg(email, "Your email isn't valid...");
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showErrorMsg(password, "password is required....");
  } else {
    showSuccess(password);
  }

  if (cnfrmPassword.value === "") {
    showErrorMsg(cnfrmPassword, "Confirm Password is required....");
  } else {
    showSuccess(cnfrmPassword);
  }
});
