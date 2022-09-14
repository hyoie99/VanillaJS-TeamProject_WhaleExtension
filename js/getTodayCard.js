const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardNum) {
  const getCard = JSON.parse(localStorage.getItem(cardNum));

  const card = document.createElement("div");
  const cardEmoji = document.createElement("img");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  // const saveBtn = document.createElement("button");
  const saveIcon = document.createElement("img");

  card.setAttribute("id", "today-card");
  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  // saveBtn.setAttribute("id", "save-btn");
  saveIcon.setAttribute("id", "save-btn");
  saveIcon.setAttribute("src", `${getCard.saveIcon}`);

  let saving = JSON.parse(localStorage.getItem("saving"));
  if (saving != null) {
    saving.forEach((element) => {
      if (getCard.text == element.text) {
        saveIcon.setAttribute("src", "../img/icon/bookmark_white_fill.svg");
        // saveIcon.disabled = true;
        // saveIcon.style.pointerEvents = "none";
        // location.reload();
      }
    });
  }

  card.style.backgroundColor = `${getCard.color}`;
  cardEmoji.setAttribute("src", `${getCard.emoji}`);

  cardText.style.fontFamily = `${getCard.font}`;
  cardText.style.fontSize = `${getCard.size}`;
  cardText.innerText = getCard.text;

  cardAuthor.style.fontFamily = `${getCard.font}`;
  cardAuthor.innerText = getCard.author;

  // saveBtn.innerText = "저장하기";

  todayCards.append(card);
  card.append(cardEmoji, cardText, cardAuthor, saveIcon);
}
