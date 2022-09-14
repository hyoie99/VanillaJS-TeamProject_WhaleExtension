const main = document.querySelector("#main");
const form = document.querySelector("form");
const todayCards = document.querySelector("#today-cards");
const popCard = document.querySelector("#pop-card");

export function textPopup(event) {
  const card = event.path[1];
  const emoji = card.querySelector("#emoji").src;
  const text = card.querySelector("#text").innerText;
  const font = card.querySelector("#text").style.fontFamily;
  const author = card.querySelector("#author").innerText;

  popCard.querySelector("img").setAttribute("src", `${emoji}`);
  popCard.querySelector("h5").innerText = text;
  popCard.querySelector("h5").style.fontFamily = font;
  popCard.querySelector("p").innerText = author;
  popCard.querySelector("p").style.fontFamily = font;

  main.classList = "popup-wrap";
  form.style.visibility = "hidden";
  todayCards.style.opacity = 0.3;
  // p.innerText = text;
}
