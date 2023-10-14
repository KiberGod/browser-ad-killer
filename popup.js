document.addEventListener('DOMContentLoaded', function () {
    setVersion();
});

// Друк версії розширення у попапі
function setVersion() {
    document.getElementById('popup-version').textContent = "v." + chrome.runtime.getManifest().version;
}