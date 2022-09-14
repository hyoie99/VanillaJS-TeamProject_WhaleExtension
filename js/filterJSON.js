if (localStorage.getItem("filter") == null) {
  localStorage.setItem("filter", "encourage");
}

const savedfilter = localStorage.getItem("filter");
const phraseURL = "../json/text.json";
const emojiURL = "../json/emoji.json";
const fontURL = "../json/font.json";
const contentURL = "../json/content.json";
const colorURL = "../json/color.json";

export const filteringPhrase = async () => {
  const phraseJson = await (await fetch(phraseURL)).json();

  let newPhraseJson = [];
  phraseJson.forEach((element) => {
    if (element.filter == savedfilter) {
      newPhraseJson.push(element);
    }
  });
  // console.log(newJson);
  return newPhraseJson;
};

export const filteringEmoji = async () => {
  const emojiJson = await (await fetch(emojiURL)).json();

  let newEmojiJson = [];
  emojiJson.forEach((element) => {
    if (element.filter == savedfilter) {
      newEmojiJson.push(element);
    }
  });

  return newEmojiJson;
};

export const filteringFont = async () => {
  const fontJson = await (await fetch(fontURL)).json();

  let newFontJson = [];
  fontJson.forEach((element) => {
    if (element.filter == savedfilter) {
      newFontJson.push(element);
    }
  });

  return newFontJson;
};

export const filteringContent = async () => {
  const contentJson = await (await fetch(contentURL)).json();

  let newContentJson = [];
  contentJson.forEach((element) => {
    if (element.filter == savedfilter) {
      newContentJson.push(element);
    }
  });

  return newContentJson;
};

export const filteringColor = async () => {
  const colorJson = await (await fetch(colorURL)).json();

  let newColorJson = [];
  colorJson.forEach((element) => {
    if (element.filter == savedfilter) {
      newColorJson.push(element);
    }
  });

  return newColorJson;
};
