import { filteringContent } from "./filterJSON.js";

const contentURL = await filteringContent();
const todayCards = document.querySelector("#today-cards");

function getRandom(extra) {
  const contentJSON = contentURL;
  const contentIndex = Math.floor(Math.random() * contentJSON.length);

  const extraTitle = extra.querySelector("#title");

  const selectTitle = contentJSON[contentIndex].title;
  const selectLink = contentJSON[contentIndex].link;

  extraTitle.innerText = selectTitle;
  extraTitle.setAttribute("href", `${selectLink}`);
  extraTitle.setAttribute("target", "_blank");

  saveExtraCard(selectTitle, selectLink);
}

export function addContent() {
  const extra = document.createElement("div");
  const title = document.createElement("a");

  extra.setAttribute("id", "today-card");
  title.setAttribute("id", "title");

  extra.append(title);
  getRandom(extra);

  todayCards.append(extra);
}

function saveExtraCard(title, link) {
  const card = { title: title, link: link };
  localStorage.setItem("extraContent", JSON.stringify(card));
}
