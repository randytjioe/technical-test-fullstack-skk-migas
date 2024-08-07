# Live-Code

Fungsi `kelompokkanSetiapHuruf` digunakan untuk mengelompokkan setiap huruf (besar kecil berpengaruh) dari array kata-kata, dan mengurutkannya berdasarkan frekuensi kemunculan dari yang terbanyak hingga yang paling sedikit. Jika jumlah kemunculan sama, huruf besar akan diurutkan terlebih dahulu, diikuti oleh susunan abjad a-z.

## Deskripsi

Fungsi ini menggabungkan semua kata menjadi satu string, menghitung frekuensi kemunculan setiap huruf, dan mengurutkan huruf-huruf tersebut sesuai dengan aturan yang ditentukan. Hasilnya adalah string yang telah diurutkan berdasarkan kriteria tersebut.

## Cara Penggunaan

Anda bisa menggunakan fungsi ini dengan memberikan array kata-kata sebagai parameter. Berikut adalah contoh penggunaannya:

```javascript
console.log(kelompokkanDanUrutkanHuruf(["Abc", "bCd"])); // Output: bACcd
console.log(kelompokkanDanUrutkanHuruf(["Oke", "One"])); // Output: Oekn
console.log(
  kelompokkanDanUrutkanHuruf([
    "Pendanaan",
    "Terproteksi",
    "Untuk",
    "Dampak",
    "Berarti",
  ])
); // Output: aenrktipBDPTUdmosu
console.log(kelompokkanSetiapHuruf([])); // Output: Input kosong atau tidak valid.
console.log(kelompokkanSetiapHuruf([""])); // Output: Input kosong atau tidak valid.
console.log(kelompokkanSetiapHuruf()); // Output: Input kosong atau tidak valid.
```

## Cara Menjalankan

Untuk menjalankan file JavaScript ini menggunakan Node.js, ikuti langkah-langkah berikut:

1. Install Node.js:
   Pastikan Anda sudah menginstal Node.js di komputer Anda. Anda dapat mengunduh dan menginstal Node.js dari situs resmi Node.js.

2. Jalankan File:
   Buka terminal atau command prompt, navigasikan ke direktori tempat file JavaScript disimpan, dan jalankan perintah berikut:

```
node kelompokkanSetiapHuruf.js
```
