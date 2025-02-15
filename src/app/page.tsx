"use client";
import Link from "next/link";
import CustomSwiper from "./components/Swiper";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { mockEvents as events } from "./events/tags/[tag]/EventsByTagServer";
import Head from "next/head";

type Event = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tag: string;
  price: string;
};

interface Filters {
  [key: number]: string;
}

const filters = [
  "hue-rotate(90deg)",
  "hue-rotate(180deg)",
  "hue-rotate(270deg)",
  "brightness(0.5)",
  "brightness(1.5)",
  "contrast(2)",
  "sepia(1)",
  "invert(1)",
];

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userTags, setUserTags] = useState<string[]>([]);
  const [personalizedEvents, setPersonalizedEvents] = useState<Event[]>([]);
  const [randomEvents, setRandomEvents] = useState<Event[]>([]);
  const [cart, setCart] = useState<Event[]>([]);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [eventFilters, setEventFilters] = useState<Filters>({});


  useEffect(() => {
    console.log("Component mounted");
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(localStorage.getItem(storedUser) || "{}");
      setUsername(capitalizeFirstLetter(userData.username));
      setUserTags(userData.interests || []);
      setIsLoggedIn(true);
      console.log("User Data:", userData); // Log para verificar os dados do usuário
      console.log("User Tags:", userData.interests); // Log para verificar as tags salvas pelo usuário
    }

    const storedCart = localStorage.getItem(`${storedUser}_cart`);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Selecionar eventos aleatórios
    const randomEvents = getRandomEvents(6);
    setRandomEvents(randomEvents);
    console.log("Random Events:", randomEvents); // Log para verificar os eventos aleatórios

    // Gerar filtros aleatórios para eventos
    const filters: Filters = {};
    events.forEach(event => {
      filters[event.id] = getRandomFilter();
    });
    setEventFilters(filters);
  }, [events]);

  useEffect(() => {
    if (userTags.length > 0) {
      // Selecionar eventos personalizados
      const personalizedEvents = getPersonalizedEvents(6);
      setPersonalizedEvents(personalizedEvents);
      console.log("Personalized Events:", personalizedEvents); // Log para verificar os eventos personalizados
    }
  }, [userTags]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = events.filter(event =>
        event.title.toLowerCase().includes(lowerCaseQuery) ||
        event.description.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents([]);
    }
  }, [searchQuery]);

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getRandomEvents = (count: number) => {
    if (!events || events.length === 0) {
      console.error("No events available");
      return [];
    }
    const shuffled = [...events].sort(() => 0.5 - Math.random());
    const selectedEvents = new Set<number>();
    const uniqueEvents = [];

    for (const event of shuffled) {
      if (uniqueEvents.length >= count) break;
      if (!selectedEvents.has(event.id)) {
        uniqueEvents.push(event);
        selectedEvents.add(event.id);
      }
    }

    return uniqueEvents;
  };

  const getPersonalizedEvents = (count: number) => {
    if (!events || events.length === 0) {
      console.error("No events available");
      return [];
    }
    console.log("Filtering events based on user tags:", userTags); // Log para verificar as tags usadas no filtro
    const filteredEvents = events.filter(event => {
      console.log("Event Tag:", event.tag); // Log para verificar a tag do evento
      return userTags.some(tag => tag.toLowerCase() === event.tag.toLowerCase());
    });
    console.log("Filtered Events:", filteredEvents); // Log para verificar os eventos filtrados
    const shuffled = [...filteredEvents].sort(() => 0.5 - Math.random());
    const selectedEvents = new Set<number>();
    const uniqueEvents = [];

    for (const event of shuffled) {
      if (uniqueEvents.length >= count) break;
      if (!selectedEvents.has(event.id)) {
        uniqueEvents.push(event);
        selectedEvents.add(event.id);
      }
    }

    return uniqueEvents;
  };

  const handleAddToCart = (event: Event) => {
    if (!isLoggedIn) {
      alert("Você precisa estar logado para adicionar itens ao carrinho.");
      return;
    }

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userCartKey = `${storedUser}_cart`;
      const userCart = localStorage.getItem(userCartKey);
      const cartItems = userCart ? JSON.parse(userCart) : [];
      cartItems.push(event);
      localStorage.setItem(userCartKey, JSON.stringify(cartItems));
      setCart(cartItems); // Atualizar o estado do carrinho
      window.dispatchEvent(new Event("storage")); // Disparar evento de storage para atualizar o Header

      // Exibir feedback de usuário
      setFeedbackMessage("Item adicionado ao carrinho!");
      setTimeout(() => {
        setFeedbackMessage(null);
      }, 3000); // Ocultar mensagem após 3 segundos
    }
  };

 

  const getRandomFilter = () => {
    return filters[Math.floor(Math.random() * filters.length)];
  };

  const data = [
    { id: "1", image: "/festa.jpg", title: "Baladas" },
    { id: "2", image: "/festa1.png", title: "Seminários" },
    { id: "3", image: "/seminario.png", title: "Shows e muito mais!" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Bombou - Eventos</title>
        <meta name="description" content="Encontre os melhores eventos da cidade!" />
      </Head>
      <Header cartItemCount={cart.length} id={1} logoUrl="/logo.png" title="Eventos" />
      <div className="h-0.5 bg-bombou_roxo"></div>

      <main className="flex-grow">
        {searchQuery.trim() ? (
          <div className="mt-16 ml-10">
            <div className="font-extrabold text-4xl">Resultados da Pesquisa</div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-black border border-bombou_roxo shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-48"
                      style={{ filter: eventFilters[event.id] }}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                      <p className="text-gray-400">{event.description}</p>
                      <p className="text-gray-500 mt-2">
                        <strong>Data:</strong> {event.date}
                      </p>
                      <p className="text-gray-500">
                        <strong>Local:</strong> {event.location}
                      </p>
                      <p className="text-gray-500">
                    <strong>Preço</strong> {event.price}
                  </p>
                  
                      <button
                        className='h-10 w-full border mt-4 border-green-600 bg-green-500 rounded-md'
                        onClick={() => handleAddToCart(event)}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">Nenhum evento encontrado para "{searchQuery}".</p>
              )}
            </div>
          </div>
        ) : (
          <>
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

            {isLoggedIn && (
              <div className="mt-16">
                <div className="font-extrabold text-4xl ml-10">
                  Personalizado para {username}
                </div>
                <div className="mt-8 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {personalizedEvents.length > 0 ? (
                    personalizedEvents.map((event) => (
                      <div
                        key={event.id}
                        className="bg-black border border-bombou_roxo shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom"
                      >
                        <img
                          src={event.image}
                          alt={event.title}
                          className="object-cover w-full h-48"
                          style={{ filter: eventFilters[event.id] }}
                        />
                        <div className="p-4">
                          <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                          <p className="text-gray-600">{event.description}</p>
                          <p className="text-gray-500 mt-2">
                            <strong>Data:</strong> {event.date}
                          </p>
                          <p className="text-gray-500">
                            <strong>Local:</strong> {event.location}
                          </p>
                          <p className="text-gray-500">
                    <strong>Preço</strong> {event.price}
                  </p>
                  
                          <button
                            className='h-10 w-full border mt-4 border-green-600 bg-green-500 rounded-md'
                            onClick={() => handleAddToCart(event)}
                          >
                            Comprar
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">Nenhum evento encontrado para suas preferências.</p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-16">
              <div className="font-extrabold text-4xl ml-10">Bombando agora</div>
              <div className="mt-8 ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {randomEvents.map((event) => (
                  <div key={event.id} className="bg-black border border-bombou_roxo shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-48"
                      style={{ filter: eventFilters[event.id] }}
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-white">{event.title}</h2>
                      <p className="text-gray-600">{event.description}</p>
                      <p className="text-gray-500 mt-2">
                        <strong>Data:</strong> {event.date}
                      </p>
                      <p className="text-gray-500">
                        <strong>Local:</strong> {event.location}
                      </p>
                      <p className="text-gray-500">
                    <strong>Preço</strong> {event.price}
                  </p>
                  
                      <button
                        className='h-10 w-full border mt-4 border-green-600 bg-green-500 rounded-md'
                        onClick={() => handleAddToCart(event)}
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      {feedbackMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
          {feedbackMessage}
        </div>
      )}

      <Footer />
    </div>
  );
}