import { getTextCard } from "./getSaveCard.js";
import { deleteCard } from "./deleteCard.js";

const cards = document.querySelector("#today-cards");
const savingArray = localStorage.getItem("saving");

whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  // getTextCard(savingArray);
});

if ((savingArray == null) | (savingArray == "[]")) {
  // const noSaving = document.createElement("h1");
  // noSaving.innerText = "No Saving";
  // cards.append(noSaving);
  const noSavingDiv = document.createElement("div");
  const emoji = document.createElement("img");
  const p = document.createElement("p");

  noSavingDiv.setAttribute("id", "no-saving");
  emoji.setAttribute("src", "../img/emoji/comfort10.png");
  p.innerText = "아직 카드가 없어요.";

  cards.append(noSavingDiv);
  noSavingDiv.append(emoji, p);
} else {
  getTextCard(savingArray);
  // whale.sidebarAction.onClicked.addListener(function (result) {
  //   window.location.reload();
  //   getTextCard(savingArray);
  // });
}

const deleteBtn = document.querySelectorAll("#mark-icon");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", deleteCard);
});
