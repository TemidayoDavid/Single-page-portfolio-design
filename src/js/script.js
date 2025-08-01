document.getElementById("myForm").addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("email-error");
  const cautionError = document.getElementById("symbol-error");


  if (!emailInput.validity.valid) {
    event.preventDefault();

    if (emailInput.validity.valueMissing) {
      errorMessage.textContent = "Email is required.";
      errorMessage.classList.add("active");
      cautionError.classList.add('active');
    } else if (emailInput.validity.typeMismatch) {
      event.preventDefault();
      errorMessage.textContent = "Sorry, invalid format here.";
      errorMessage.classList.add("active");
      cautionError.classList.add('active');
      emailInput.classList.add("invalid");
    }
  } else {
    errorMessage.style.display = "none";
    errorMessage.classList.remove("active");
    cautionError.classList.remove('active');
    emailInput.classList.remove("invalid");
    
  }
});
