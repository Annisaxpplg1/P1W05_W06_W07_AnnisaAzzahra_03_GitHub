
// ==========================================
// TUGAS LOGIKA JAVASCRIPT MINGGU 06
// ==========================================


// 1. Fungsi Ganjil atau Genap
function ganjilGenap(angka) {
    if (angka % 2 === 0) {
        return "genap";
    } else {
        return "ganjil";
    }
}

// Pengujian soal 1
console.log("=== 1. GANJIL ATAU GENAP ===");
console.log("Angka 7:", ganjilGenap(7));
console.log("Angka 12:", ganjilGenap(12));
console.log("Angka 0:", ganjilGenap(0));


// 2. Fungsi Celsius ke Fahrenheit
const celsiusKeFahrenheit = (celsius) => {
    return celsius * 9 / 5 + 32;
};

// Pengujian soal 2
console.log("=== 2. CELSIUS KE FAHRENHEIT ===");
console.log("0 Celsius:", celsiusKeFahrenheit(0));
console.log("100 Celsius:", celsiusKeFahrenheit(100));
console.log("-40 Celsius:", celsiusKeFahrenheit(-40));


// 3. Fungsi Mencari Nilai Terbesar
function nilaiTerbesar(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Pengujian soal 3
console.log("=== 3. NILAI TERBESAR ===");
console.log("Dari 5, 9, 2:", nilaiTerbesar(5, 9, 2));
console.log("Dari 80, 75, 80:", nilaiTerbesar(80, 75, 80));
console.log("Dari -3, -7, -1:", nilaiTerbesar(-3, -7, -1));


// 4. Fungsi Menentukan Tahun Kabisat
function tahunKabisat(tahun) {
    return (tahun % 4 === 0 && tahun % 100 !== 0) || tahun % 400 === 0;
}

// Pengujian soal 4
console.log("=== 4. TAHUN KABISAT ===");
console.log("Tahun 2024:", tahunKabisat(2024));
console.log("Tahun 2026:", tahunKabisat(2026));
console.log("Tahun 1900:", tahunKabisat(1900));
console.log("Tahun 2000:", tahunKabisat(2000));


// 5. Fungsi Menghitung Harga Setelah Diskon
function hargaSetelahDiskon(total) {
    if (total >= 200000) {
        return total * 0.8;
    } else if (total >= 100000) {
        return total * 0.9;
    } else {
        return total;
    }
}

// Pengujian soal 5
console.log("=== 5. HARGA SETELAH DISKON ===");
console.log("Belanja Rp250.000:", hargaSetelahDiskon(250000));
console.log("Belanja Rp100.000:", hargaSetelahDiskon(100000));
console.log("Belanja Rp75.000:", hargaSetelahDiskon(75000));
