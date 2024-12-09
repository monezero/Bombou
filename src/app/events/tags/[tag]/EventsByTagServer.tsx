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
export const mockEvents: Event[] = [
  // Baladas
  { id: 1, image: "/baladacard.jpg", title: "Balada Sunset", description: "Um pôr do sol incrível com música eletrônica ao vivo", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 2, image: "/baladacard.jpg", title: "Noite Neon", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 3, image: "/baladacard.jpg", title: "Casa Sapucaí", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },
  { id: 4, image: "/baladacard.jpg", title: "Major", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 5, image: "/baladacard.jpg", title: "Lab", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 6, image: "/baladacard.jpg", title: "Balada 3", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },
  { id: 7, image: "/baladacard.jpg", title: "Balada 1", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 8, image: "/baladacard.jpg", title: "Balada 2", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 9, image: "/baladacard.jpg", title: "Balada 3", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },
  { id: 10, image: "/baladacard.jpg", title: "Balada 1", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 11, image: "/baladacard.jpg", title: "Balada 2", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 12, image: "/baladacard.jpg", title: "Balada 3", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },

  // Shows
  { id: 13, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 14, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 15, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 16, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 17, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 18, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 19, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 20, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 21, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 22, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 23, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 24, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 25, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 26, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 27, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 28, image: "/showcard.jpg", title: "Show 1", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 29, image: "/showcard.jpg", title: "Show 2", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 30, image: "/showcard.jpg", title: "Show 3", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },

  // Festivais
  { id: 31, image: "/festivalcard.jpg", title: "Festival 1", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 32, image: "/festivalcard.jpg", title: "Festival 2", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 34, image: "/festivalcard.jpg", title: "Festival 3", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },
  { id: 35, image: "/festivalcard.jpg", title: "Festival 1", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 36, image: "/festivalcard.jpg", title: "Festival 2", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 37, image: "/festivalcard.jpg", title: "Festival 3", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },
  { id: 38, image: "/festivalcard.jpg", title: "Festival 1", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 39, image: "/festivalcard.jpg", title: "Festival 2", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 40, image: "/festivalcard.jpg", title: "Festival 3", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },

  // Palestras
  { id: 41, image: "/palestracard.jpg", title: "Palestra 1", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 42, image: "/palestracard.jpg", title: "Palestra 2", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 43, image: "/palestracard.jpg", title: "Palestra 3", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 44, image: "/palestracard.jpg", title: "Palestra 1", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 45, image: "/palestracard.jpg", title: "Palestra 2", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 46, image: "/palestracard.jpg", title: "Palestra 3", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 47, image: "/palestracard.jpg", title: "Palestra 1", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 48, image: "/palestracard.jpg", title: "Palestra 2", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 49, image: "/palestracard.jpg", title: "Palestra 3", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 50, image: "/palestracard.jpg", title: "Palestra 3", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },

  // Réveillon
  { id: 51, image: "/anonovocard.jpg", title: "Revéillon 1", description: "Celebração de Ano Novo com fogos de artifício", date: "2024-12-31", location: "Salvador", tag: "reveillon" },
  { id: 52, image: "/anonovocard.jpg", title: "Revéillon 2", description: "Festa de Réveillon na praia", date: "2024-12-31", location: "Rio de Janeiro", tag: "reveillon" },
  { id: 53, image: "/anonovocard.jpg", title: "Revéillon 3", description: "Revéillon com música ao vivo", date: "2024-12-31", location: "São Paulo", tag: "reveillon" },
  { id: 54, image: "/anonovocard.jpg", title: "Revéillon 1", description: "Celebração de Ano Novo com fogos de artifício", date: "2024-12-31", location: "Salvador", tag: "reveillon" },
  { id: 55, image: "/anonovocard.jpg", title: "Revéillon 2", description: "Festa de Réveillon na praia", date: "2024-12-31", location: "Rio de Janeiro", tag: "reveillon" },
  { id: 56, image: "/anonovocard.jpg", title: "Revéillon 3", description: "Revéillon com música ao vivo", date: "2024-12-31", location: "São Paulo", tag: "reveillon" },

  // Cursos
  { id: 57, image: "/cursocard.jpg", title: "Curso 1", description: "Cursos intensivos de tecnologia", date: "2024-12-05", location: "Online", tag: "cursos" },
  { id: 58, image: "/cursocard.jpg", title: "Curso 2", description: "Curso de marketing digital", date: "2024-12-06", location: "Online", tag: "cursos" },
  { id: 59, image: "/cursocard.jpg", title: "Curso 3", description: "Curso de desenvolvimento web", date: "2024-12-07", location: "Online", tag: "cursos" },
  { id: 60, image: "/cursocard.jpg", title: "Curso 1", description: "Cursos intensivos de tecnologia", date: "2024-12-05", location: "Online", tag: "cursos" },
  { id: 61, image: "/cursocard.jpg", title: "Curso 2", description: "Curso de marketing digital", date: "2024-12-06", location: "Online", tag: "cursos" },
  { id: 62, image: "/cursocard.jpg", title: "Curso 3", description: "Curso de desenvolvimento web", date: "2024-12-07", location: "Online", tag: "cursos" },

  // Internacional
  { id: 63, image: "/internacionalcard.png", title: "Coldplay Experience", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 64, image: "/internacionalcard.png", title: "Evento Internacional 2", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 65, image: "/internacionalcard.png", title: "Evento Internacional 3", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },
  { id: 66, image: "/internacionalcard.png", title: "Evento Internacional 1", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 67, image: "/internacionalcard.png", title: "Evento Internacional 2", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 68, image: "/internacionalcard.png", title: "Evento Internacional 3", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },
  { id: 69, image: "/internacionalcard.png", title: "Evento Internacional 1", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 70, image: "/internacionalcard.png", title: "Evento Internacional 2", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 71, image: "/internacionalcard.png", title: "Evento Internacional 3", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },

  // Rock
  { id: 72, image: "/rockcard_jpg.png", title: "Rock Show 1", description: "Festival de Rock com várias bandas", date: "2024-11-15", location: "Porto Alegre", tag: "rock" },
  { id: 73, image: "/rockcard_jpg.png", title: "Rock Show 2", description: "Show de Rock com bandas locais", date: "2024-11-16", location: "São Paulo", tag: "rock" },
  { id: 74, image: "/rockcard_jpg.png", title: "Rock Show 3", description: "Noite de Rock com bandas internacionais", date: "2024-11-17", location: "Rio de Janeiro", tag: "rock" },
  { id: 75, image: "/rockcard_jpg.png", title: "Rock Show 4", description: "Festival de Rock ao ar livre", date: "2024-11-18", location: "Curitiba", tag: "rock" },
  { id: 76, image: "/rockcard_jpg.png", title: "Rock Show 5", description: "Show de Rock com grandes nomes", date: "2024-11-19", location: "Brasília", tag: "rock" },
  { id: 77, image: "/rockcard_jpg.png", title: "Rock Show 6", description: "Noite de Rock com bandas emergentes", date: "2024-11-20", location: "Salvador", tag: "rock" },
  { id: 78, image: "/rockcard_jpg.png", title: "Rock Show 7", description: "Festival de Rock com várias atrações", date: "2024-11-21", location: "Fortaleza", tag: "rock" },
  { id: 79, image: "/rockcard_jpg.png", title: "Rock Show 8", description: "Show de Rock com bandas clássicas", date: "2024-11-22", location: "Belo Horizonte", tag: "rock" },
  { id: 80, image: "/rockcard_jpg.png", title: "Rock Show 9", description: "Noite de Rock com bandas cover", date: "2024-11-23", location: "Florianópolis", tag: "rock" },
  { id: 81, image: "/rockcard_jpg.png", title: "Rock Show 10", description: "Festival de Rock com novas bandas", date: "2024-11-24", location: "Porto Alegre", tag: "rock" },
  { id: 82, image: "/rockcard_jpg.png", title: "Rock Show 11", description: "Show de Rock com bandas locais", date: "2024-11-25", location: "São Paulo", tag: "rock" },
  { id: 83, image: "/rockcard_jpg.png", title: "Rock Show 12", description: "Noite de Rock com bandas internacionais", date: "2024-11-26", location: "Rio de Janeiro", tag: "rock" },

  // Pagode
  { id: 84, image: "/pagodecard_jpg.png", title: "Pagode 1", description: "Roda de pagode com grandes artistas", date: "2024-11-22", location: "Belo Horizonte", tag: "pagode" },
  { id: 85, image: "/pagodecard_jpg.png", title: "Pagode 2", description: "Pagode ao vivo", date: "2024-11-23", location: "São Paulo", tag: "pagode" },
  { id: 86, image: "/pagodecard_jpg.png", title: "Pagode 3", description: "Pagode com churrasco", date: "2024-11-24", location: "Rio de Janeiro", tag: "pagode" },
  { id: 87, image: "/pagodecard_jpg.png", title: "Pagode 1", description: "Roda de pagode com grandes artistas", date: "2024-11-22", location: "Belo Horizonte", tag: "pagode" },
  { id: 88, image: "/pagodecard_jpg.png", title: "Pagode 2", description: "Pagode ao vivo", date: "2024-11-23", location: "São Paulo", tag: "pagode" },
  { id: 89, image: "/pagodecard_jpg.png", title: "Pagode 3", description: "Pagode com churrasco", date: "2024-11-24", location: "Rio de Janeiro", tag: "pagode" },
  // Eletrônica
  { id: 90, image: "/eletronicacard_jpg.png", title: "Eletrônica 1", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 91, image: "/eletronicacard_jpg.png", title: "Eletrônica 2", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 92, image: "/eletronicacard_jpg.png", title: "Eletrônica 3", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },
  { id: 93, image: "/eletronicacard_jpg.png", title: "Eletrônica 1", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 94, image: "/eletronicacard_jpg.png", title: "Eletrônica 2", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 95, image: "/eletronicacard_jpg.png", title: "Eletrônica 3", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },
  { id: 96, image: "/eletronicacard_jpg.png", title: "Eletrônica 1", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 97, image: "/eletronicacard_jpg.png", title: "Eletrônica 2", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 98, image: "/eletronicacard_jpg.png", title: "Eletrônica 3", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },

  // Teatros
  { id: 99, image: "/teatrocard.jpg", title: "Teatro 1", description: "Peça teatral imperdível", date: "2024-11-21", location: "Recife", tag: "teatro" },
  { id: 100, image: "/teatrocard.jpg", title: "Teatro 2", description: "Comédia teatral", date: "2024-11-22", location: "São Paulo", tag: "teatro" },
  { id: 101, image: "/teatrocard.jpg", title: "Teatro 3", description: "Drama teatral", date: "2024-11-23", location: "Rio de Janeiro", tag: "teatro" },

  // Infantil
  { id: 102, image: "/infantilcard.jpg", title: "Infantil 1", description: "Atividades recreativas para crianças", date: "2024-11-23", location: "Fortaleza", tag: "infantil" },
  { id: 103, image: "/infantilcard.jpg", title: "Infantil 2", description: "Teatro infantil", date: "2024-11-24", location: "São Paulo", tag: "infantil" },
  { id: 104, image: "/infantilcard.jpg", title: "Infantil 3", description: "Show de mágica para crianças", date: "2024-11-25", location: "Rio de Janeiro", tag: "infantil" },
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