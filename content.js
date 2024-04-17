// Інтервал, через який відбуваєся повторення пошуку реклами
const SECONDS_INTERVAL = 0.5;

// Приховання блоків статичної реклами по всьому YouTube
function hideStaticAd() {
  document.querySelectorAll("ytd-ad-slot-renderer").forEach((adSlot) => {
    adSlot.remove();
  });
}

// Приховання блоку реклами (той що картинка, праворуч)
function hideRightAdBanner(id) {
  const adBanner = document.getElementById(id);
  if (adBanner) {
    adBanner.remove();
  }
}

// Прослуховувач реклами на YouTube
function adDetection() {
  hideStaticAd();
  if(document.querySelector('.ytp-ad-player-overlay') || document.querySelector('.ytp-ad-player-overlay-layout')) {  // Зараз показують рекламу ?
    //console.log("Зараз показують рекламу")
    const skipButton = document.querySelector("button.ytp-ad-skip-button");
    const skipButton2 = document.querySelector("button.ytp-skip-ad-button");
    const skipButtonModern = document.querySelector("button.ytp-ad-skip-button-modern")

    if (skipButtonModern) {
      skipButtonModern.click();
    } else if (skipButton) {
      skipButton.click();
    } else if (skipButton2) {
      skipButton2.click();
    } else {
      var video = document.querySelectorAll("video.video-stream.html5-main-video")[0];
      video.currentTime = video.duration;
    }
  } 
  hideRightAdBanner("player-ads");
  hideRightAdBanner("panels");
}

// Встановлення слухача реклами
setInterval(() => {
  adDetection();
}, 1000*SECONDS_INTERVAL);