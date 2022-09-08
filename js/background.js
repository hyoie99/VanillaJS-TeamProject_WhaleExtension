chrome.runtime.onInstalled.addListener(async () => {
  let url = chrome.runtime.getURL("../html/main.html");
  chrome.tabs.create({ url });
});

// chrome.tabs.onCreated.addListener(async () => {
//   let url = chrome.runtime.getURL("../html/main.html");
//   let tab = await chrome.tabs.create({ url });
//   console.log(`Created tab ${tab.id}`);
// });

// chrome.tabs.onCreated.addListener(function () {});
