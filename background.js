// Прослуховує виклики з content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getCurrentTabId") {
    const currentTabId = sender.tab.id;
    sendResponse({ tabId: currentTabId });
    return true;
  } else if (message.action === "getTimestamp") {
    chrome.storage.local.get(["timestamps"]).then((result) => {
      sendResponse({ timestamp: result.timestamps[sender.tab.id] });
    });
    return true;
  } else if (message.action === "updateTimestamp") {
    updateTimestamp(message.seconds, sender.tab.id).catch((error) => {
      console.error("Error:", error);
    });
    return true;
  }
});

// Спрацьовуватиме кожен раз, як користувач оновить вкладинку у межах ютубу
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.includes("watch") && changeInfo.status === "complete" && tab.url) {
    console.log("Помічено оновлення вкладинки");
    console.log(`Користувач перейшов на: ${tab.url}`);

    chrome.storage.local.get("timestamps", function(result) {
      const timestamps = result.timestamps || {}; // Если объект timestamps еще не существует, создайте пустой объект

      if (tab.url.includes("t=") && tab.url.slice(-1) === 's') {
        timestamps[tabId] = getTimestampFromURL(tab.url);
      } else {
        timestamps[tabId] = 0;
      }

      // Сохраните обновленные временные метки в хранилище
      chrome.storage.local.set({ timestamps }, function() {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
        }
      });
    });
  }
});

// Отримання часової мітки з параметрів посилання
function getTimestampFromURL(url) {
  const urlSearchParams = new URLSearchParams(url.split('?')[1]);
  const timestamp = parseInt(urlSearchParams.get("t").replace(/s$/, ''), 10);
  if (!isNaN(timestamp)) {
    return timestamp;
  } else {
    return 0;
  }
}

// Оновлення часової мітки
function updateTimestamp(seconds, tabId) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get({ timestamps: {} }, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        const { timestamps } = result;
        timestamps[tabId] = (timestamps[tabId] || 0) + seconds;
        chrome.storage.local.set({ timestamps }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(timestamps[tabId]);
          }
        });
      }
    });
  });
}
