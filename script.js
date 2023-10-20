document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-input");
  const successPopup = document.getElementById("success-popup");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    successPopup.classList.remove("hidden");

    window.addEventListener("click", function () {
      successPopup.classList.add("hidden");
      location.reload();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  function validatePassword() {
    if (password.value === confirmPassword.value) {
      password.style.border = "2px solid green";
      password.style.outline = "none";
      confirmPassword.style.border = "2px solid green";
      confirmPassword.style.outline = "none";
    } else {
      password.style.border = "2px solid red";
      password.style.outline = "";
      confirmPassword.style.border = "2px solid red";
      confirmPassword.style.outline = "";
    }
  }

  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validatePassword);
});

document.addEventListener("DOMContentLoaded", function () {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const phoneNumber = document.getElementById("phone-number");
  const submitButton = document.querySelector('input[type="submit"]');

  function validateForm() {
    let passwordsMatch = password.value === confirmPassword.value;
    let allFieldsFilled =
      firstName.value &&
      lastName.value &&
      email.value &&
      phoneNumber.value &&
      password.value &&
      confirmPassword.value;

    if (passwordsMatch && allFieldsFilled) {
      submitButton.disabled = false;
      submitButton.value = "Submit";
    } else {
      submitButton.disabled = true;
      submitButton.value = "Fill the form in order to submit";
    }
  }

  [password, confirmPassword, firstName, lastName, email, phoneNumber].forEach(
    (input) => {
      input.addEventListener("input", validateForm);
    }
  );

  validateForm();
});
