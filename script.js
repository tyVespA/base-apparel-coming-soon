const email = document.getElementById("email");
const form = document.querySelector(".email-form");
const errorIcon = document.querySelector(".error-icon");
const errorMsg = document.querySelector(".error");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (e) => {
   if (!(email.value.match(mailFormat))) {
      errorIcon.classList.remove("error-display")
      errorMsg.classList.remove("error-display")
      e.preventDefault()
   }
})
