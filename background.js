chrome.browserAction.setPopup({ popup: "" }); //disable browserAction's popup

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({ url: "options.html" });
});

let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  window.alert("Default background color set to %crandom", `color: ${color}`);
});
