        // Pilih elemen input, tombol, dan daftar
        const inputField = document.getElementById('itemInput');
        const addButton = document.getElementById('addItemButton');
        const itemList = document.getElementById('itemList');

        // Tambahkan event listener pada tombol
        addButton.addEventListener('click', function() {
            // Ambil teks dari input field
            const newItemText = inputField.value;

            // Cek apakah input kosong
            if (newItemText.trim() === "") {
                alert("Please enter an item.");
                return;
            }

            // Buat elemen list baru
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            // Tambahkan elemen list ke ul
            itemList.appendChild(newItem);

            // Kosongkan input field setelah menambahkan item
            inputField.value = "";
        });