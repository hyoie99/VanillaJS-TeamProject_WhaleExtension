if (localStorage.getItem("filter") == null) {
  localStorage.setItem("filter", "encourage");
}

const btns = document.querySelectorAll(".filter-btn");

function selectBtn(event) {
  const targetBtn = event.composedPath(1);
  // const targetImg = targetBtn.querySelector("img");
  const targetImg = targetBtn[0];
  const targetImg2 = targetBtn[0].nextElementSibling;
  // console.log(targetImg);
  // console.log(targetImg2);
  // console.log(targetBtn[1]);

  // localStorage.removeItem("today0");
  // localStorage.removeItem("today1");
  // localStorage.removeItem("today2");
  localStorage.removeItem("todayCard");
  localStorage.removeItem("extraContent");

  btns.forEach((btn) => {
    btn.id = "";
    btn.querySelectorAll("img")[0].classList = "";
    btn.querySelectorAll("img")[1].classList = "hidden";
  });
  targetBtn[1].id = "selected";
  // targetImg.classList.toggle = "hidden";
  targetImg.classList = "hidden";
  targetImg2.classList = "";
  // targetImg[0].classList = "hidden";
  // targetImg[1].classList = "";

  saveFilter(targetBtn);
}

function saveFilter(btn) {
  const filter = btn[1].querySelector("button").classList;
  // const filter = btn[1].classList;
  // console.log(btn[1]);
  localStorage.setItem("filter", filter);
}

function getFilter() {
  const savedFilter = localStorage.getItem("filter");
  btns.forEach((btn) => {
    btn.id = "";
    if (btn.querySelector("button").classList[0] == savedFilter) {
      btn.id = "selected";
      btn.querySelectorAll("img")[0].classList = "hidden";
      btn.querySelectorAll("img")[1].classList = "";
    }
  });
}

btns.forEach((btn) => {
  console.log(btn.querySelector("img"));
  btn.querySelector("img").addEventListener("click", selectBtn);
  // btn.addEventListener("click", selectBtn);
});

getFilter();
whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  getFilter();
});
