# 🎂 Birthday Website Template

Template website ulang tahun interaktif yang dibuat dengan HTML, CSS, dan JavaScript murni — tanpa framework apapun. Cocok dijadikan hadiah digital yang personal dan berkesan untuk pasangan.

---

## ✨ Fitur

- 🖼️ **Foto Carousel** — Tampilkan foto kenangan bersama dengan navigasi prev/next
- 🖼️ **Galeri Foto** — Grid foto yang bisa diklik untuk melihat ukuran penuh
- ⌨️ **Typed Effect** — Animasi ketikan otomatis dengan beberapa kalimat bergantian
- 🎵 **Pemutar Musik** — Putar lagu latar favorit kamu untuk dia
- 💌 **Modal Ucapan** — Pop-up berisi pesan panjang yang tulus
- 🎉 **Efek Kejutan** — Animasi confetti warna-warni
- 📱 **Responsif** — Tampilan menyesuaikan layar mobile maupun desktop

---

## 📁 Struktur Proyek

```
1a project/
├── index.html        # Halaman utama
├── style.css         # Semua styling
├── script.js         # Logika interaktif
├── assets/
│   ├── photo1.jpg    # Foto kenangan (1–12)
│   ├── photo2.jpg
│   └── ...
└── music_src/
    └── UlangTahun.mp3  # File musik latar
```

---

## 🚀 Cara Penggunaan

### 1. Ganti Nama

Buka `index.html`, cari semua teks `[Nama Pasangan]` dan ganti dengan nama yang sebenarnya.

```html
<!-- Sebelum -->
<h1>Selamat Ulang Tahun [Nama Pasangan]🎉</h1>

<!-- Sesudah -->
<h1>Selamat Ulang Tahun Budi Santoso🎉</h1>
```

> Teks `[Nama Pasangan]` muncul di beberapa tempat: `<title>`, `<h1>`, dan `<footer>`.

### 2. Ganti Foto

Letakkan foto-foto kenangan di folder `assets/` dengan nama berikut:

```
photo1.jpg, photo2.jpg, photo3.jpg, ..., photo12.jpg
```

> Gunakan tepat **12 foto**. Format yang didukung: `.jpg`, `.jpeg`, `.png`, `.webp`

### 3. Ganti Musik

Letakkan file musik di folder `music_src/` dengan nama:

```
UlangTahun.mp3
```

Atau ubah nama file-nya di baris ini dalam `script.js`:

```js
const MUSIC_SRC = 'music_src/UlangTahun.mp3';
```

### 4. Tulis Ucapan Panjang

Buka `script.js`, cari bagian `openMessages` dan ganti teks placeholder dengan ucapan asli kamu:

```js
document.getElementById('openMessages').addEventListener('click', () => {
  modalBody.innerHTML = `
    ...
    <p class="fade-text" ...>
      Selamat ulang tahun, [nama]!   <!-- ← Ganti di sini -->
      ...
    </p>
  `;
});
```

### 5. Ganti Pesan di Kartu

Buka `index.html`, ganti isi `.msg` di section "Selamat Bertambah Usia":

```html
<div class="msg">[Tulis pesanmu di sini...]</div>
```

### 6. Ganti Typed Phrases

Buka `script.js`, ganti kalimat-kalimat di array `phrases`:

```js
const phrases = [
  'Kalimat pertama yang diketik otomatis...',
  'Kalimat kedua...',
  'Kalimat ketiga...'
];
```

---

## 🖥️ Cara Menjalankan

Tidak perlu install apapun. Cukup buka file `index.html` langsung di browser.

```
Klik dua kali file index.html → Buka di browser
```

> Untuk fitur musik, disarankan membuka via live server (misalnya ekstensi **Live Server** di VS Code) karena beberapa browser memblokir `file://` untuk autoplay audio.

---

## 📋 Checklist Kustomisasi

- [ ] Ganti `[Nama Pasangan]` di `index.html`
- [ ] Masukkan 12 foto ke folder `assets/`
- [ ] Masukkan file musik ke `music_src/UlangTahun.mp3`
- [ ] Tulis ucapan panjang di `script.js` (bagian `openMessages`)
- [ ] Tulis pesan singkat di kartu-kartu `index.html`
- [ ] Ganti kalimat typed effect di `script.js` (array `phrases`)

---

## 🛠️ Teknologi

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur halaman |
| CSS3 | Styling & animasi |
| JavaScript (Vanilla) | Logika interaktif |
| Canvas API | Animasi confetti |

---

<p align="center">Dibuat dengan ❤️ — semoga harinya selalu penuh kebahagiaan.</p>
