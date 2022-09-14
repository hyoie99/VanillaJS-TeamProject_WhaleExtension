const todayCards = document.querySelector("#today-cards");

export function getExtraCard() {
  const getExtra = JSON.parse(localStorage.getItem("extraContent"));

  const extra = document.createElement("div");
  const title = document.createElement("p");
  const img = document.createElement("img");
  const a = document.createElement("a");
  const description = document.createElement("p");

  extra.setAttribute("id", "content-card");
  title.setAttribute("id", "title");
  description.setAttribute("id", "description");

  title.innerText = "사이드 메뉴";
  description.innerText = getExtra.title;
  if (getExtra.field == "playlist") {
    img.setAttribute("src", "../img/icon/playlist.svg");
    extra.style.backgroundColor = "#2E5C51";
  } else if (getExtra.field == "book") {
    img.setAttribute("src", "../img/icon/book.svg");
    extra.style.backgroundColor = "#523279";
  } else if (getExtra.field == "movie") {
    img.setAttribute("src", "../img/icon/movie.svg");
    extra.style.backgroundColor = "#4B62B2";
  }

  a.setAttribute("href", `${getExtra.link}`);
  a.setAttribute("target", "_blank");

  a.append(img);
  extra.append(title, a, description);

  todayCards.append(extra);
}
