export default function Home() {
  return (
    <>
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo e nome da empresa */}
          <div className="flex items-center space-x-2">
            <img src="/bombou.png" alt="Logo" className="h-10 w-10" />
            <span className="text-lg font-semibold">Bombou</span>
          </div>

          {/* Barra de pesquisa */}
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Pesquisar eventos..."
              className="px-4 py-2 w-72 rounded-md border border-bombou_roxo bg-bombou_slate  text-black h-12 "
            />
            <div className="flex items-center space-x-1">
              <button aria-label="Location" className="text-white">
                📍
              </button>
              <span>Belo Horizonte</span>
            </div>
          </div>

          {/* Botão de acessar e opções de idioma */}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-bombou_roxo text-black font-semibold rounded-full">
              Acessar
            </button>
            <div className="flex items-center space-x-1">
              Teste
            </div>
          </div>
        </div>
      </header>
    </>
  );
}