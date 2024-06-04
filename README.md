# Aplikasi Penjelajah Pokémon

Aplikasi ini memungkinkan pengguna untuk menelusuri daftar Pokémon menggunakan [PokeAPI](https://pokeapi.co/). Pengguna dapat melihat daftar Pokémon serta detail individu dari setiap Pokémon yang terdaftar.

## Cara Penggunaan

1. Buka file `index.html` di browser web.
2. Aplikasi akan memuat daftar Pokémon.
3. Pengguna dapat menavigasi melalui daftar dengan menggunakan tombol "Previous" dan "Next" yang ada di bagian atas daftar.
4. Klik pada gambar Pokémon untuk melihat detailnya.
5. Untuk menutup detail Pokémon, klik di luar area modal atau tekan tombol "Close".

## Deskripsi Kode

### Variabel dan Konstan

- `container`: Mendapatkan elemen dengan ID `pokemon-container`.
- `baseUrl`: URL dasar untuk permintaan API PokeAPI.

### Fungsi `renderPage(url)`

- Mengambil data dari API menggunakan URL yang diberikan.
- Membuat dan menambahkan tombol "Previous" dan "Next" ke dalam kontainer.
- Memuat data Pokémon dari setiap URL Pokémon individu.
- Membuat elemen untuk setiap Pokémon dan menambahkannya ke kontainer.
- Menambahkan event listener untuk memunculkan modal saat gambar Pokémon diklik.

### Fungsi `showModal(pokemon)`

- Menampilkan modal dengan gambar depan dan belakang Pokémon yang diberikan.
- Mengatur event listener untuk menutup modal saat area di luar modal diklik.

### Fungsi `createButton(label, url)`

- Membuat tombol dengan label yang diberikan.
- Jika URL diberikan, menambahkan event listener untuk memuat halaman baru saat tombol ditekan.

### Event Listener

- Ketika halaman dimuat, fungsi `renderPage(baseUrl)` akan dipanggil untuk menampilkan daftar awal Pokémon.

## Teknologi

- **JavaScript**: Bahasa pemrograman utama untuk logika aplikasi.
- **HTML/CSS**: Struktur dasar dan gaya tampilan aplikasi.
- **PokeAPI**: Sumber data untuk informasi Pokémon.

## Catatan Penting

Pastikan untuk menjalankan aplikasi di server web lokal (misalnya, menggunakan `http-server`) atau di lingkungan pengembangan yang sesuai untuk menghindari masalah keamanan CORS saat mengambil data dari PokeAPI.
