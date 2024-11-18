"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="h-0.5 bg-bombou_roxo"></div>
      <div className='mt-8'/>
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-extrabold mb-6">Eventos de {tag.charAt(0).toUpperCase() + tag.slice(1)}</h1>

        {events.length === 0 ? (
          <p>Nenhum evento encontrado para a tag selecionada.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
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
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => router.back()}
          className="mt-6 text-blue-500 hover:underline"
        >
          Voltar
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default EventsByTagClient;