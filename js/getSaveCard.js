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
    const deleteBtn = document.createElement("button");

    card.setAttribute("id", "today-card");
    cardEmoji.setAttribute("id", "emoji");
    cardText.setAttribute("id", "text");
    cardAuthor.setAttribute("id", "author");
    deleteBtn.setAttribute("id", "delete-btn");

    // cardEmoji.innerText = getCard.emoji;
    cardEmoji.setAttribute("src", `${getCard.emoji}`);
    cardText.innerText = getCard.text;
    cardAuthor.innerText = getCard.author;
    deleteBtn.innerText = "삭제하기";

    todayCards.append(card);
    card.append(cardEmoji, cardText, cardAuthor, deleteBtn);
  });
}
