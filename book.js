// Array untuk menyimpan daftar buku
let daftarBuku = [];

// Fungsi untuk menambah buku
function tambahBuku(judul, penulis, tahun) {
    let buku = {
        judul: judul,
        penulis: penulis,
        tahun: tahun
    };
    daftarBuku.push(buku);
    alert("Buku berhasil ditambahkan!");
}

// Fungsi untuk menghapus buku berdasarkan indeks
function hapusBuku(indeks) {
    if (indeks >= 0 && indeks < daftarBuku.length) {
        daftarBuku.splice(indeks, 1);
        alert("Buku berhasil dihapus!");
    } else {
        alert("Indeks tidak valid!");
    }
}

// Fungsi untuk mengedit buku
function editBuku(indeks) {
    if (indeks >= 0 && indeks < daftarBuku.length) {
        let buku = daftarBuku[indeks];
        let judulBaru = prompt("Edit Judul", buku.judul);
        let penulisBaru = prompt("Edit Penulis", buku.penulis);
        let tahunBaru = prompt("Edit Tahun", buku.tahun);
        
        buku.judul = judulBaru;
        buku.penulis = penulisBaru;
        buku.tahun = tahunBaru;
        
        alert("Buku berhasil diperbarui!");
    } else {
        alert("Indeks tidak valid!");
    }
}

// Fungsi untuk menampilkan daftar buku
function tampilkanBuku() {
    if (daftarBuku.length === 0) {
        alert("Daftar buku kosong.");
    } else {
        let daftar = "Daftar Buku:\n";
        for (let i = 0; i < daftarBuku.length; i++) {
            let buku = daftarBuku[i];
            daftar += `${i}. Judul: ${buku.judul}, Penulis: ${buku.penulis}, Tahun: ${buku.tahun}\n`;
        }
        alert(daftar);
    }
}

// Fungsi utama
function main() {
    while (true) {
        let pilihan = prompt(
            "Pilih opsi:\n" +
            "1. Tambah Buku\n" +
            "2. Hapus Buku\n" +
            "3. Edit Buku\n" +
            "4. Tampilkan Buku\n" +
            "5. Keluar"
        );
        
        if (pilihan === "1") {
            let judul = prompt("Masukkan Judul Buku:");
            let penulis = prompt("Masukkan Penulis Buku:");
            let tahun = prompt("Masukkan Tahun Terbit Buku:");
            tambahBuku(judul, penulis, tahun);
        } else if (pilihan === "2") {
            let indeks = prompt("Masukkan indeks buku yang ingin dihapus:");
            hapusBuku(parseInt(indeks));
        } else if (pilihan === "3") {
            let indeks = prompt("Masukkan indeks buku yang ingin diedit:");
            editBuku(parseInt(indeks));
        } else if (pilihan === "4") {
            tampilkanBuku();
        } else if (pilihan === "5") {
            alert("Terima kasih telah menggunakan aplikasi!");
            break;
        } else {
            alert("Pilihan tidak valid!");
        }
    }
}

// Jalankan fungsi utama
main();
