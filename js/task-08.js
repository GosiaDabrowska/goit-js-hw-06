const registerForm = document.querySelector(`.login-form`);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("Alert! Please complete all fields!");
  }

  console.log(`email: ${email}, password: ${password}`);
  form.reset();
}
