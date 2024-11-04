"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";

interface SlideData {
  id: string;
  image: string;
  title: string;
}

interface CustomSwiperProps {
  data: SlideData[];
}

const CustomSwiper: React.FC<CustomSwiperProps> = ({ data }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      ref={swiperRef}
      pagination={false}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      scrollbar={{ draggable: true }}
      className="h-[90vh] relative"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full h-full">
            <img src={item.image} alt="slider" className="w-full h-full object-cover" />
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
  );
};

export default CustomSwiper;
