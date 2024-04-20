const registerForm = document.querySelector(`.login-form`);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  event.preventDefault();

  if (email === "" || password === "") {
    return window.alert("Please complete all fields!");
  }

  console.log(`email: ${email}, password: ${password}`);
  form.reset();
}
