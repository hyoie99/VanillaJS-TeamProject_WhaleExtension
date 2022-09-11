const main = document.querySelector("#main");
const form = document.querySelector("form");
const todayCards = document.querySelector("#today-cards");
const popCard = document.querySelector("#pop-card");

export function textPopup(event) {
  const text = event.path[0].innerText;
  const p = popCard.querySelector("p");
  main.classList = "popup-wrap";
  form.style.visibility = "hidden";
  todayCards.style.opacity = 0.3;
  p.innerText = text;
}
