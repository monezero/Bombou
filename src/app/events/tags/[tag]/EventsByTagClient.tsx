"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import type { Event } from './EventsByTagServer';


interface Filters {
  [key: number]: string;
}

interface EventsByTagProps {
  events: Event[];
  tag: string;
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

const EventsByTagClient: React.FC<EventsByTagProps> = ({ events, tag }) => {
  const [visibleEvents, setVisibleEvents] = useState(6); // Número inicial de eventos visíveis
  const [cart, setCart] = useState<Event[]>([]); // Estado do carrinho
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [eventFilters, setEventFilters] = useState<Filters>({});

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
    }

    const storedCart = localStorage.getItem(`${storedUser}_cart`);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Gerar filtros aleatórios para eventos
    const filters: Filters = {};
    events.forEach(event => {
      filters[event.id] = getRandomFilter();
    });
    setEventFilters(filters);
  }, [events]);

  const handleLoadMore = () => {
    setVisibleEvents(prev => prev + 6); // Carregar mais 6 eventos a cada clique
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Eventos" logoUrl='/logo.png' cartItemCount={cart.length} id={1} />
      <div className="h-0.5 bg-bombou_roxo"></div>
      <div className='mt-8'/>
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-extrabold mb-6">Eventos de {tag.charAt(0).toUpperCase() + tag.slice(1)}</h1>

        {events.length === 0 ? (
          <p>Nenhum evento encontrado para a tag selecionada.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.slice(0, visibleEvents).map((event) => (
              <div key={event.id} className="bg-black border border-bombou_roxo shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-custom">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={300}
                  height={200}
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
            ))}
          </div>
        )}

        {visibleEvents < events.length && (
          <div className='mt-6 flex justify-center'>
          <button
            onClick={handleLoadMore}
            className="mt-6 px-4 py-2 bg-bombou_roxo text-white rounded hover:bg-purple-800 focus:outline-none"
          >
            Carregar Mais
          </button>
          </div>
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
};

export default EventsByTagClient;