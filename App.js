let messageBox = document.querySelector(".js-message");
let btn = document.querySelector(".js-message-btn");
let card = document.querySelector(".js-profile-card");
let closeBtn = document.querySelectorAll(".js-message-close");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  card.classList.add("active");
});

closeBtn.forEach(function (element) {
  console.log(element);
  element.addEventListener("click", function (e) {
    e.preventDefault();
    card.classList.remove("active");
  });
});
