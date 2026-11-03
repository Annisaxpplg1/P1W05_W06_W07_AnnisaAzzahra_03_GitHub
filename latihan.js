// Latihan JavaScript Dasar Minggu 06
// Kalkulator nilai rapor di Console

console.log("Halo, saya Annisa!");
console.log("Ini latihan JavaScript pertamaku.");

// Data siswa
const nama = "Annisa Azzahra";
const kelas = "X PPLG 1";
const kkm = 75;
const nilaiTugas = 85;
const nilaiUts = 78;
const nilaiUas = 89;
const kehadiran = 90;

console.log(`Nama: ${nama}, kelas ${kelas}`);
console.log(`Nilai tugas ${nilaiTugas}, UTS ${nilaiUts}, UAS ${nilaiUas}`
);

// Fungsi perhitungan nilai
function hitungRataRata(tugas, uts, uas) { return (tugas + uts + uas) / 3;
}

function predikat(nilai) {
  if (nilai >= 90) {
    return "A";
  } else if (nilai >= 80) {
    return "B";
  } else if (nilai >= 70) {
    return "C";
  }
  return "D";
}

function rapor(namaSiswa, tugas, uts, uas) {
  const rata = hitungRataRata(tugas, uts, uas);
  return `${namaSiswa}: rata-rata ${rata}, predikat ${predikat(rata)}`;
}

// Hasil nilai Annisa
const rataRata = hitungRataRata(nilaiTugas, nilaiUts, nilaiUas);
const lulus = rataRata >= kkm;
const dapatSertifikat = lulus && kehadiran >= 80;

console.log(rapor(nama, nilaiTugas, nilaiUts, nilaiUas));
console.log(`Lulus KKM: ${lulus}`);
console.log(`Dapat sertifikat: ${dapatSertifikat}`);

//pesan kelulusan
if (lulus) {
  console.log("Selamat, kamu lulus KKM!");
} else {
  console.log("Tetap semangat, ikuti remedial ya.");
}

// 5. Menguji fungsi predikat dengan beberapa nilai
console.log(`predikat(95) = ${predikat(95)}`); // A
console.log(`predikat(90) = ${predikat(90)}`); // A, tepat di batas
console.log(`predikat(84) = ${predikat(84)}`); // B
console.log(`predikat(70) = ${predikat(70)}`); // C
console.log(`predikat(69) = ${predikat(69)}`); // D
// 6. Rapor beberapa siswa
console.log(rapor("Andi", 85, 78, 89));
console.log(rapor("Sinta", 92, 88, 96));
console.log(rapor("Budi", 70, 65, 72));