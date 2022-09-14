const btns = document.querySelectorAll(".filter-btn");

function selectBtn(event) {
  const targetBtn = event.path[1];

  localStorage.removeItem("today0");
  localStorage.removeItem("today1");
  localStorage.removeItem("today2");

  btns.forEach((btn) => {
    btn.id = "";
  });
  targetBtn.id = "selected";
  saveFilter(targetBtn);
}

function saveFilter(btn) {
  const filter = btn.querySelector("button").classList[0];
  localStorage.setItem("filter", filter);
}

function getFilter() {
  const savedFilter = localStorage.getItem("filter");
  btns.forEach((btn) => {
    btn.id = "";
    if (btn.querySelector("button").classList[0] == savedFilter) {
      btn.id = "selected";
    }
  });
}

btns.forEach((btn) => {
  btn.addEventListener("click", selectBtn);
});

getFilter();
whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  getFilter();
});
