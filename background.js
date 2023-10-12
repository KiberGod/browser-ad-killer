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
  } else if (message.action === "setTimestamp") {
    setTimestamp(timeToSeconds(message.newTimestamp), sender.tab.id).catch((error) => {
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
    chrome.tabs.sendMessage(tabId, { action: "updateTab" });
  }
});

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

// Заміна часової мітки
function setTimestamp(newTimestamp, tabId) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get({ timestamps: {} }, (result) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        const { timestamps } = result;
        timestamps[tabId] = newTimestamp;
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

// Конвертація числової мітки з рядкового типу у числовий (кількість секунд)
function timeToSeconds(timeString) {
  const timeArray = timeString.split(":");
  let seconds = 0;
  if (timeArray.length === 3) {
    seconds += parseInt(timeArray[0]) * 3600;
  }

  if (timeArray.length >= 2) {
    seconds += parseInt(timeArray[timeArray.length - 2]) * 60;
  }

  seconds += parseInt(timeArray[timeArray.length - 1]);
  return seconds;
}