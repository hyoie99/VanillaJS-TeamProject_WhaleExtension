const savedfilter = localStorage.getItem("filter");
const phraseURL = "../json/text.json";

export const filtering = async () => {
  const json = await (await fetch(phraseURL)).json();
  let newJson = [];
  json.forEach((element) => {
    if (element.filter == savedfilter) {
      newJson.push(element);
    }
  });
  return newJson;
};
