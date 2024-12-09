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
  { id: 6, image: "/baladacard.jpg", title: "Xperience", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },
  { id: 7, image: "/baladacard.jpg", title: "Sunlight", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 8, image: "/baladacard.jpg", title: "Moonlight", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 9, image: "/baladacard.jpg", title: "Snow Club", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },
  { id: 10, image: "/baladacard.jpg", title: "Club Night", description: "Noite de balada com DJ e muita dança", date: "2024-12-01", location: "São Paulo", tag: "baladas" },
  { id: 11, image: "/baladacard.jpg", title: "Night Moment", description: "Balada com música ao vivo", date: "2024-12-02", location: "Rio de Janeiro", tag: "baladas" },
  { id: 12, image: "/baladacard.jpg", title: "The Night", description: "Balada temática anos 80", date: "2024-12-03", location: "Curitiba", tag: "baladas" },

  // Shows
  { id: 13, image: "/showcard.jpg", title: "Rock in the moonlight", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 14, image: "/showcard.jpg", title: "Pop Explosion", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 15, image: "/showcard.jpg", title: "Sertanejo Sunset", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 16, image: "/showcard.jpg", title: "Funk beat Fest", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 17, image: "/showcard.jpg", title: "Hip hop heights", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 18, image: "/showcard.jpg", title: "Jazz & chill", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 19, image: "/showcard.jpg", title: "Indie vibes fest", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 20, image: "/showcard.jpg", title: "Eletronic Wave", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 21, image: "/showcard.jpg", title: "Pagode na praça", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 22, image: "/showcard.jpg", title: "Rap & flow", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 23, image: "/showcard.jpg", title: "Blues under", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 24, image: "/showcard.jpg", title: "Pop Punk Revival", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 25, image: "/showcard.jpg", title: "Nu metal fest", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 26, image: "/showcard.jpg", title: "Wave", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 27, image: "/showcard.jpg", title: "Linkin Exp", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },
  { id: 28, image: "/showcard.jpg", title: "MPB Cover", description: "Show ao vivo com as melhores bandas", date: "2024-11-20", location: "Rio de Janeiro", tag: "shows" },
  { id: 29, image: "/showcard.jpg", title: "Rock Cover", description: "Show acústico", date: "2024-11-21", location: "São Paulo", tag: "shows" },
  { id: 30, image: "/showcard.jpg", title: "Só as antigas", description: "Show de rock", date: "2024-11-22", location: "Curitiba", tag: "shows" },

  // Festivais
  { id: 31, image: "/festivalcard.jpg", title: "Vibefest", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 32, image: "/festivalcard.jpg", title: "Som do horizonte", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 34, image: "/festivalcard.jpg", title: "Aurora music festival", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },
  { id: 35, image: "/festivalcard.jpg", title: "EcoSound Festival", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 36, image: "/festivalcard.jpg", title: "Ritmo & Soul", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 37, image: "/festivalcard.jpg", title: "Wavebreak", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },
  { id: 38, image: "/festivalcard.jpg", title: "Harmonia", description: "Festival de música e arte ao ar livre", date: "2024-11-25", location: "Curitiba", tag: "festivais" },
  { id: 39, image: "/festivalcard.jpg", title: "Festxen", description: "Festival gastronômico", date: "2024-11-26", location: "São Paulo", tag: "festivais" },
  { id: 40, image: "/festivalcard.jpg", title: "PartyFest", description: "Festival de cinema", date: "2024-11-27", location: "Rio de Janeiro", tag: "festivais" },

  // Palestras
  { id: 41, image: "/palestracard.jpg", title: "Inovação disruptiva", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 42, image: "/palestracard.jpg", title: "O dia da IA", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 43, image: "/palestracard.jpg", title: "Empreendedorismo criativo", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 44, image: "/palestracard.jpg", title: "O Futuro do trabalho", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 45, image: "/palestracard.jpg", title: "Liderança 4.0", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 46, image: "/palestracard.jpg", title: "Sustentanibilidade", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 47, image: "/palestracard.jpg", title: "Código a inovação", description: "Palestra sobre inovação e tecnologia", date: "2024-11-18", location: "Brasília", tag: "palestras" },
  { id: 48, image: "/palestracard.jpg", title: "Saúde mental no trabalho", description: "Palestra sobre empreendedorismo", date: "2024-11-19", location: "São Paulo", tag: "palestras" },
  { id: 49, image: "/palestracard.jpg", title: "Marketing digital", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },
  { id: 50, image: "/palestracard.jpg", title: "Exercite a criatividade", description: "Palestra sobre marketing digital", date: "2024-11-20", location: "Rio de Janeiro", tag: "palestras" },

  // Réveillon
  { id: 51, image: "/anonovocard.jpg", title: "Ano novo eletrônico", description: "Celebração de Ano Novo com fogos de artifício", date: "2024-12-31", location: "Salvador", tag: "reveillon" },
  { id: 52, image: "/anonovocard.jpg", title: "Virada cultural", description: "Festa de Réveillon na praia", date: "2024-12-31", location: "Rio de Janeiro", tag: "reveillon" },
  { id: 53, image: "/anonovocard.jpg", title: "Sunset Year", description: "Revéillon com música ao vivo", date: "2024-12-31", location: "São Paulo", tag: "reveillon" },
  { id: 54, image: "/anonovocard.jpg", title: "Moonlight Fireworks", description: "Celebração de Ano Novo com fogos de artifício", date: "2024-12-31", location: "Salvador", tag: "reveillon" },
  { id: 55, image: "/anonovocard.jpg", title: "Réveillon das estrelas", description: "Festa de Réveillon na praia", date: "2024-12-31", location: "Rio de Janeiro", tag: "reveillon" },
  { id: 56, image: "/anonovocard.jpg", title: "Revéillon Experience", description: "Revéillon com música ao vivo", date: "2024-12-31", location: "São Paulo", tag: "reveillon" },

  // Cursos
  { id: 57, image: "/cursocard.jpg", title: "Básico da programação", description: "Cursos intensivos de tecnologia", date: "2024-12-05", location: "Online", tag: "cursos" },
  { id: 58, image: "/cursocard.jpg", title: "Curso Inglês", description: "Curso de marketing digital", date: "2024-12-06", location: "Online", tag: "cursos" },
  { id: 59, image: "/cursocard.jpg", title: "Javascript e maizena", description: "Curso de desenvolvimento web", date: "2024-12-07", location: "Online", tag: "cursos" },
  { id: 60, image: "/cursocard.jpg", title: "Fotografia trials", description: "Cursos intensivos de tecnologia", date: "2024-12-05", location: "Online", tag: "cursos" },
  { id: 61, image: "/cursocard.jpg", title: "Marketing digital", description: "Curso de marketing digital", date: "2024-12-06", location: "Online", tag: "cursos" },
  { id: 62, image: "/cursocard.jpg", title: "Design gráfico 2024", description: "Curso de desenvolvimento web", date: "2024-12-07", location: "Online", tag: "cursos" },

  // Internacional
  { id: 63, image: "/internacionalcard.png", title: "Coldplay Experience", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 64, image: "/internacionalcard.png", title: "Beatles Forever", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 65, image: "/internacionalcard.png", title: "EDM Global", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },
  { id: 66, image: "/internacionalcard.png", title: "Linkin Park", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 67, image: "/internacionalcard.png", title: "Ed Sheeran is back", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 68, image: "/internacionalcard.png", title: "Imagine Dragons Experience", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },
  { id: 69, image: "/internacionalcard.png", title: "The Weeknd", description: "Eventos internacionais imperdíveis", date: "2024-12-10", location: "Nova York", tag: "internacional" },
  { id: 70, image: "/internacionalcard.png", title: "Kanye West", description: "Conferência internacional", date: "2024-12-11", location: "Londres", tag: "internacional" },
  { id: 71, image: "/internacionalcard.png", title: "Taylor Swift", description: "Feira internacional de tecnologia", date: "2024-12-12", location: "Tóquio", tag: "internacional" },

  // Rock
  { id: 72, image: "/rockcard_jpg.png", title: "Queen must go on", description: "Festival de Rock com várias bandas", date: "2024-11-15", location: "Porto Alegre", tag: "rock" },
  { id: 73, image: "/rockcard_jpg.png", title: "Linkin Revival", description: "Show de Rock com bandas locais", date: "2024-11-16", location: "São Paulo", tag: "rock" },
  { id: 74, image: "/rockcard_jpg.png", title: "Pearl Jam Alive", description: "Noite de Rock com bandas internacionais", date: "2024-11-17", location: "Rio de Janeiro", tag: "rock" },
  { id: 75, image: "/rockcard_jpg.png", title: "RHCP", description: "Festival de Rock ao ar livre", date: "2024-11-18", location: "Curitiba", tag: "rock" },
  { id: 76, image: "/rockcard_jpg.png", title: "Dark side of the moon live", description: "Show de Rock com grandes nomes", date: "2024-11-19", location: "Brasília", tag: "rock" },
  { id: 77, image: "/rockcard_jpg.png", title: "Nirvana tribute", description: "Noite de Rock com bandas emergentes", date: "2024-11-20", location: "Salvador", tag: "rock" },
  { id: 78, image: "/rockcard_jpg.png", title: "Stairway to heaven", description: "Festival de Rock com várias atrações", date: "2024-11-21", location: "Fortaleza", tag: "rock" },
  { id: 79, image: "/rockcard_jpg.png", title: "Welcome to the jungle", description: "Show de Rock com bandas clássicas", date: "2024-11-22", location: "Belo Horizonte", tag: "rock" },
  { id: 80, image: "/rockcard_jpg.png", title: "Back in black", description: "Noite de Rock com bandas cover", date: "2024-11-23", location: "Florianópolis", tag: "rock" },
  { id: 81, image: "/rockcard_jpg.png", title: "In the end tribute", description: "Festival de Rock com novas bandas", date: "2024-11-24", location: "Porto Alegre", tag: "rock" },
  { id: 82, image: "/rockcard_jpg.png", title: "Foo Fighters", description: "Show de Rock com bandas locais", date: "2024-11-25", location: "São Paulo", tag: "rock" },
  { id: 83, image: "/rockcard_jpg.png", title: "Slash Solo", description: "Noite de Rock com bandas internacionais", date: "2024-11-26", location: "Rio de Janeiro", tag: "rock" },

  // Pagode
  { id: 84, image: "/pagodecard_jpg.png", title: "Thiaguinho e Amigos: Pagode Inesquecível", description: "Roda de pagode com grandes artistas", date: "2024-11-22", location: "Belo Horizonte", tag: "pagode" },
  { id: 85, image: "/pagodecard_jpg.png", title: "Dilsinho Sunset Vibes", description: "Pagode ao vivo", date: "2024-11-23", location: "São Paulo", tag: "pagode" },
  { id: 86, image: "/pagodecard_jpg.png", title: "Grupo Menos é Mais Live", description: "Pagode com churrasco", date: "2024-11-24", location: "Rio de Janeiro", tag: "pagode" },
  { id: 87, image: "/pagodecard_jpg.png", title: "Sorriso Maroto", description: "Roda de pagode com grandes artistas", date: "2024-11-22", location: "Belo Horizonte", tag: "pagode" },
  { id: 88, image: "/pagodecard_jpg.png", title: "Calcinha preta", description: "Pagode ao vivo", date: "2024-11-23", location: "São Paulo", tag: "pagode" },
  { id: 89, image: "/pagodecard_jpg.png", title: "Molejo", description: "Pagode com churrasco", date: "2024-11-24", location: "Rio de Janeiro", tag: "pagode" },
  // Eletrônica
  { id: 90, image: "/eletronicacard_jpg.png", title: "EDM FEST 2024", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 91, image: "/eletronicacard_jpg.png", title: "Techno Eclipse", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 92, image: "/eletronicacard_jpg.png", title: "Alok Experience", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },
  { id: 93, image: "/eletronicacard_jpg.png", title: "Só Track Boa", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 94, image: "/eletronicacard_jpg.png", title: "House party", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 95, image: "/eletronicacard_jpg.png", title: "Future bass", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },
  { id: 96, image: "/eletronicacard_jpg.png", title: "Trance united", description: "Noite de música eletrônica", date: "2024-11-19", location: "Florianópolis", tag: "eletronica" },
  { id: 97, image: "/eletronicacard_jpg.png", title: "Psychdelic", description: "Festa eletrônica com DJ internacional", date: "2024-11-20", location: "São Paulo", tag: "eletronica" },
  { id: 98, image: "/eletronicacard_jpg.png", title: "Eletric Wonderland", description: "Festival de música eletrônica", date: "2024-11-21", location: "Rio de Janeiro", tag: "eletronica" },

  // Teatros
  { id: 99, image: "/teatrocard.jpg", title: "O Mistério da casa de vidro", description: "Peça teatral imperdível", date: "2024-11-21", location: "Recife", tag: "teatro" },
  { id: 100, image: "/teatrocard.jpg", title: "Romeu e julieta", description: "Comédia teatral", date: "2024-11-22", location: "São Paulo", tag: "teatro" },
  { id: 101, image: "/teatrocard.jpg", title: "Shakespeare", description: "Drama teatral", date: "2024-11-23", location: "Rio de Janeiro", tag: "teatro" },

  // Infantil
  { id: 102, image: "/infantilcard.jpg", title: "Festa do Mickey", description: "Atividades recreativas para crianças", date: "2024-11-23", location: "Fortaleza", tag: "infantil" },
  { id: 103, image: "/infantilcard.jpg", title: "Ben 10 XP", description: "Teatro infantil", date: "2024-11-24", location: "São Paulo", tag: "infantil" },
  { id: 104, image: "/infantilcard.jpg", title: "Galinha Pintadinha", description: "Show de mágica para crianças", date: "2024-11-25", location: "Rio de Janeiro", tag: "infantil" },
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