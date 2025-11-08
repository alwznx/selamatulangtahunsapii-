# 🎉 Website Ucapan Ulang Tahun Personal

Ini adalah proyek *template single-file* (HTML, CSS, dan JavaScript) untuk membuat halaman web ucapan selamat ulang tahun yang interaktif dan personal. Halaman ini dirancang dengan tema *dark mode* yang modern, efek *glassmorphism*, dan berbagai fitur interaktif untuk memberikan kejutan yang berkesan.

[Sertakan screenshot halaman web Anda di sini]

## 🚀 Fitur Utama

* **Desain Modern:** Tema *dark mode* yang elegan dengan efek *blur* (glassmorphism) pada kartu.
* **Animasi Ketik:** Efek teks mengetik otomatis di bagian *hero* untuk menyampaikan pesan pembuka.
* **Pemutar Musik:** Tombol untuk memutar/menghentikan musik latar (memerlukan interaksi pengguna untuk *autoplay*).
* **Efek Konfeti:** Animasi konfeti yang meriah yang dapat dipicu oleh tombol.
* **Galeri Foto:**
    * *Carousel* foto utama di bagian *hero* dengan tombol navigasi (Next/Previous).
    * Galeri kenangan (grid) yang setiap fotonya dapat diklik untuk dilihat dalam ukuran besar (modal).
* **Modal Interaktif:**
    * Modal untuk menampilkan foto galeri.
    * Modal untuk "Ucapan" (menampilkan pesan personal yang panjang).
    * Modal untuk "Kejutan" (memicu konfeti dan pesan singkat).
* **Desain Responsif:** Tampilan otomatis menyesuaikan diri untuk perangkat *desktop* maupun *mobile*.
* **Single File:** Semua kode (HTML, CSS, JS) ada dalam satu file `index.html`, membuatnya mudah untuk di-*hosting* di mana saja (seperti GitHub Pages, Netlify, Vercel, dll.).

## 🔧 Cara Menggunakan & Kustomisasi

Anda tidak perlu instalasi apa pun, cukup unduh file `index.html` ini dan lakukan kustomisasi berikut.

### 1. Menyiapkan Aset (Foto & Musik)

Proyek ini mengharapkan struktur folder tertentu untuk aset:

1.  Buat folder bernama `assets` di samping file `index.html` Anda.
2.  Masukkan semua foto Anda ke dalam folder `assets` ini.
    * Secara *default*, skrip mencari 12 foto dengan nama `photo1.jpg`, `photo2.jpg`, ..., `photo12.jpg`.
3.  Buat folder bernama `music_src`.
4.  Masukkan file musik Anda (misal: `UlangTahun.mp3`) ke dalam folder `music_src`.

### 2. Kustomisasi Teks (HTML)

Buka file `index.html` dengan editor teks dan ubah bagian-bagian berikut:

* **Judul Halaman:** Ubah teks di dalam tag `<title>` (baris 6).
* **Nama & Judul Utama:** Ubah teks di dalam tag `<h1>` dan `.lead` (baris ~225-228).
* **Ucapan Sederhana:** Ubah teks di dalam *grid* `.msg` (baris ~247-252) dan di kartu terakhir (baris ~295-299).

### 3. Kustomisasi Lanjutan (JavaScript)

Sebagian besar konten dinamis diatur di dalam tag `<script>` di bagian bawah file (mulai dari baris ~328).

* **Mengganti Foto:**
    * Untuk mengubah daftar foto, edit *array* `PHOTOS` (baris ~330).
    * Anda bisa menggunakan nama file yang berbeda atau mengubah jumlah fotonya. Pastikan *path*-nya benar (diawali dengan `assets/`).
    * ```javascript
      const PHOTOS = [
          'assets/foto-kenangan-1.jpg',
          'assets/makan-bareng.png',
          'assets/liburan.jpg',
          // ... tambahkan foto lainnya
      ];
      ```

* **Mengganti Musik:**
    * Ubah nilai variabel `MUSIC_SRC` (baris ~339).
    * ```javascript
      const MUSIC_SRC = 'music_src/lagu-favorit.mp3';
      ```

* **Mengganti Animasi Teks Ketik:**
    * Edit *array* `phrases` (baris ~342).
    * ```javascript
      const phrases = [
          'Pesan pertama yang akan diketik...',
          'Pesan kedua...',
          'Dan seterusnya...'
      ];
      ```

* **Mengganti Pesan Personal (Modal "Baca Ucapan"):**
    * Cari `document.getElementById('openMessages')` (baris ~403).
    * Edit konten HTML di dalam `modalBody.innerHTML = \`...\`` untuk mengubah pesan panjang di dalamnya.

* **Mengganti Pesan "Kejutan":**
    * Cari `document.getElementById('surpriseBtn')` (baris ~433).
    * Edit nama di dalam `<h2>...</h2>` dan pesan di dalam `<p>...</p>`.

## 💻 Teknologi yang Digunakan

* **HTML5**
* **CSS3** (Internal Stylesheet)
* **JavaScript (Vanilla JS)** (Internal Script)

---
Dibuat dengan ❤️.
