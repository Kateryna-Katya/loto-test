document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let status = document.getElementById("statusMessage");

  if (name.value.trim().length < 2) {
    status.textContent = "Введіть коректне ім’я";
    status.style.color = "#ff6b6b";
    status.style.opacity = 1;
    return;
  }

  if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.value)) {
    status.textContent = "Некоректний email";
    status.style.color = "#ff6b6b";
    status.style.opacity = 1;
    return;
  }

  if (message.value.trim().length < 5) {
    status.textContent = "Повідомлення закоротке";
    status.style.color = "#ff6b6b";
    status.style.opacity = 1;
    return;
  }

  const params = new URLSearchParams({
    name: name.value,
    email: email.value,
    message: message.value,
  }).toString();

  console.log("GET request → ?", params);


  status.textContent = "Успішно відправлено!";
  status.style.color = "#38d87f";
  status.style.opacity = 1;


  name.value = "";
  email.value = "";
  message.value = "";


  setTimeout(() => {
    status.style.opacity = 0;
  }, 5000);
});