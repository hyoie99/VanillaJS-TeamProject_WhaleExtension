export function deleteCard(event) {
  let newArray = [];
  const deleteTarget = event.path[1];
  const deleteText = deleteTarget.querySelector("#text").innerText;

  const savingArray = JSON.parse(localStorage.getItem("saving"));
  savingArray.forEach((element) => {
    if (deleteText !== element.text) {
      newArray.push(element);
    }
  });
  localStorage.setItem("saving", JSON.stringify(newArray));
  window.location.reload();
}
