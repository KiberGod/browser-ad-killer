// content.js
function checkForAdOverlay() {
    const adOverlay = document.querySelector('.ytp-flyout-cta-body');
    if (adOverlay) {
      location.reload();
    }
  }
  
  // Запустите функцию проверки с заданной периодичностью (например, каждые 3 секунды)
  setInterval(checkForAdOverlay, 3000);
  