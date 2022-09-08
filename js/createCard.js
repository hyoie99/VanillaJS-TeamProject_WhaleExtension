const phraseURL = "../json/text.json";
const emojiURL = "../json/emoji.json";

const todayCards = document.querySelector("#today-cards");
let id = 0;

export function createTextCard() {
  const card = document.createElement("div");
  const cardEmoji = document.createElement("p");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const saveBtn = document.createElement("button");

  card.setAttribute("id", "today-card");
  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  saveBtn.setAttribute("id", "save-btn");

  getRandom(card);
  saveBtn.innerText = "저장하기";

  todayCards.append(card);
  card.append(cardEmoji, cardText, cardAuthor, saveBtn);
}

function saveNewCard(cardID, emoji, text, author) {
  let isDone = false;
  const card = {
    id: cardID,
    emoji: emoji,
    text: text,
    author: author,
  };

  //   if (localStorage.getItem("todayCard") == null) {
  //     localStorage.setItem("todayCard", JSON.stringify([card]));
  //   } else {
  //     const parsedArray = JSON.parse(localStorage.getItem("todayCard"));
  //     parsedArray.push(card);
  //     localStorage.setItem("todayCard", JSON.stringify(parsedArray));
  //   }

  while (isDone == false) {
    if (localStorage.getItem(`today${id}`) == null) {
      localStorage.setItem(`today${id}`, JSON.stringify(card));
      isDone = true;
    } else {
      id += 1;
    }
  }
}

const getRandom = async (card) => {
  const phraseJSON = await (await fetch(phraseURL)).json();
  const emojiJSON = await (await fetch(emojiURL)).json();

  const phraseIndex = Math.floor(Math.random() * phraseJSON.length);
  const emojiIndex = Math.floor(Math.random() * emojiJSON.length);

  const cardEmoji = card.querySelector("#emoji");
  const cardText = card.querySelector("#text");
  const cardAuthor = card.querySelector("#author");

  const selectID = phraseJSON[phraseIndex].id;
  const selectEmoji = emojiJSON[emojiIndex].emoji;
  const selectText = phraseJSON[phraseIndex].quote;
  const selectAuthor = phraseJSON[phraseIndex].author;

  cardEmoji.innerText = selectEmoji;
  cardText.innerText = selectText;
  cardAuthor.innerText = selectAuthor;

  saveNewCard(selectID, selectEmoji, selectText, selectAuthor);
};
