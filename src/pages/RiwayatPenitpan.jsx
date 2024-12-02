import React, { useState } from "react";

const RiwayatPenitipan = () => {
  const data = [
    {
      nomor: "0001",
      tanggal: "12-12-2024",
      deskripsi: `Jumlah Barang: 3\nDeskripsi: Barang adalah Vas Bunga, Koper, dan Bola Basket\nAlamat: maps.com/jl-alam-no-1`,
      total: "Rp. 20.000",
      ulasan: "",
    },
    {
      nomor: "0002",
      tanggal: "12-12-2024",
      deskripsi: `Jumlah Barang: 5\nDeskripsi: Barang adalah Sepatu, Tas, dan Buku\nAlamat: maps.com/jl-alam-no-2`,
      total: "Rp. 20.000",
      ulasan: "",
    },
    {
      nomor: "0001",
      tanggal: "12-12-2024",
      deskripsi: `Jumlah Barang: 3\nDeskripsi: Barang adalah Vas Bunga, Koper, dan Bola Basket\nAlamat: maps.com/jl-alam-no-1`,
      total: "Rp. 20.000",
      ulasan: "Pengiriman Tepat waktu dan aman",
    },
    {
      nomor: "0001",
      tanggal: "12-12-2024",
      deskripsi: `Jumlah Barang: 3\nDeskripsi: Barang adalah Vas Bunga, Koper, dan Bola Basket\nAlamat: maps.com/jl-alam-no-1`,
      total: "Rp. 20.000",
      ulasan: "Pengiriman Tepat waktu dan aman",
    },
    {
      nomor: "0001",
      tanggal: "12-12-2024",
      deskripsi: `Jumlah Barang: 3\nDeskripsi: Barang adalah Vas Bunga, Koper, dan Bola Basket\nAlamat: maps.com/jl-alam-no-1`,
      total: "Rp. 20.000",
      ulasan: "",
    },
    // Data lainnya...
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Menampilkan 3 item per halaman

  // Membagi data berdasarkan halaman
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk menangani klik tombol pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-700 mb-2">Riwayat Penitipan</h1>
        <p className="text-gray-500 mb-6">
          Anda dapat melakukan monitoring dan manajemen pemesanan Anda
        </p>

        {/* Tabel */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-emerald-500 rounded-md">
            <thead>
              <tr className="bg-Neutral-50 text-gray-600">
                <th
                  colSpan="5"
                  className="p-3 border border-emerald-500 text-left text-xl font-semibold text-gray-700"
                >
                  Daftar Pengguna
                </th>
              </tr>
              <tr className="bg-Neutral-50 text-gray-600">
                <th className="p-3 border border-emerald-500 text-left">Nomor</th>
                <th className="p-3 border border-emerald-500 text-left">Tanggal</th>
                <th className="p-3 border border-emerald-500 text-left">Barang</th>
                <th className="p-3 border border-emerald-500 text-left">Total</th>
                <th className="p-3 border border-emerald-500 text-left">Ulasan</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } text-gray-600`}
                >
                  <td className="p-3 border border-emerald-500">{item.nomor}</td>
                  <td className="p-3 border border-emerald-500 whitespace-nowrap">
                    {/* Menambahkan white-space: nowrap; agar tanggal tidak pindah baris */}
                    <span className="bg-emerald-100 text-gray-600 px-3 py-1 rounded-md">
                      {item.tanggal}
                    </span>
                  </td>
                  <td className="p-3 border border-emerald-500 whitespace-pre-line">
                    {/* Menampilkan deskripsi, jumlah barang, dan alamat dari data */}
                    <span className="font-semibold text-gray-600">Jumlah Barang:</span> 3<br />
                    <span className="font-semibold text-gray-600">Deskripsi:</span> {item.deskripsi.split("\n")[1]}<br />
                    <span className="font-semibold text-gray-600">Alamat:</span> {item.deskripsi.split("\n")[2]}
                  </td>
                  <td className="p-3 border border-emerald-500 whitespace-nowrap">
                    {/* Menghapus background pada kolom total */}
                    <span className="text-gray-600 px-3 py-1 rounded-md">
                      {item.total}
                    </span>
                  </td>
                  <td className="p-3 border border-emerald-500">
                    {item.ulasan ? (
                      <span className="px-3 py-1 bg-emerald-100 rounded-md">{item.ulasan}</span>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <input
                          type="text"
                          placeholder="Ketik Ulasan Anda"
                          className="px-3 py-1 border border-emerald-500 bg-emerald-100 rounded-md text-sm w-48"
                        />
                        <button className="px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-md hover:bg-emerald-600">
                          Kirim
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 space-x-2 ml-auto">
          <button
            className="w-8 h-8 bg-emerald-500 text-white rounded-full"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className="w-8 h-8 bg-emerald-500 text-white rounded-full"
            onClick={() => handlePageChange(2)}
          >
            2
          </button>
          <button
            className="w-8 h-8 bg-emerald-500 text-white rounded-full"
            onClick={() => handlePageChange(3)}
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPenitipan;
