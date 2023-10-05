import React from "react";

function HomePage() {
  return (
    <div className="bg-gray-100 h-screen">
      <header className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Instagram Clone</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#">Ana Sayfa</a>
              </li>
              <li>
                <a href="#">Keşfet</a>
              </li>
              <li>
                <a href="#">Profil</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Gönderiler */}
      <main className="container mx-auto pt-4">
        {/* Gönderi Kartları */}
        <div className="grid grid-cols-3 gap-4">
          {/* Gönderi Kartı Örnekleri */}
          {/* İlk gönderi */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://via.placeholder.com/640x640"
              alt="Gönderi Resmi"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Kullanıcı Adı</h2>
              <p className="text-gray-600">Gönderi açıklaması.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
