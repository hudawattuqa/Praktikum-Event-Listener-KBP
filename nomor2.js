// Pilih elemen tombal & paragraf
const button = document.getElementById('mouseoverBtn');
const paragraph = document.getElementById('paragraph');

//Tambahkan event listener untuk mouseover
button.addEventListener('mouseover', function() {
    //ubah teks di paragraph
    paragraph.textContent = "Mouse is over the button!";
});

// Tambahkan event listeneer untuk mouseout (opsional, untuk menghapus pesa)
button.addEventListener('mouseout', function() {
    paragraph.textContent = ""; // kosongkan pesan
});