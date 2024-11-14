import EventsByTagClient from './EventsByTagClient';

interface Event {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tag: string;
}

// Mock data for events
const mockEvents: Event[] = [
  { id: 1, image: "/baladacard.jpg", title: "Baladas", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 2, image: "/showcard.jpg", title: "Shows", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 3, image: "/festivalcard.jpg", title: "Festivais", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 4, image: "/palestracard.jpg", title: "Palestras", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 5, image: "/anonovocard.jpg", title: "Revéillon", description: "Celebração de Ano Novo com fogos de artifício", date: "2024-12-31", location: "Salvador", tag: "reveillon" },
  { id: 6, image: "/cursocard.jpg", title: "Cursos", description: "Cursos intensivos de tecnologia", date: "2024-12-05", location: "Online", tag: "cursos" },
  { id: 9, image: "/rockcard_jpg.png", title: "Rock", description: "Festival de Rock com várias bandas", date: "2024-11-15", location: "Porto Alegre", tag: "rock" },
  { id: 10, image: "/pagodecard_jpg.png", title: "Pagode", description: "Roda de pagode com grandes artistas", date: "2024-11-22", location: "Belo Horizonte", tag: "pagode" },
  { id: 11, image: "/eletronicacard_jpg.png", title: "Eletrônica", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 12, image: "/teatrocard.jpg", title: "Teatros", description: "Peça teatral imperdível", date: "2024-11-21", location: "Recife", tag: "teatro" },
  { id: 13, image: "/infantilcard.jpg", title: "Infantil", description: "Atividades recreativas para crianças", date: "2024-11-23", location: "Fortaleza", tag: "infantil" },
];

export async function generateStaticParams() {
  const tags = Array.from(new Set(mockEvents.map(event => event.tag)));
  return tags.map(tag => ({ tag }));
}

const EventsByTagServer = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const events = mockEvents.filter(event => event.tag === tag);

  return <EventsByTagClient events={events} tag={tag} />;
};

export default EventsByTagServer;