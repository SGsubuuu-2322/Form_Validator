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

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showErrorMsg(input, "Email does not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showErrorMsg(input, `${getFieldName(input)} is required.`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showErrorMsg(
      input,
      `${getFieldName(input)} must be atleast ${min} characters...`
    );
  } else if (input.value.length > max) {
    showErrorMsg(
      input,
      `${getFieldName(input)} must be less than ${max} characters...`
    );
  } else {
    showSuccess(input);
  }
}

function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    showErrorMsg(input2, "Passwords aren't equal...");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([username, email, password, cnfrmPassword]);
  checkLength(username, 4, 10);
  checkLength(password, 6, 12);
  checkEmail(email);
  checkPasswords(password, cnfrmPassword);

  //   if (username.value === "") {
  //     showErrorMsg(username, "Username is required....");
  //   } else {
  //     showSuccess(username);
  //   }

  //   if (email.value === "") {
  //     showErrorMsg(email, "Email is required....");
  //   } else if (!isValidEmail(email.value)) {
  //     showErrorMsg(email, "Your email isn't valid...");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showErrorMsg(password, "password is required....");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (cnfrmPassword.value === "") {
  //     showErrorMsg(cnfrmPassword, "Confirm Password is required....");
  //   } else {
  //     showSuccess(cnfrmPassword);
  //   }
});
