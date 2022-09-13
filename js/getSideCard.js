const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  const getCard = JSON.parse(localStorage.getItem(cardArray));

  const card = document.createElement("div");
  const data = document.createElement("div");
  const btns = document.createElement("div");

  const cardEmoji = document.createElement("img");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const saveBtn = document.createElement("button");
  const captureBtn = document.createElement("button");

  card.setAttribute("id", "today-card");
  data.setAttribute("id", "data");
  btns.setAttribute("id", "btns");

  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  saveBtn.setAttribute("id", "save-btn");
  captureBtn.setAttribute("id", "cap-btn");

  // cardEmoji.innerText = getCard.emoji;
  cardEmoji.setAttribute("src", `${getCard.emoji}`);
  cardText.innerText = getCard.text;
  cardAuthor.innerText = getCard.author;
  saveBtn.innerText = "저장하기";
  captureBtn.innerText = "캡쳐하기";

  todayCards.append(card);
  card.append(data, btns);
  btns.append(saveBtn, captureBtn);
  data.append(cardEmoji, cardText, cardAuthor);
}
