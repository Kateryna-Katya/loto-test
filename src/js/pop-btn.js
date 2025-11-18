const openBtns = document.querySelectorAll(".openPopupBtn");
const popupWrapper = document.getElementById("popupWrapper");
const closePopup = document.getElementById("closePopup");
const form = document.getElementById("sendForm");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    popupWrapper.style.display = "flex";
  });
});

closePopup.addEventListener("click", () => {
  popupWrapper.style.display = "none";
});

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("popupName").value.trim();
  const email = document.getElementById("popupEmail").value.trim();

  if (!name || !email) return;

  const url = `https://example.com/submit?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  console.log("GET-запит на:", url);

  popupWrapper.style.display = "none";
  form.reset();
});