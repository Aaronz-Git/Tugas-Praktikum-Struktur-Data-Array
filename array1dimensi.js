// let teman = ['Budi', 'Ani', 'Citra', 'Dedi', 'Eka'];

// console.log('Jumlah teman: ' + teman.length);
// console.log('Teman pertama: ' + teman[0]);
// console.log('Teman terakhir:' + teman[teman.length - 1]);

// for (let i = 0; i < teman.length; i++) {
//     console.log((i + 1)+ '. '+ teman[1]);
// }

//Tugas 1

let nilai = [80, 90, 75, 85, 95];
let total = 0;
let tertinggi = nilai[0];
let terendah = nilai[0];

for (let i = 0; i < nilai.length; i++) {
    total += nilai[i];

    if (nilai[i] > tertinggi) {
        tertinggi = nilai[i];
    }

    if (nilai[i] < terendah) {
        terendah = nilai[i];
    }
}

let rataRata = total / nilai.length;

console.log("=== Hasil Tugas 1 ===");
console.log("Daftar Nilai    : " + nilai);
console.log("Total Nilai     : " + total);
console.log("Rata-Rata Nilai : " + rataRata);
console.log("Nilai Tertinggi : " + tertinggi);
console.log("Nilai Terendah  : " + terendah);

//Tugas 2

let dataCampuran = ['Budi', 16, true, 3.5];

console.log("\n=== Hasil Tugas 2 ===");
for (let i = 0; i < dataCampuran.length; i++) {
    console.log("Nilai: " + dataCampuran[i] + " | Tipe Data: " + typeof dataCampuran[i]);
}
