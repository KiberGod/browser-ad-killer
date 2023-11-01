// Інтервал, через який відбуваєся повторення пошуку реклами
const SECONDS_INTERVAL = 0.5;

// Приховання блоку реклами, що розташований серед списку відеороликів (праворуч)
function hideAdInVideoList() {
  document.querySelectorAll("ytd-ad-slot-renderer").forEach((adSlot) => {
    adSlot.remove();
  });
}

// Приховання блоку реклами (той що картинка, праворуч)
function hideRightAdBanner() {
  const adBanner = document.getElementById("player-ads");
  if (adBanner) {
    adBanner.remove(); 
  }
}

// Прослуховувач реклами на YouTube
function adDetection() {
  if (window.location.href.includes("watch?v=")) {
    hideAdInVideoList();
    if(document.querySelector('.ytp-ad-player-overlay')) {  // Зараз показують рекламу ?
      //console.log("Зараз показують рекламу")
      const skipButton = document.querySelector("button.ytp-ad-skip-button");

      if (skipButton) {
        skipButton.click();
      } else {
        var video = document.querySelectorAll("video.video-stream.html5-main-video")[0];
        video.currentTime = video.duration;
      }
      hideRightAdBanner();
    }
  }
}

// Встановлення слухача реклами
setInterval(() => {
  adDetection();
}, 1000*SECONDS_INTERVAL);