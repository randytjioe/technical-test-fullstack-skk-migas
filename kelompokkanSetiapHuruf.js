function kelompokkanSetiapHuruf(input) {

  // Pertama kita validasi input apakah  kosong atau tidak
  // Jika kosong, kembalikan pesan "Input kosong atau tidak valid."
  if (!input || input.length === 0 || input == "" || input === null) {
    return "Input kosong atau tidak valid.";
  }

  // Kedua gabungkan semua huruf menjadi satu string dan simpan dalam variabel semuaHuruf
  let semuaHuruf = input.join('');

  // Ketiga buat objek degan nama variabel counter untuk menghitung frekuensi setiap huruf
  let counter = {};

  // Selanjutnya hitung frekuensi setiap huruf dengan menggunakan for loop dan masukinnya ke variabel counter
  for (let huruf of semuaHuruf) {
    if (counter[huruf]) {
      counter[huruf]++;
    } else {
      counter[huruf] = 1;
    }
  }

  // Keempat buat array dengan variabel banyakHuruf untuk menyimpan karakter berdasarkan frekuensi 
  let banyakHuruf = [];
  for (let huruf in counter) {
    let frekuensi = counter[huruf];
    if (!banyakHuruf[frekuensi]) {
      banyakHuruf[frekuensi] = [];
    }
    banyakHuruf[frekuensi].push(huruf);
  }

  // Kelima gabungkan karakter dari bucket frekuensi tertinggi ke terendah
  // Buat variabel resultArray dengan array kosong
  let resultArray = [];
  // Lakukan perulangan dari frekuensi terbesar
  for (let i = banyakHuruf.length - 1; i > 0; i--) {
    // Cek apakah frekuensi i ada
    if (banyakHuruf[i]) {
      // Jika frekuensi i ada
      // Buat variabel hurufBesar dan hurufKecil
      let hurufBesar = [];
      let hurufKecil = [];
      // Lakukan perulangan untuk memisahkan huruf besar dan kecil
      for (let huruf of banyakHuruf[i]) {
        if (huruf.toUpperCase() === huruf) {
          hurufBesar.push(huruf);
        } else {
          hurufKecil.push(huruf);
        }
      }

      // Urutkan huruf besar dan kecil secara alfabet dengan menggunakan sort 
      hurufBesar.sort();
      hurufKecil.sort();

      // Gabungkan hasil urutan ke resultArray dengan menggunakan concat
      resultArray = resultArray.concat(hurufBesar, hurufKecil);
    }
  }

  // Gabungkan array hasil menjadi string dengan menggunakan join
  return resultArray.join('');
}


console.log(kelompokkanSetiapHuruf(["Abc", "bCd"]));  
console.log(kelompokkanSetiapHuruf(["Oke", "One"]));  
console.log(kelompokkanSetiapHuruf(["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"]));
console.log(kelompokkanSetiapHuruf([]));  
console.log(kelompokkanSetiapHuruf([""])); 
console.log(kelompokkanSetiapHuruf()); 