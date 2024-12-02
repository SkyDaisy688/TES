import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-emerald-500">Titipin</div>
        <nav className="flex space-x-6">
          <a href="#beranda" className="text-gray-700 hover:text-emerald-500">Beranda</a>
          <a href="#tentang" className="text-gray-700 hover:text-emerald-500">Tentang</a>
          <a href="#cara-nitipin" className="text-gray-700 hover:text-emerald-500">Cara Nitipin</a>
          <a href="#mengapa-titipin" className="text-gray-700 hover:text-emerald-500">Mengapa Titipin</a>
          <a href="#faq" className="text-gray-700 hover:text-emerald-500">Faq</a>
          <a href="#kontak" className="text-gray-700 hover:text-emerald-500">Kontak</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-emerald-500 hover:text-emerald-600">Masuk</button>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">Daftar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
