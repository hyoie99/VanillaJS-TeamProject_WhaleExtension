const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  const getCard = JSON.parse(localStorage.getItem(cardArray));

  const card = document.createElement("div");
  const data = document.createElement("div");
  const btns = document.createElement("div");

  const cardEmoji = document.createElement("img");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  // const saveBtn = document.createElement("button");
  // const captureBtn = document.createElement("button");
  const saveIcon = document.createElement("img");
  const downloadIcon = document.createElement("img");

  card.setAttribute("id", "today-card");
  data.setAttribute("id", "data");
  btns.setAttribute("id", "btns");

  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  saveIcon.setAttribute("id", "save-btn");
  downloadIcon.setAttribute("id", "cap-btn");

  data.style.backgroundColor = `${getCard.color}`;
  // cardEmoji.innerText = getCard.emoji;
  cardEmoji.setAttribute("src", `${getCard.emoji}`);
  saveIcon.setAttribute("src", "../img/icon/bookmark.svg");
  downloadIcon.setAttribute("src", "../img/icon/download.svg");

  cardText.style.fontFamily = `${getCard.font}`;
  cardText.style.fontSize = `${getCard.size}`;
  cardText.innerText = getCard.text;

  cardAuthor.style.fontFamily = `${getCard.font}`;
  cardAuthor.innerText = getCard.author;

  // saveBtn.innerText = "저장하기";
  // captureBtn.innerText = "캡쳐하기";

  todayCards.append(card);
  card.append(data, btns);
  // btns.append(saveBtn, captureBtn);
  btns.append(downloadIcon, saveIcon);
  data.append(cardEmoji, cardText, cardAuthor);
}
