// Pilih elemen input dan paragraf
const inputField = document.getElementById('textInput');
const keyDisplay = document.getElementById('keyDisplay');

// Tambahkan event listener untuk keydown
inputField.addEventListener('keydown', function(event) {
    // Tampilkan karakter terakhir yang ditekan
    keyDisplay.textContent = `Last key pressed: ${event.key}`;
});