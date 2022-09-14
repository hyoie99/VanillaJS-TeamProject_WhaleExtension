const todayCards = document.querySelector("#today-cards");

export function getExtraCard() {
  const getExtra = JSON.parse(localStorage.getItem("extraContent"));

  const extra = document.createElement("div");
  const title = document.createElement("a");

  extra.setAttribute("id", "content-card");
  title.setAttribute("id", "title");
  title.setAttribute("href", `${getExtra.link}`);
  title.setAttribute("target", "_blank");

  title.innerText = getExtra.title;
  extra.append(title);

  todayCards.append(extra);
}
