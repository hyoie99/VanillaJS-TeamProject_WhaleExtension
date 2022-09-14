const bgColorBtn = document.querySelector("#bg-color input");
const bgColorDiv = document.querySelector("#bg-color");
const colorSVG = document
  .querySelector("#bg-color svg")
  .querySelectorAll("path");
const bgImgInput = document.querySelector("#bg-img input");
const bgImgDiv = document.querySelector("#bg-img");
const bgClearBtn = document.querySelector("#bg-clear img");

if (localStorage.getItem("bgColor") == "#ffffff") {
  const whiteSVG = document.createElement("img");
  whiteSVG.setAttribute("src", "../img/icon/bg-color-white.svg");
  bgColorDiv.querySelector("label").append(whiteSVG);
  console.log(bgColorDiv.querySelector("label"));
  colorSVG.forEach((path) => {
    // console.log(path);
    path.setAttribute("fill", "transparent");
  });
} else if (localStorage.getItem("bgColor") != null) {
  colorSVG.forEach((path) => {
    // console.log(path);
    path.setAttribute("fill", localStorage.getItem("bgColor"));
  });
}

const whichBG = localStorage.getItem("whichBG");
if (whichBG == "color") {
  bgColorDiv.classList = "bg-box selected";
  bgImgDiv.classList = "bg-box";
} else if (whichBG == "image") {
  bgColorDiv.classList = "bg-box";
  bgImgDiv.classList = "bg-box selected";
} else {
  bgColorDiv.classList = "bg-box";
  bgImgDiv.classList = "bg-box";
}

function changeColor(event) {
  localStorage.removeItem("bgImage");

  const selectColor = event.target.value;
  colorSVG.forEach((path) => {
    path.setAttribute("fill", `${selectColor}`);
  });
  localStorage.setItem("bgColor", selectColor);

  localStorage.setItem("whichBG", "color");
}

function changeImg(event) {
  // localStorage.removeItem("bgColor");
  const fileImg = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileImg);
  reader.onload = () => {
    localStorage.setItem("bgImg", reader.result);
  };
  localStorage.setItem("whichBG", "image");

  bgColorDiv.classList = "bg-box";
}

bgColorBtn.value = localStorage.getItem("bgColor");
bgColorBtn.addEventListener("change", changeColor);
bgImgInput.addEventListener("change", changeImg);
bgClearBtn.addEventListener("click", function () {
  console.log("click");
  localStorage.setItem("bgColor", "#181818");
  localStorage.removeItem("bgImg");
  localStorage.removeItem("whichBG");
});
