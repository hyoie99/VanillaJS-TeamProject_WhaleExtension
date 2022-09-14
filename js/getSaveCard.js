const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  cardArray = JSON.parse(cardArray);
  cardArray.forEach((element) => {
    const getCard = element;
    console.log(getCard);

    const card = document.createElement("div");
    const cardEmoji = document.createElement("img");
    const cardText = document.createElement("p");
    const cardAuthor = document.createElement("p");
    // const deleteBtn = document.createElement("button");
    const markIcon = document.createElement("img");

    card.setAttribute("id", "today-card");
    cardEmoji.setAttribute("id", "emoji");
    cardText.setAttribute("id", "text");
    cardAuthor.setAttribute("id", "author");
    // deleteBtn.setAttribute("id", "delete-btn");
    markIcon.setAttribute("id", "mark-icon");

    card.style.backgroundColor = `${getCard.color}`;
    cardEmoji.setAttribute("src", `${getCard.emoji}`);
    markIcon.setAttribute("src", "../img/icon/bookmark_fill.svg");

    cardText.style.fontFamily = `${getCard.font}`;
    cardText.innerText = getCard.text;

    cardAuthor.style.fontFamily = `${getCard.font}`;
    cardAuthor.innerText = getCard.author;

    // deleteBtn.innerText = "삭제하기";

    todayCards.append(card);
    card.append(cardEmoji, cardText, cardAuthor, markIcon);
  });
}
