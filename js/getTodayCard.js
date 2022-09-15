const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  cardArray = JSON.parse(cardArray);
  cardArray.forEach((element) => {
    const getCard = element;
    // console.log(getCard);

    const card = document.createElement("div");
    const cardEmoji = document.createElement("img");
    const cardText = document.createElement("p");
    const cardAuthor = document.createElement("p");
    const saveIcon = document.createElement("img");

    card.setAttribute("id", "today-card");
    cardEmoji.setAttribute("id", "emoji");
    cardText.setAttribute("id", "text");
    cardAuthor.setAttribute("id", "author");
    saveIcon.setAttribute("id", "save-btn");
    saveIcon.setAttribute("src", `${getCard.saveIcon}`);

    let saving = JSON.parse(localStorage.getItem("saving"));
    if (saving != null) {
      saving.forEach((element) => {
        if (getCard.text == element.text) {
          saveIcon.setAttribute("src", "../img/icon/bookmark_white_fill.svg");
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

    todayCards.append(card);
    card.append(cardEmoji, cardText, cardAuthor, saveIcon);
  });
}
