const btns = document.querySelectorAll("button");

function selectBtn(event) {
  const selectedBtn = event.target;

  btns.forEach((btn) => {
    btn.classList.remove("selected");
  });
  selectedBtn.classList.add("selected");
  saveFilter(selectedBtn);
}

function saveFilter(element) {
  const filterClass = element.parentNode.classList[1];
  localStorage.setItem("filter", filterClass);
}

function getFilter() {
  const savedFilter = localStorage.getItem("filter");
  btns.forEach((btn) => {
    btn.classList.remove("selected");
    if (btn.parentNode.classList[1] == savedFilter) {
      btn.classList.add("selected");
    }
  });
}

if (localStorage.getItem("filter") == null) {
  localStorage.setItem("filter", "filter-three");
}
getFilter();
whale.sidebarAction.onClicked.addListener(function (result) {
  window.location.reload();
  getFilter();
});

btns.forEach((btn) => {
  btn.addEventListener("click", selectBtn);
});
