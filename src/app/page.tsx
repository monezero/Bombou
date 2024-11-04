"use client";
import Link from "next/link";
import CustomSwiper from "./components/Swiper";

export default function Home() {
  const data = [
    { id: "1", image: "/festa.jpg", title: "Baladas" },
    { id: "2", image: "/festa1.png", title: "Seminários" },
    { id: "3", image: "/seminario.png", title: "Shows e muito mais!" },
  ];

  return (
    <>
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/bombouroxo.png" alt="Logo" className="h-14 w-14" />
            <span className="text-lg font-semibold">Bombou</span>
          </div>

          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Pesquisar eventos..."
              className="px-4 py-2 w-96 rounded-md border border-bombou_roxo bg-bombou_slate text-white h-12"
            />
            <div className="flex items-center space-x-1 px-5">
              <button aria-label="Location" className="text-white">
                📍
              </button>
              <span>Local</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/account">
              <button className="px-4 py-2 bg-bombou_roxo text-black font-semibold rounded-full">
                Acessar
              </button>
            </Link>
            <div className="flex items-center space-x-1">Carrinho de compras</div>
          </div>
        </div>
      </header>
      <div className="h-0.5 bg-bombou_roxo"></div>

      <main>
        <CustomSwiper data={data} />
      </main>

      <div className="mt-16">
        <div className="font-extrabold text-4xl ml-10">Temos de tudo</div>
        <div className="mt-8 ml-10 grid grid-cols-6 gap-8 gap-x-0">
          {[
            { id: 1, image: "/baladacard.jpg", title: "Baladas" },
            { id: 2, image: "/showcard.jpg", title: "Shows" },
            { id: 3, image: "/festivalcard.jpg", title: "Festivais" },
            { id: 4, image: "/palestracard.jpg", title: "Palestras" },
            { id: 5, image: "/anonovocard.jpg", title: "Revéillon" },
            { id: 6, image: "/cursocard.jpg", title: "Cursos" },
            { id: 7, image: "/internacionalcard.png", title: "Internacional" },
            { id: 9, image: "/rockcard_jpg.png", title: "Rock" },
            { id: 10, image: "/pagodecard_jpg.png", title: "Pagode" },
            { id: 11, image: "/eletronicacard_jpg.png", title: "Eletrônica" },
            { id: 12, image: "/teatrocard.jpg", title: "Teatros" },
            { id: 13, image: "/infantilcard.jpg", title: "Infantil" },
          ].map((item) => (
            <div
              key={item.id}
              className="relative bg-black border border-bombou_roxo shadow-lg rounded-lg h-96 w-72 overflow-hidden"
            >
              <button
                onClick={() => console.log(`Card de ${item.title} foi clicado!`)}
                className="focus:outline-none h-full w-full"
              >
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 text-center">
                  <span className="font-semibold text-lg text-white">
                    {item.title}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links de Navegação */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Navegação</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-bombou_roxo">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-400 hover:text-bombou_roxo">
                  Conta
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-bombou_roxo">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-bombou_roxo">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <p className="text-gray-400">Email: contato@bombou.com</p>
            <p className="text-gray-400">Telefone: (31) 1234-5678</p>
            <p className="text-gray-400">
              Endereço: github.com/monezero
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Siga-nos</h2>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-400 hover:text-bombou_roxo"
              >
                📘
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-400 hover:text-bombou_roxo"
              >
                🐦
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-400 hover:text-bombou_roxo"
              >
                📸
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Bombou. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
