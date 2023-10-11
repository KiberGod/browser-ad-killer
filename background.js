// Прослуховує виклики з content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getCurrentTabId") {
    const currentTabId = sender.tab.id;
    sendResponse({ tabId: currentTabId });
    return true;
  } else if (message.action === "getTimestamp") {
    chrome.storage.local.get(["tabId"]).then((result) => {
      sendResponse({ timestamp: result.tabId });
    });
    return true;
  }
});

// Спрацьовуватиме кожет раз, як користувач оновить вкладинку у межах ютубу
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.includes("watch") && changeInfo.status === "complete" && tab.url) {
    console.log(`Замечено обновление вкладки`);
    console.log(`User navigated to: ${tab.url}`);

    if (tab.url.includes("t=") && tab.url.slice(-1) === 's') {
      console.log(getTimestamp(tab.url));
      chrome.storage.local.set({ tabId: getTimestamp(tab.url) }).then(() => {});
    } else {
      chrome.storage.local.set({ tabId: 0 }).then(() => {});
    }
  }
});

// Отримання часової мітки з параметрів посилання
function getTimestamp(url) {
  const urlSearchParams = new URLSearchParams(url.split('?')[1]);
  return urlSearchParams.get("t").replace(/s$/, '');
}