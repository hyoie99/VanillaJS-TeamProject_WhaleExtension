const bgColorBtn = document.querySelector("#bg-custom input");

function changeColor(event) {
  const selectColor = event.target.value;
  localStorage.setItem("bgColor", selectColor);
  //   window.location.replace("../html/main.html");
}

bgColorBtn.value = localStorage.getItem("bgColor");
bgColorBtn.addEventListener("change", changeColor);
// console.log(bgColorBtn.value);
