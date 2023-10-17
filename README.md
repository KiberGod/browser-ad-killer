<img src="https://github.com/KiberGod/youtube-ad-killer/blob/main/images/icon128.png" align="left" width="128">
<h1>YouAd Killer</h1>
<span>v.1.7</span>
<br>
<br>
<br>
<h3>Загальна інформація</h3>

---
YouAd Killer - це розширення для браузера, яке автоматично знаходить та блокує рекламу на YouTube.

Слід зазначити, що розширення має як ряд переваг, так і ряд недоліків. Серед переваг:
* умовно миттєвий пропуск реклами (див "Принцип дії")
* не розпізнається YouTube-сервісами як AdBlock-розширення
* не порушує політику YouTube

Недоліки:
* впливає на Інтернет-трафік
* не може нормально працювати при повільній швидкості Інтернету
* корректно працює тільки при швидкості відео "1"

<br>
<h3>Інсталяція та перший запуск</h3>

---
Після встановлення рекомендується повністю перезапустити браузер, закривши всі старі вкладки. Це гарантуватиме стабільну
роботу розширення. В протилежному випадку можуть фіксуватись невеликі аномалії на старих вкладинках (саме там, де відкрито YouTube).
Надалі, під час використання, ці дії повторювати не треба.

<br>
<h3>Історія створення</h3>

---
Рішення про створення даного розширення було прийнято через нововведення YouTube. Вони додали детектор AdBlock-розширень та вимагають від користувачів їх вимкнути.
Після 3 попереджень блокують відеоплеєр аж доти, доки користувач не виконає їх прохання.

<img src="https://focus.ua/static/storage/thumbs/1088x/0/c3/82509056-03d33b7ed2f13a01165c957c4aea3c30.jpg" width="700">

Детальніше про це можна дізнатись [ось тут](https://focus.ua/digital/576078-dokatilis-youtube-zapretit-blokirovshchiki-reklamy-i-hochet-brat-dengi-za-full-hd-kachestvo).

> Врешті це дуже засмутило мене і я сказав: "Добре YouTube, виклик прийнято."

<br>
<h3>Принцип дії</h3>

---
YouAd Killer бере за основу 2 методи взаємодії з YouTube:
1. Аналіз HTML-коду, що використовується для виявлення реклами.
2. Перезавантаження сторінки YouTube.

Ці дії доступні будь-якому користувачу та входять у стандартний функціонал браузерів, а отже розширення не порушує політику YouTube.

В момент, коли з'являється реклама, у HTML-коді сторінки відбуваються певні характерні зміни, які реєструє YouAd Killer. Після цього розширення миттєво перезавантажує
сторінку з урахуванням часового прогресу перегляду відеоролика. Оскільки YouTube-реклама надсилається користувачу динамічно та у випадкові моменти, то цей алгоритм чудово
підходить для обходу реклами. За умови швидкого та безлімітного Інтернет-зв'язку, користувач отримає комфортний перегляд відеороликів зі швидким та автоматизованим пропуском реклами.

<b>Увага! При повільному або дуже обмеженому Інтернет-зв'язку розширення не буде давати необхідний ефект та може тільки нашкодити Вашому трафіку!</b>


<br>
<h3>Підтримка та сумісність</h3>

---
Поточна версія розширення (1.7) підтримується та сумісна лише з браузерами, створеними на базі Chromium.

Розширення локалізоване 12-ма мовами:
* українська
* англійська
* німецька
* польська
* іспанська
* італійська
* французька
* японська
* корейська
* китайська
* російська
* португальська

Локалізація розширення підбирається автоматично, у залежності від локалізації браузера.
