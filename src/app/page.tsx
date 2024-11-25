"use client";
import Link from "next/link";
import CustomSwiper from "./components/Swiper";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(localStorage.getItem(storedUser) || "{}");
      setUsername(capitalizeFirstLetter(userData.username));
      setIsLoggedIn(true);
    }
  }, []);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const data = [
    { id: "1", image: "/festa.jpg", title: "Baladas" },
    { id: "2", image: "/festa1.png", title: "Seminários" },
    { id: "3", image: "/seminario.png", title: "Shows e muito mais!" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={0} />
      <div className="h-0.5 bg-bombou_roxo"></div>

      <main className="flex-grow">
        <CustomSwiper data={data} />
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
                href={`/events/tags/${item.tag}`}
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
          <div className="font-extrabold text-4xl ml-10">
            {isLoggedIn ? `Personalizado para ${username}` : "Personalizado para você"}
          </div>
          <div className="mt-8 ml-10 grid grid-cols-6 gap-6 max-w-full">
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
                className="relative bg-black border border-bombou_roxo shadow-lg rounded-lg h-56 w-72 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom"
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
          <div className="mt-8 ml-10 grid grid-cols-6 gap-6 max-w-full">
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
                className="relative bg-black border border-bombou_roxo shadow-lg rounded-lg h-56 w-72 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom"
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
      </main>

      <Footer />
    </div>
  );
}