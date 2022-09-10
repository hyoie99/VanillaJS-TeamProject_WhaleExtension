import { createTextCard } from "./createCard.js";
import { getTextCard } from "./getTodayCard.js";
import { addContent } from "./extraContent.js";
import { saveCard } from "./saveCard.js";

if (localStorage.getItem("bgColor") == null) {
  localStorage.setItem("bgColor", "#ffffff");
}
if (localStorage.getItem("filter") == null) {
  localStorage.setItem("filter", "three");
}

// const clearBtn = document.querySelector("#clear-btn");
const body = document.querySelector("body");
const searchBar = document.querySelector("#search");

const bgColor = localStorage.getItem("bgColor");
body.style.backgroundColor = bgColor;
if (bgColor == "#ffffff") {
  searchBar.style.border = "1px solid black";
} else {
  searchBar.style.border = "1px solid white";
}

const today = new Date().getDate();
const whatToday = localStorage.getItem("Date");
if (whatToday == null) {
  localStorage.setItem("Date", today);
} else if (today != whatToday) {
  localStorage.setItem("Date", today);
  localStorage.removeItem("today0");
  localStorage.removeItem("today1");
  localStorage.removeItem("today2");
}

if (localStorage.getItem("today0") !== null) {
  getTextCard("today0");
  if (localStorage.getItem("today1") !== null) {
    getTextCard("today1");
    if (localStorage.getItem("today2") !== null) {
      getTextCard("today2");
      addContent();
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

// clearBtn.addEventListener("click", function () {
//   localStorage.removeItem("today0");
//   localStorage.removeItem("today1");
//   localStorage.removeItem("today2");
// });
