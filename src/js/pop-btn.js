const openBtns = document.querySelectorAll(".openPopupBtn");
const popupWrapper = document.getElementById("popupWrapper");
const closePopup = document.getElementById("closePopup");
const form = document.getElementById("sendForm");
const responseMessage = document.getElementById("responseMessage");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    popupWrapper.style.display = "flex";  // показуємо поп-ап
    responseMessage.textContent = "";      // очищаємо повідомлення
  });
});

closePopup.addEventListener("click", () => {
  popupWrapper.style.display = "none";    // ховаємо поп-ап
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) return;

  const url = `https://example.com/submit?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  console.log("GET-запит на:", url);

  responseMessage.textContent = "Успішно відправлено!";
  responseMessage.style.color = "green";

  popupWrapper.style.display = "none";
  form.reset();

  setTimeout(() => { responseMessage.textContent = ""; }, 5000);
});