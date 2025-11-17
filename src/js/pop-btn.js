const openBtn = document.getElementById("openPopupBtn");
const popupWrapper = document.getElementById("popupWrapper");
const closePopup = document.getElementById("closePopup");
const form = document.getElementById("sendForm");
const responseMessage = document.getElementById("responseMessage");


openBtn.onclick = () => {
  popupWrapper.style.display = "flex";
  responseMessage.textContent = ""; 
};

closePopup.onclick = () => popupWrapper.style.display = "none";


form.addEventListener("submit", function (e) {
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

  
  setTimeout(() => {
    responseMessage.textContent = "";
  }, 5000);
});