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
            setActiveIndex(swiper.activeIndex); // atualiza o indice ativo
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
                {/* texto na imagem */} // 
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-4 rounded-md">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* setas de navegação */}
          <div className="flex absolute z-10 cursor-pointer right-1 image-swiper-button-next" style={{ top: 'calc(50% - 12px)' }}>
            <IoIosArrowForward className="w-8 h-8" />
          </div>
          <div className="flex absolute z-10 cursor-pointer left-1 image-swiper-button-prev" style={{ top: 'calc(50% - 12px)' }}>
            <IoIosArrowBack className="w-8 h-8" />
          </div>
        </Swiper>

         {/* bullet points */}
        <div className="flex justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"> 
          {data.map((_, index) => (
            <Bullet key={index} index={index} isActive={activeIndex === index} onClick={() => swiperRef.current.swiper.slideTo(index)} />
          ))}
        </div>

        <div className="h-0.5 bg-bombou_roxo"></div>
      </main>
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
