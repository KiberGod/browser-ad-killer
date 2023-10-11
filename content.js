// Прослуховувач реклами на YouTube
function adDetection() {
  chrome.runtime.sendMessage({ action: "getTimestamp" }, (response) => {
    console.log("timestamp: " + response.timestamp);
  });

  if (document.querySelector('.ytp-ad-player-overlay')) {  // Зараз показують рекламу ?
    console.log("Зараз показують рекламу")
  } else {
    console.log("Зараз не показують рекламу")
    if (document.querySelector('.playing-mode')) {  // Відео грає?
      console.log("Відео грає")
      chrome.runtime.sendMessage({ action: "updateTimestamp", seconds: 3 });
    } else {
      console.log("Відео на паузі")
    }
  }
}

// Встановлення слухача реклами
setInterval(() => {
  adDetection();
}, 3000);
