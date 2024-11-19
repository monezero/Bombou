"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

interface Event {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tag: string;
}

interface EventsByTagProps {
  events: Event[];
  tag: string;
}

const EventsByTagClient: React.FC<EventsByTagProps> = ({ events, tag }) => {
  const router = useRouter();
  const [visibleEvents, setVisibleEvents] = useState(6); // Número inicial de eventos visíveis
  const [cart, setCart] = useState<Event[]>([]); // Estado do carrinho

  const handleLoadMore = () => {
    setVisibleEvents(prev => prev + 6); // Carregar mais 6 eventos a cada clique
  };

  const handleAddToCart = (event: Event) => {
    setCart(prevCart => [...prevCart, event]); // Adicionar evento ao carrinho
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemCount={cart.length} />
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
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{event.title}</h2>
                  <p className="text-gray-600">{event.description}</p>
                  <p className="text-gray-500 mt-2">
                    <strong>Data:</strong> {event.date}
                  </p>
                  <p className="text-gray-500">
                    <strong>Local:</strong> {event.location}
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

      <Footer />
    </div>
  );
};

export default EventsByTagClient;