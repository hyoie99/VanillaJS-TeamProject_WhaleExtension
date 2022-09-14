import { createTextCard } from "./createCard.js";
import { getTextCard } from "./getTodayCard.js";
import { addContent } from "./extraContent.js";
import { getExtraCard } from "./getExtraCard.js";
import { textPopup } from "./textPopup.js";
import { saveTodayCard } from "./saveCard.js";

const today = new Date().getDate();
// console.log(today);
// const today = 15;
const whatToday = localStorage.getItem("Date");
// console.log(whatToday);
if (whatToday == null) {
  localStorage.setItem("Date", today);
} else if (today != whatToday) {
  localStorage.setItem("Date", today);
  localStorage.removeItem("today0");
  localStorage.removeItem("today1");
  localStorage.removeItem("today2");
}

const clearBtn = document.querySelector("#clear-btn");
const body = document.querySelector("body");
const searchBar = document.querySelector("#search");

// const bgColor = localStorage.getItem("bgColor");
const whichBG = localStorage.getItem("whichBG");
if (whichBG == null) {
  localStorage.setItem("whichBG", "color");
  localStorage.setItem("bgColor", "#181818");
  body.style.backgroundColor = "#181818";
}
// if (
//   (localStorage.getItem("bgColor") == null) &
//   (localStorage.getItem("bgImg") == null)
// ) {
//   localStorage.setItem("bgColor", "#181818");
// }

if (whichBG == "color") {
  body.style.backgroundColor = localStorage.getItem("bgColor");
} else {
  const imgUrl = localStorage.getItem("bgImg");
  body.style.backgroundImage = `url("${imgUrl}")`;
  body.style.backgroundRepeat = "no repeat";
  body.style.backgroundSize = "cover";
}

if (localStorage.getItem("bgColor") == "#ffffff") {
  searchBar.querySelector("svg path").setAttribute("fill", "green");
  searchBar.style.border = "2px solid black";
  searchBar.querySelector("input").style.color = "black";
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
      if (localStorage.getItem("extraContent") !== null) {
        getExtraCard();
      } else {
        addContent();
      }
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
//   localStorage.removeItem("extraContent");
// });
