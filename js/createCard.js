import { filteringPhrase } from "./filterJSON.js";
import { filteringEmoji } from "./filterJSON.js";
import { filteringFont } from "./filterJSON.js";
import { filteringColor } from "./filterJSON.js";

const phraseURL = await filteringPhrase();
const emojiURL = await filteringEmoji();
const fontURL = await filteringFont();
const colorURL = await filteringColor();

const todayCards = document.querySelector("#today-cards");
let id = 0;

function getRandom(card) {
  const phraseJSON = phraseURL;
  const emojiJSON = emojiURL;
  const fontJSON = fontURL;
  const colorJSON = colorURL;

  const phraseIndex = Math.floor(Math.random() * phraseJSON.length);
  const emojiIndex = Math.floor(Math.random() * emojiJSON.length);
  const fontIndex = Math.floor(Math.random() * fontJSON.length);
  const colorIndex = Math.floor(Math.random() * colorJSON.length);

  const cardEmoji = card.querySelector("#emoji");
  const cardText = card.querySelector("#text");
  const cardAuthor = card.querySelector("#author");

  const selectEmoji = emojiJSON[emojiIndex].emoji;
  const selectFont = fontJSON[fontIndex].fontFamily;
  // const selectFont = getRandomFont();
  const selectText = phraseJSON[phraseIndex].text;
  const selectAuthor = phraseJSON[phraseIndex].source;
  const selectColor = colorJSON[colorIndex].color;

  card.style.backgroundColor = `${selectColor}`;
  cardEmoji.setAttribute("src", `${selectEmoji}`);

  cardText.style.fontFamily = `${selectFont}`;
  cardText.innerText = selectText;

  cardAuthor.style.fontFamily = `${selectFont}`;
  cardAuthor.innerText = selectAuthor;

  saveNewCard(selectEmoji, selectText, selectAuthor, selectFont, selectColor);
}

export function createTextCard() {
  const card = document.createElement("div");
  const cardEmoji = document.createElement("img");
  const cardText = document.createElement("p");
  const cardAuthor = document.createElement("p");
  const saveBtn = document.createElement("button");

  card.setAttribute("id", "today-card");
  cardEmoji.setAttribute("id", "emoji");
  cardText.setAttribute("id", "text");
  cardAuthor.setAttribute("id", "author");
  saveBtn.setAttribute("id", "save-btn");

  todayCards.append(card);
  card.append(cardEmoji, cardText, cardAuthor, saveBtn);

  getRandom(card);
  saveBtn.innerText = "저장하기";
}

function saveNewCard(emoji, text, author, font, color) {
  let isDone = false;
  const card = {
    emoji: emoji,
    text: text,
    author: author,
    font: font,
    color: color,
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
