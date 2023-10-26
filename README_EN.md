<img src="https://github.com/KiberGod/youtube-ad-killer/blob/main/images/icon128.png" align="left" width="128">
<h1>YouAd Killer</h1>
<span>v.2.2</span>
<br>
<br>
<br>
<h3>General information</h3>

---
YouAd Killer is a browser extension that automatically detects and blocks ads on YouTube.

[The extension page in the Chrome store](https://chrome.google.com/webstore/detail/youad-killer/kdomclcikdoajglommbmgkbilfnannao).

<br>
<h3>Installation and first launch</h3>

---
After installation, it is recommended to completely restart the browser by closing all old tabs. This will guarantee stable
operation of the extension. Otherwise, YouAd Killer may not be able to block ads.
You do not need to repeat these steps later on during use.

<br>
<h3>History of creation</h3>

---
The decision to create this extension was made because of YouTube's innovations. They added an AdBlock detector and require users to disable them.
After 3 warnings, they block the video player until the user complies with their request.

<img src="https://focus.ua/static/storage/thumbs/1088x/0/c3/82509056-03d33b7ed2f13a01165c957c4aea3c30.jpg" width="700">

You can learn more about it [here](https://focus.ua/digital/576078-dokatilis-youtube-zapretit-blokirovshchiki-reklamy-i-hochet-brat-dengi-za-full-hd-kachestvo).

> In the end, it really upset me and I said: "Okay YouTube, challenge accepted."

<br>
<h3>How it works</h3>

---
YouAd Killer is based on 2 methods of interaction with YouTube:
1. Analyzing the HTML code used to detect ads.
2. HTML injections to block ads.

At the moment when an ad appears, certain characteristic changes occur in the HTML code of the page, which are registered by YouAd Killer. After that, the extension uses one of two available injections, depending on the type of ad.
There are two types of YouTube ads:
1. The one that can be skipped after a while.
2. And ads that cannot be skipped at all.

To combat the first type of ads, a programmatic click of the "Skip" button is used, since it was found that it is already present in the DOM of the page at the time of the ad's appearance (although it is not visually visible).

To skip ads of the second type, an injection is introduced that sets the progress of the ad to the last second of the ad video (so that the ad ends just as it starts).

In addition, a static ad unit, which usually appears somewhere to the right of the video player, is also blocked.

<br>
<h3>Architectural reference</h3>

---
The project contains additional elements, and not all of them need to be included in the final archive (which is submitted to the Chrome store before the extension is published). The table below will show which files are included in the final build and what role they play in the project.

| № | Name                  | Final assembly  | Purpose                                         |
|---|:--------------------- | :--------------:| :---------------------------------------------- |
| 1 | _autolocalization     | No              | Directory with the autolocalization script      |
| 2 | _experimental_version | No              | The first generation prototype of this extension|
| 3 | _locales              | Yes             | Expansion locations                             |
| 4 | images                | Yes             | Extension icons                                 |
| 5 | popup                 | Yes             | Directory with popup files                      |
| 6 | .gitignore            | No              | Git file                                        |
| 7 | content.js            | Yes             | The main algorithmic core of the extension      |
| 8 | manifest.json         | Yes             | Extension config file                           |
| 9 | README(_EN).MD        | No              | Documentation                                   |


<br>
<h3>Classification of prototypes</h3>

---
The extension is developed in two versions:
* up to version 1.7 - first generation
* from version 2.0 and higher - the second generation

Version 1.7 is a first generation working prototype and is located in the `_experimental_version` directory. At the moment, its development is suspended, but it was decided to keep the prototype in this directory for a number of reasons:
1. Due to the fundamental difference in operation, compared to the second generation extension.
2. In case YouTube can protect itself from the second-generation extension.
3. For future improvements if all other prototypes fail.

Unlike its predecessor, the second-generation YouAd Killer is devoid of all the disadvantages, namely:
* it no longer affects traffic and does not depend on the speed of the Internet connection
* the number of permissions for the extension is reduced to 0 (except for access to the host)
* the extension is optimized as much as possible (all its functionality takes no more than 30 lines of code)
* the frequency of launching the adware detector has been doubled (the response delay has decreased from 1 to 0.5 seconds)
* The extension will work correctly at any video viewing speed

The only drawback is that the extension blocks ads using two methods with "surgical precision" and there is always a risk that YouTube will try to prevent this (while the first-generation extension, despite all its shortcomings, is more resistant to any actions of YouTube).

<br>
<h3>Support and compatibility</h3>

---
The current version of the extension (2.2) is only supported and compatible with Chromium-based browsers.

The extension is localized in 52 languages:
* Ukrainian
* Indonesian
* Malay
* English
* Filipino (Tagalog)
* French
* Swahili
* Dutch
* Norwegian
* Vietnamese
* Turkish
* Catalan
* Danish
* Estonian
* Spanish
* Croatian
* Italian
* Latvian
* Lithuanian
* Hungarian
* Polish
* Portuguese
* Romanian
* Slovak
* Slovenian
* Finnish
* Swedish
* Czech
* Greek
* Serbian
* Bulgarian
* Russian
* Hebrew
* Persian
* Marathi
* Hindi
* Bengali
* Gujarati
* Tamil
* Telugu
* Canadian
* Malayalam
* Thai
* Amharic
* Arabic
* Chinese (simplified)
* Chinese (traditional)
* Japanese
* Urdu
* Punjabi (Punjabi)
* German
* Korean

The extension's localization is selected automatically, depending on the browser's localization.