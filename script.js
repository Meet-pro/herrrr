const openBtn = document.querySelector(".open-btn");
const card = document.querySelector(".card");

openBtn.addEventListener("click", () => {
  card.style.display = "block";  // show card
  setTimeout(() => {
    card.classList.add("open");  // flip animation
  }, 100);
});
