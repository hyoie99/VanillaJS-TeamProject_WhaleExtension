const bgColorBtn = document.querySelector("#bg-custom input");
const bgImgInput = document.querySelector("#bg-img input");
const bgClearBtn = document.querySelector("#clear-btn");

function changeColor(event) {
  localStorage.removeItem("bgImage");
  const selectColor = event.target.value;
  localStorage.setItem("bgColor", selectColor);
}

function changeImg(event) {
  localStorage.removeItem("bgColor");
  const fileImg = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(fileImg);
  reader.onload = () => {
    localStorage.setItem("bgImg", reader.result);
  };
}

bgColorBtn.value = localStorage.getItem("bgColor");
bgColorBtn.addEventListener("change", changeColor);
bgImgInput.addEventListener("change", changeImg);
bgClearBtn.addEventListener("click", function () {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("bgImg");
});
