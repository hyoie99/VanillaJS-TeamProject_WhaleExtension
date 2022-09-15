import { filteringPhrase } from "./filterJSON.js";
import { filteringEmoji } from "./filterJSON.js";
import { filteringFont } from "./filterJSON.js";
import { filteringColor } from "./filterJSON.js";

const phraseURL = await filteringPhrase();
const emojiURL = await filteringEmoji();
const fontURL = await filteringFont();
const colorURL = await filteringColor();

const todayCards = document.querySelector("#today-cards");

function checkRedulp(selected, element) {
  if (localStorage.getItem("todayCard") !== null) {
    const todayArray = JSON.parse(localStorage.getItem("todayCard"));
    todayArray.forEach((today) => {
      if (selected == today[element]) {
        console.log("중복");
      } else {
        console.log("No 중복");
        return selected;
      }
    });
  }
}

function getRandom(card) {
  let isOKAY = false;

  const phraseJSON = phraseURL;
  const emojiJSON = emojiURL;
  const fontJSON = fontURL;
  const colorJSON = colorURL;

  const phraseIndex = Math.floor(Math.random() * phraseJSON.length);
  const emojiIndex = Math.floor(Math.random() * emojiJSON.length);
  const fontIndex = Math.floor(Math.random() * fontJSON.length);
  const colorIndex = Math.floor(Math.random() * colorJSON.length);

  const selectEmoji = emojiJSON[emojiIndex].emoji;
  const selectFont = fontJSON[fontIndex].fontFamily;
  const selectSize = fontJSON[fontIndex].fontSize;
  const selectText = phraseJSON[phraseIndex].text;
  const selectAuthor = phraseJSON[phraseIndex].source;
  const selectColor = colorJSON[colorIndex].color;

  console.log(checkRedulp(selectText, "text"));

  const cardEmoji = card.querySelector("#emoji");
  const cardText = card.querySelector("#text");
  const cardAuthor = card.querySelector("#author");

  const saveIcon = "../img/icon/bookmark_white.svg";

  card.style.backgroundColor = `${selectColor}`;
  cardEmoji.setAttribute("src", `${selectEmoji}`);

  cardText.style.fontFamily = `${selectFont}`;
  cardText.style.fontSize = `${selectSize}`;
  cardText.innerText = selectText;

  cardAuthor.style.fontFamily = `${selectFont}`;
  // cardAuthor.style.fontSize = `${fontJSON[fontIndex].fontSize}`;
  cardAuthor.innerText = selectAuthor;

  saveNewCard(
    selectEmoji,
    selectText,
    selectAuthor,
    selectFont,
    selectSize,
    selectColor,
    saveIcon
  );
}

export function createTextCard() {
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
  saveIcon.setAttribute("src", "../img/icon/bookmark_white.svg");

  todayCards.append(card);
  card.append(cardEmoji, cardText, cardAuthor, saveIcon);

  getRandom(card);
  // saveBtn.innerText = "저장하기";
}

function saveNewCard(emoji, text, author, font, size, color, saveIcon) {
  let isDone = false;
  const card = {
    emoji: emoji,
    text: text,
    author: author,
    font: font,
    size: size,
    color: color,
    saveIcon: saveIcon,
  };

  if (localStorage.getItem("todayCard") == null) {
    localStorage.setItem("todayCard", JSON.stringify([card]));
  } else {
    const parsedArray = JSON.parse(localStorage.getItem("todayCard"));
    parsedArray.push(card);
    localStorage.setItem("todayCard", JSON.stringify(parsedArray));
  }

  // while (isDone == false) {
  //   if (localStorage.getItem(`today${id}`) == null) {
  //     localStorage.setItem(`today${id}`, JSON.stringify(card));
  //     isDone = true;
  //   } else {
  //     id += 1;
  //   }
  // }
}
