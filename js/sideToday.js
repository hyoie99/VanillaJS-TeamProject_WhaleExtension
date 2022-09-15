import { getTextCard } from "./getSideCard.js";
import { saveSideCard } from "./saveCard.js";
import { captureCard } from "./captureCard.js";

function openSidebar() {
  if (localStorage.getItem("todayCard") != null) {
    getTextCard(localStorage.getItem("todayCard"));
  }
}

openSidebar();
whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  openSidebar();
});

const saveBtn = document.querySelectorAll("#save-btn");
const captureBtn = document.querySelectorAll("#cap-btn");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", saveSideCard);
});
captureBtn.forEach((btn) => {
  btn.addEventListener("click", captureCard);
});
