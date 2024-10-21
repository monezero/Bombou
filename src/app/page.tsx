"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";

export default function Home() {
  const data = [
    { id: "1", image: "/festa.jpg", title: "Baladas" },
    { id: "2", image: "/festa1.png", title: "Seminários" },
    { id: "3", image: "/seminario.png", title: "Shows e muito mais!" },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
            <button className="px-4 py-2 bg-bombou_roxo text-black font-semibold rounded-full">
              Acessar
            </button>
            <div className="flex items-center space-x-1">Teste</div>
          </div>
        </div>
      </header>
      <div className="h-0.5 bg-bombou_roxo"></div>

      <main>
        <Swiper
          ref={swiperRef}
          pagination={false}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Navigation]}
          scrollbar={{ draggable: true }}
          className="h-[90vh] relative"
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt="slider"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-md">
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex absolute z-10 cursor-pointer right-1 image-swiper-button-next" style={{ top: 'calc(50% - 12px)' }}>
            <IoIosArrowForward className="w-8 h-8" />
          </div>
          <div className="flex absolute z-10 cursor-pointer left-1 image-swiper-button-prev" style={{ top: 'calc(50% - 12px)' }}>
            <IoIosArrowBack className="w-8 h-8" />
          </div>
        </Swiper>

        <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          {data.map((_, index) => (
            <Bullet key={index} index={index} isActive={activeIndex === index} onClick={() => swiperRef.current.swiper.slideTo(index)} />
          ))}
        </div>

        <div className="h-0.5 bg-bombou_roxo"></div>
      </main>

      <div className="mt-16">
        <div className="font-extrabold text-4xl ml-10">
          Personalizado para você 
        </div>
        <div className="mt-8 ml-10 grid grid-cols-6 gap-8 gap-x-0">
          {[
            { id: 1, image: "/bombouroxo.png", title: "Baladas" },
            { id: 2, image: "/bombouroxo.png", title: "Shows" },
            { id: 3, image: "/bombouroxo.png", title: "Festivais" },
            { id: 4, image: "/bombouroxo.png", title: "Palestras" },
            { id: 5, image: "/bombouroxo.png", title: "Revéillon" },
            { id: 6, image: "/bombouroxo.png", title: "Cursos" },
            { id: 7, image: "/bombouroxo.png", title: "Internacional" },
            { id: 9, image: "/bombouroxo.png", title: "Rock" },
            { id: 10, image: "/bombouroxo.png", title: "Pagode" },
            { id: 11, image: "/bombouroxo.png", title: "Eletrônica" },
            { id: 12, image: "/bombouroxo.png", title: "Teatros" },
            { id: 13, image: "/bombouroxo.png", title: "Infantil" },
            
          ].map((item) => (
            <div
              key={item.id}
              className="bg-black border border-bombou_roxo shadow-lg rounded-lg p-4 flex flex-col items-center h-96 w-72"
            >
              {/* Imagem clicável */}
              <button
                onClick={() => console.log(`Imagem de ${item.title} foi clicada!`)}
                className="focus:outline-none"
              >
                <img
                  src={item.image}
                  className="h-full w- mb-2 rounded-md object-cover"
                  alt={item.title}
                />
              </button>

              {/* Texto clicável */}
              <button
                onClick={() => console.log(`Texto ${item.title} foi clicado!`)}
                className="focus:outline-none"
              >
                <span className="font-semibold text-lg">{item.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const Bullet = ({ index, isActive, onClick }) => {
  return (
    <div
      className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${isActive ? 'bg-bombou_roxo opacity-100' : 'bg-white opacity-100'}`}
      onClick={onClick}
    />
  );
};
