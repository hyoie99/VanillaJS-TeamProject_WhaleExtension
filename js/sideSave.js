import { getTextCard } from "./getSaveCard.js";
import { deleteCard } from "./deleteCard.js";

const cards = document.querySelector("#today-cards");
const savingArray = localStorage.getItem("saving");

whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  // getTextCard(savingArray);
});

if ((savingArray == null) | (savingArray == "[]")) {
  const noSaving = document.createElement("h1");
  noSaving.innerText = "No Saving";
  cards.append(noSaving);
} else {
  getTextCard(savingArray);
  // whale.sidebarAction.onClicked.addListener(function (result) {
  //   window.location.reload();
  //   getTextCard(savingArray);
  // });
}

const deleteBtn = document.querySelectorAll("#delete-btn");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", deleteCard);
});
