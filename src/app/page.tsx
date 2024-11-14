"use client"
import Link from "next/link";
import CustomSwiper from "./components/Swiper";
import { useEffect, useState } from "react";

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
          {/* logo e nome */}
          <div className="flex items-center space-x-2">
            <img src="/bombouroxo.png" alt="Logo" className="h-14 w-14" />
            <span className="text-lg font-semibold">Bombou</span>
          </div>

          {/* barra de pesquisa */}
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
      <div className="h-0.5 bg-bombou_roxo"></div>
      <div className="mt-16">
        <div className="font-extrabold text-4xl ml-10">Temos de tudo</div>
        <div className="mt-8 ml-10 grid grid-cols-6 gap-8 gap-x-0">
          {[
            { id: 1, image: "/baladacard.jpg", title: "Baladas", tag: "baladas" },
            { id: 2, image: "/showcard.jpg", title: "Shows", tag: "shows" },
            { id: 3, image: "/festivalcard.jpg", title: "Festivais", tag: "festivais" },
            { id: 4, image: "/palestracard.jpg", title: "Palestras", tag: "palestras" },
            { id: 5, image: "/anonovocard.jpg", title: "Revéillon", tag: "reveillon" },
            { id: 6, image: "/cursocard.jpg", title: "Cursos", tag: "cursos" },
            { id: 7, image: "/internacionalcard.png", title: "Internacional", tag: "internacional" },
            { id: 9, image: "/rockcard_jpg.png", title: "Rock", tag: "rock" },
            { id: 10, image: "/pagodecard_jpg.png", title: "Pagode", tag: "pagode" },
            { id: 11, image: "/eletronicacard_jpg.png", title: "Eletrônica", tag: "eletronica" },
            { id: 12, image: "/teatrocard.jpg", title: "Teatros", tag: "teatro" },
            { id: 13, image: "/infantilcard.jpg", title: "Infantil", tag: "infantil" },
          ].map((item) => (
            <Link
            key={item.id}
            href={`/events/tags/${item.tag}`} // Condição para adicionar link apenas para itens com tag
            passHref
          >
            <div
              className="relative bg-black bg-opacity-70 backdrop-blur-sm border border-bombou_roxo shadow-lg rounded-lg h-96 w-72 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom"
            >
              <button className="focus:outline-none h-full w-full">
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 text-center">
                  <span className="font-semibold text-lg text-white">{item.title}</span>
                </div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>

      <div className="mt-16">
        <div className="font-extrabold text-4xl ml-10">Personalizado para você</div>
        <div className="mt-8 ml-10 grid grid-cols-6 gap-6 max-w-full ">
          {[
            { id: 1, image: "/baladacard.jpg", title: "Baladas" },
            { id: 2, image: "/showcard.jpg", title: "Shows" },
            { id: 3, image: "/festivalcard.jpg", title: "Festivais" },
            { id: 4, image: "/palestracard.jpg", title: "Palestras" },
            { id: 5, image: "/anonovocard.jpg", title: "Revéillon" },
            { id: 6, image: "/cursocard.jpg", title: "Cursos" },
          ].map((item) => (
            <div
              key={item.id}
              className="relative bg-black border border-bombou_roxo shadow-lg rounded-lg h-56 w-72 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom" // Usando a sombra customizada
            >
              <button className="focus:outline-none h-full w-full">
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 text-center">
                  <span className="font-semibold text-lg text-white">{item.title}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="font-extrabold text-4xl ml-10">Bombando agora</div>
        <div className="mt-8 ml-10 grid grid-cols-6 gap-6 max-w-full ">
          {[
            { id: 1, image: "/baladacard.jpg", title: "Baladas" },
            { id: 2, image: "/showcard.jpg", title: "Shows" },
            { id: 3, image: "/festivalcard.jpg", title: "Festivais" },
            { id: 4, image: "/palestracard.jpg", title: "Palestras" },
            { id: 5, image: "/anonovocard.jpg", title: "Revéillon" },
            { id: 6, image: "/cursocard.jpg", title: "Cursos" },
          ].map((item) => (
            <div
              key={item.id}
              className="relative bg-black border border-bombou_roxo shadow-lg rounded-lg h-56 w-72 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom" // Usando a sombra customizada"
            >
              <button className="focus:outline-none h-full w-full">
                <img
                  src={item.image}
                  className="h-full w-full object-cover"
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-2 text-center">
                  <span className="font-semibold text-lg text-white">{item.title}</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-lg font-semibold mb-4">Navegação</h2>
            <ul className="space-y-2">
              <li><Link href="/"><span className="text-gray-400 hover:text-bombou_roxo">Home</span></Link></li>
              <li><Link href="/account"><span className="text-gray-400 hover:text-bombou_roxo">Conta</span></Link></li>
              <li><Link href="/events"><span className="text-gray-400 hover:text-bombou_roxo">Eventos</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-400 hover:text-bombou_roxo">Contato</span></Link></li>
            </ul>
          </div>

       
          <div>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <p className="text-gray-400">Email: contato@bombou.com</p>
            <p className="text-gray-400">Telefone: (31) 1234-5678</p>
            <p className="text-gray-400">Endereço: github.com/monezero</p>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-4">Redes Sociais</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
    
  );
}

