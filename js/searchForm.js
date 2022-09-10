const form = document.querySelector("form");

// function handleSubmit(event) {
//   event.preventDefault();
// }

function searchForm(event) {
  event.preventDefault();
  const keyword = event.target[0].value;
  location.href = `https://search.naver.com/search.naver?query=${keyword}`;
}

// form.addEventListener("submit", handleSubmit);
form.addEventListener("submit", searchForm);
