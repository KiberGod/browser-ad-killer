// Прослуховувач реклами на YouTube
function adDetection(tabId) {
  console.log(`Tab ID: ${tabId}`);

  chrome.runtime.sendMessage({ action: "getTimestamp" }, (response) => {
    console.log("timestamp: " + response.timestamp);
  });
}

// Встановлення слухача реклами
setInterval(() => {
  chrome.runtime.sendMessage({ action: "getCurrentTabId" }, (response) => {
    const tabId = response.tabId;
    adDetection(tabId);
  });
}, 3000);
