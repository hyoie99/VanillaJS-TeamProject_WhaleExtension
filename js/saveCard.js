export function saveTodayCard(event) {
  const saveTarget = event.path[1];

  const saveEmoji = saveTarget.querySelector("#emoji").src;
  const saveText = saveTarget.querySelector("#text").innerText;
  const saveAuthor = saveTarget.querySelector("#author").innerText;
  const saveFont = saveTarget.querySelector("#text").style.fontFamily;
  const saveColor = saveTarget.style.backgroundColor;

  const saveCard = {
    emoji: saveEmoji,
    text: saveText,
    author: saveAuthor,
    font: saveFont,
    color: saveColor,
  };

  let isSaving = false;
  let saving = localStorage.getItem("saving");
  if (saving == null) {
    // alert("저장되었습니다.");
    localStorage.setItem("saving", JSON.stringify([saveCard]));
    saveTarget.querySelector("#save-btn").src =
      "../img/icon/bookmark_white_fill.svg";
    // saveTarget.querySelector("#save-btn").style.pointerEvents = "none";
  } else {
    saving = JSON.parse(saving);
    saving.forEach((element) => {
      if (saveText == element.text) {
        // alert("이미 저장되어 있습니다.");
        // saveTarget.querySelector("#save-btn").src =
        //   "../img/icon/bookmark_white.svg";
        isSaving = true;
      }
    });
    if (isSaving == false) {
      // alert("저장되었습니다.");
      saving.push(saveCard);
      localStorage.setItem("saving", JSON.stringify(saving));
      saveTarget.querySelector("#save-btn").src =
        "../img/icon/bookmark_white_fill.svg";
    }
  }
}

export function saveSideCard(event) {
  const saveTarget = event.path[1].previousSibling;
  // const saveTarget = event.path[1];

  const saveEmoji = saveTarget.querySelector("#emoji").src;
  const saveText = saveTarget.querySelector("#text").innerText;
  const saveAuthor = saveTarget.querySelector("#author").innerText;
  const saveFont = saveTarget.querySelector("#text").style.fontFamily;
  const saveColor = saveTarget.style.backgroundColor;

  // let isSave = false;
  const saveCard = {
    emoji: saveEmoji,
    text: saveText,
    author: saveAuthor,
    font: saveFont,
    color: saveColor,
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
