const todayCards = document.querySelector("#today-cards");

export function addContent() {
  const card = document.createElement("div");
  const h1 = document.createElement("h1");

  card.setAttribute("id", "today-card");
  h1.innerText = "content";

  todayCards.append(card);
  card.append(h1);
}
