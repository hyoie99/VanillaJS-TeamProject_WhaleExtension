import { createTextCard } from "./createCard.js";
import { getTextCard } from "./getTodayCard.js";
import { saveCard } from "./saveCard.js";

const clearBtn = document.querySelector("#clear-btn");

if (localStorage.getItem("today0") !== null) {
  getTextCard("today0");
  if (localStorage.getItem("today1") !== null) {
    getTextCard("today1");
    if (localStorage.getItem("today2") !== null) {
      getTextCard("today2");
    } else {
      createTextCard();
    }
  } else {
    createTextCard();
  }
} else {
  createTextCard();
}

const saveBtn = document.querySelectorAll("#save-btn");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", saveCard);
});

clearBtn.addEventListener("click", function () {
  localStorage.removeItem("today0");
  localStorage.removeItem("today1");
  localStorage.removeItem("today2");
});
