document.addEventListener('DOMContentLoaded', function () {
    setVersion();
    setLocalText();
});

// Друк версії розширення у попапі
function setVersion() {
    document.getElementById('popup-version').textContent = "v." + chrome.runtime.getManifest().version;
}

function setLocalText() {
    document.getElementById('card-title-1').textContent = chrome.i18n.getMessage('card_title_1');
    document.getElementById('card-title-2').textContent = chrome.i18n.getMessage('card_title_2');
    document.getElementById('card-text-1').textContent = chrome.i18n.getMessage('card_text_1');
    document.getElementById('card-text-2').textContent = chrome.i18n.getMessage('card_text_2');
    document.getElementById('card-text-3').textContent = chrome.i18n.getMessage('card_text_3');
}