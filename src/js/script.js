document.getElementById("myForm").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("email-error");
  const cautionErrror = document.getElementById("symbol-error");

  if (!emailInput.validity.valid) {
    event.preventDefault();

    if (emailInput.validity.valueMissing) {
      errorMessage.textContent = "Email is required.";
    } else if (emailInput.validity.typeMismatch) {
      errorMessage.textContent = "Sorry, invalid format here.";
      errorMessage.classList.add("active");
      cautionErrror.classList.add('active');
      emailInput.classList.add("invalid");
    }
  } else {
    errorMessage.style.display = "none";
    errorMessage.classList.remove("active");
    cautionErrror.classList.remove('active');
    emailInput.classList.remove("invalid");
    form.reset();
  }
});
