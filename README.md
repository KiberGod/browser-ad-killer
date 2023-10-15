<button id="change-text-button">Тик</button>
<div id="text-container">Початковий текст</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
    const changeTextButton = document.getElementById('change-text-button');
    const textContainer = document.getElementById('text-container');

    changeTextButton.addEventListener('click', function () {
        textContainer.textContent = 'Новий текст!';
    });
});
</script>