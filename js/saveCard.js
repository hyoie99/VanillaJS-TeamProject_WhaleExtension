// let id = 0;

export function saveCard(event) {
  const saveTarget = event.path[1];

  const saveEmoji = saveTarget.querySelector("#emoji").innerText;
  const saveText = saveTarget.querySelector("#text").innerText;
  const saveAuthor = saveTarget.querySelector("#author").innerText;

  // let isSave = false;
  const saveCard = {
    emoji: saveEmoji,
    text: saveText,
    author: saveAuthor,
  };

  //   while (isSave == false) {
  //     if (localStorage.getItem(`save${id}`) == null) {
  //       localStorage.setItem(`save${id}`, JSON.stringify(saveCard));
  //       isSave = true;
  //     } else {
  //       id += 1;
  //     }
  //   }

  let isSaving = false;
  let saving = localStorage.getItem("saving");
  // console.log(saving);
  if (saving == null) {
    alert("저장되었습니다.");
    localStorage.setItem("saving", JSON.stringify([saveCard]));
  } else {
    saving = JSON.parse(saving);
    saving.forEach((element) => {
      if (saveText == element.text) {
        alert("이미 저장되어 있습니다.");
        isSaving = true;
      }
    });
    if (isSaving == false) {
      alert("저장되었습니다.");
      saving.push(saveCard);
      localStorage.setItem("saving", JSON.stringify(saving));
    }
  }
}
