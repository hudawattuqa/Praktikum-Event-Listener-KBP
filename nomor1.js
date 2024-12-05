// pilih elemen tombol dan paragraph
const button = document.getElementById('changeBtn');
const paragraph = document.getElementById('paragraph');

// Tambahkan event listener untuk tombol
button.addEventListener('click', function() {
    // ubah warna latar belakang paragraph
    paragraph.style.color = 'blue';
});