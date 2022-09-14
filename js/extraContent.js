import { filteringContent } from "./filterJSON.js";

const contentURL = await filteringContent();
const todayCards = document.querySelector("#today-cards");

function getRandom(extra) {
  const contentJSON = contentURL;
  const contentIndex = Math.floor(Math.random() * contentJSON.length);

  const extraTitle = extra.querySelector("#title");
  const extraImg = extra.querySelector("a img");
  const extraLink = extra.querySelector("a");
  const extraDes = extra.querySelector("#description");

  const selectTitle = contentJSON[contentIndex].title;
  const selectField = contentJSON[contentIndex].field;
  const selectLink = contentJSON[contentIndex].link;

  extraTitle.innerText = "사이드 메뉴";
  extraDes.innerText = selectTitle;
  if (selectField == "playlist") {
    extraImg.setAttribute("src", "../img/icon/playlist.svg");
    extra.style.backgroundColor = "#2E5C51";
  } else if (selectField == "book") {
    extraImg.setAttribute("src", "../img/icon/book.svg");
    extra.style.backgroundColor = "#523279";
  } else if (selectField == "movie") {
    extraImg.setAttribute("src", "../img/icon/movie.svg");
    extra.style.backgroundColor = "#4B62B2";
  }
  extraLink.setAttribute("href", `${selectLink}`);
  extraLink.setAttribute("target", "_blank");

  saveExtraCard(selectTitle, selectField, selectLink);
}

export function addContent() {
  const extra = document.createElement("div");
  const title = document.createElement("p");
  const img = document.createElement("img");
  const a = document.createElement("a");
  const description = document.createElement("p");

  extra.setAttribute("id", "content-card");
  title.setAttribute("id", "title");
  description.setAttribute("id", "description");

  a.append(img);
  extra.append(title, a, description);
  getRandom(extra);

  todayCards.append(extra);
}

function saveExtraCard(title, field, link) {
  const card = { title: title, field: field, link: link };
  localStorage.setItem("extraContent", JSON.stringify(card));
}
