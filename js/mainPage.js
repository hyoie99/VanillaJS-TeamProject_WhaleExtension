import { createTextCard } from "./createCard.js";
import { getTextCard } from "./getTodayCard.js";
import { addContent } from "./extraContent.js";
import { textPopup } from "./textPopup.js";
import { saveTodayCard } from "./saveCard.js";

const today = new Date().getDate();
// const today = 15;
const whatToday = localStorage.getItem("Date");
if (whatToday == null) {
  localStorage.setItem("Date", today);
} else if (today != whatToday) {
  localStorage.setItem("Date", today);
  localStorage.removeItem("today0");
  localStorage.removeItem("today1");
  localStorage.removeItem("today2");
}

if (
  (localStorage.getItem("bgColor") == null) &
  (localStorage.getItem("bgImg") == null)
) {
  localStorage.setItem("bgColor", "#ffffff");
}

// const clearBtn = document.querySelector("#clear-btn");
const body = document.querySelector("body");
const searchBar = document.querySelector("#search");

const bgColor = localStorage.getItem("bgColor");
if (bgColor !== null) {
  body.style.backgroundColor = bgColor;
} else {
  const imgUrl = localStorage.getItem("bgImg");
  body.style.backgroundImage = `url("${imgUrl}")`;
  body.style.backgroundRepeat = "no repeat";
  body.style.backgroundSize = "cover";
}
if (bgColor == "#ffffff") {
  searchBar.style.border = "1px solid black";
} else {
  searchBar.style.border = "1px solid white";
}

// const today = new Date().getDate();
// const whatToday = localStorage.getItem("Date");
// if (whatToday == null) {
//   localStorage.setItem("Date", today);
// } else if (today != whatToday) {
//   localStorage.setItem("Date", today);
//   localStorage.removeItem("today0");
//   localStorage.removeItem("today1");
//   localStorage.removeItem("today2");
// }

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

const main = document.querySelector("#main");
const form = document.querySelector("form");
const todayCards = document.querySelector("#today-cards");
const text = document.querySelectorAll("#text");
const popCard = document.querySelector("#pop-card");
text.forEach((text) => {
  text.addEventListener("click", function () {
    textPopup(event);
    popCard.style.display = "block";
  });
});

const saveBtn = document.querySelectorAll("#save-btn");
saveBtn.forEach((btn) => {
  btn.addEventListener("click", saveTodayCard);
});
const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", function () {
  main.classList = "";
  form.style.visibility = "visible";
  todayCards.style.opacity = "1";
  popCard.style.display = "none";
});
// clearBtn.addEventListener("click", function () {
//   localStorage.removeItem("today0");
//   localStorage.removeItem("today1");
//   localStorage.removeItem("today2");
// });
