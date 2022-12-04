let input = document.getElementById('input');
let symbol = document.getElementById('symbol');
let word = document.getElementById('word');

input.addEventListener('input', () => {
    symbol.textContent = input.value.length;
    let txt = input.value.trim();
    word.textContent = txt.split(/\s+/).filter(item => item).length;
});

