// Інтервал, через який відбуваєся повторення пошуку реклами
const SECONDS_INTERVAL = 1;

// Прослуховує виклики з background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "updateTab") {
    setTimestampListener();
  }
});

// Прослуховувач реклами на YouTube
function adDetection() {
  if (window.location.href.includes("watch?v=")) {
    // логування часових міток
    //chrome.runtime.sendMessage({ action: "getTimestamp" }, (response) => { console.log("timestamp: " + response.timestamp); });

    if (document.querySelector('.ytp-ad-player-overlay')) {  // Зараз показують рекламу ?
      //console.log("Зараз показують рекламу")

      chrome.runtime.sendMessage({ action: "getTimestamp" }, (response) => {
        chrome.runtime.sendMessage({ action: "reloadTab", timestamp: response.timestamp });
      });

    } else {
      console.log("Зараз не показують рекламу")
      if (document.querySelector('.playing-mode')) {  // Відео грає?
        //console.log("Відео грає")
        chrome.runtime.sendMessage({ action: "updateTimestamp", seconds: SECONDS_INTERVAL });
      }
    }
  }
}

/* 
* Незалежно від того, чи грає відео, якщо зараз не показують рекламу та є можливість
* підтягнути справжню часову мітку, то треба підтягувати (автокорекція часової мітки)
*/
function setTimestampListener() {
  const targetElement = document.querySelectorAll('span.ytp-time-current')[0];

  const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        const addedNode = mutation.addedNodes[0];
        if (addedNode.nodeType === Node.TEXT_NODE) {
          if (!document.querySelector('.ytp-ad-player-overlay')) {  // Зараз не показують рекламу ?
            chrome.runtime.sendMessage({ action: "setTimestamp", newTimestamp: addedNode.textContent });
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  // Встановлення слухача зміни часової мітки
  observer.observe(targetElement, { childList: true, subtree: true });
}

// Встановлення слухача реклами
setInterval(() => {
  adDetection();
}, 1000*SECONDS_INTERVAL);