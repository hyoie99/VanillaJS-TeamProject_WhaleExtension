import { getTextCard } from "./getTodayCard.js";
import { saveCard } from "./saveCard.js";

function openSidebar() {
  if (localStorage.getItem("today0") !== null) {
    getTextCard("today0");
    if (localStorage.getItem("today1") !== null) {
      getTextCard("today1");
      if (localStorage.getItem("today2") !== null) {
        getTextCard("today2");
      }
    }
  }
}

openSidebar();
whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  openSidebar();
});

const saveBtn = document.querySelectorAll("#save-btn");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", saveCard);
});
