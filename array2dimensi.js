let nilai = [
    [80, 75, 90],
    [85, 90, 95],
    [70, 80, 85],
    [80, 80, 75]// Tugas 2 Siswa Baru 'Amos'
];
let siswa = ['Budi', 'Ani', 'Citra', 'Amos'];

for (let b = 0; b < nilai.length; b++) {
    let total = 0;
    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }
    let rata = total / nilai[b].length;
    console.log(siswa[b] + ': total ' + total + ', rata-rata ' + rata.toFixed(1));
}

//Tugas 3 
let jumlahKolom = nilai[0].length;
let jumlahBaris = nilai.length;

for (let k = 0; k < jumlahKolom; k++) {
    let totalKolom = 0;
    for (let b = 0; b < jumlahBaris; b++) {
        totalKolom += nilai[b][k];
    }
    let rataKolom = totalKolom / jumlahBaris;
    console.log('Mata Pelajaran Ke- ' + (k + 1) + ': rata-rata ' + rataKolom.toFixed(1));
}