const todayCards = document.querySelector("#today-cards");

export function getTextCard(cardArray) {
  cardArray = JSON.parse(cardArray);
  cardArray.forEach((element) => {
    const card = document.createElement("div");
    const data = document.createElement("div");
    const btns = document.createElement("div");

    const cardEmoji = document.createElement("img");
    const cardText = document.createElement("p");
    const cardAuthor = document.createElement("p");
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

    data.style.backgroundColor = `${element.color}`;
    cardEmoji.setAttribute("src", `${element.emoji}`);
    saveIcon.setAttribute("src", "../img/icon/bookmark.svg");
    downloadIcon.setAttribute("src", "../img/icon/download.svg");

    cardText.style.fontFamily = `${element.font}`;
    cardText.style.fontSize = `${element.size}`;
    cardText.innerText = element.text;

    cardAuthor.style.fontFamily = `${element.font}`;
    cardAuthor.innerText = element.author;

    // saveBtn.innerText = "저장하기";
    // captureBtn.innerText = "캡쳐하기";

    todayCards.append(card);
    card.append(data, btns);
    // btns.append(saveBtn, captureBtn);
    btns.append(downloadIcon, saveIcon);
    data.append(cardEmoji, cardText, cardAuthor);
  });
}
