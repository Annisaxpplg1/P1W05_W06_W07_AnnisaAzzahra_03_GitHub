//Ambil semua kolom angka pada halaman danformulir kalkulator
const inputs = [...document.querySelectorAll('input[type="number"]')];
const form = document.querySelector('form');

//hitung rata-rata dari nilai yang diinputkan
const hitungRataRata = () => {
    const nilai =inputs
  //ambil isi kolom, abaikan kolom yang masih kosong, lalu ubah menjadi angka
  .map((input) => input.value.trim())
  .filter((value) => value !== "")
  .map(Number);
   const hasil = document.querySelector("#hasil");

   //Berhenti jika element untuk menampilkan hasil tidak ditemukan
   if (!hasil) return;

   //Tampilkan pesan jika belum ada nilai yang bisa dihitung
   if (nilai.length === 0) {
   hasil.textContent = "Masukkan nilai terlebih dahulu.";
   return;
    }

//Jumlahkan semua angka dan bagi dengan banyaknya angka untuk mendapatkan rata-rata
const rataRata = nilai.reduce((total, angka) => total + angka, 0) / nilai.length;
hasil.textContent = `Rata-rata: ${rataRata}`;
};

//Hitung hanya saat formulir dikirim melalui tombol hitung
//Cegah formulir memuat ulang halaman setelah tombol ditekan
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        hitungRataRata();
    });

    form.addEventListener("reset", () => {
        const hasil = document.querySelector("#hasil");
        if (hasil) hasil.textContent = "";
    });
}