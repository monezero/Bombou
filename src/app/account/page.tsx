"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Account() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      router.push("/");
    }
  }, [router]);

  const handleInterestChange = (interest: string) => {
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      if (password !== confirmPassword) {
        alert("As senhas não coincidem");
        return;
      }

      const userData = { username, email, password, city, interests };
      localStorage.setItem(email, JSON.stringify(userData));
      alert("Conta criada com sucesso!");
      setIsRegistering(false); // Volta para a tela de login
    } else {
      const storedUser = localStorage.getItem(email);
      if (!storedUser) {
        alert("Usuário não encontrado");
        return;
      }

      const userData = JSON.parse(storedUser);
      if (userData.password !== password) {
        alert("Senha incorreta");
        return;
      }

      alert("Login realizado com sucesso!");
      localStorage.setItem("loggedInUser", email);
      router.push('/'); // Redireciona para a tela inicial
    }
  };

  const cities = [
    "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Salvador", "Fortaleza",
    "Curitiba", "Manaus", "Recife", "Porto Alegre", "Belém", "Goiânia", "Campinas",
    "São Luís", "Maceió", "Natal", "Teresina", "Campo Grande", "Florianópolis", "Aracaju"
  ];

  const interestsOptions = [
    { label: "Rock", emoji: "🎸" },
    { label: "Teatro", emoji: "🎭" },
    { label: "Festivais", emoji: "🎉" },
    { label: "Shows", emoji: "🎤" },
    { label: "Baladas", emoji: "💃" },
    { label: "Cursos", emoji: "📚" },
    { label: "Internacional", emoji: "✈️" },
    { label: "Pagode", emoji: "🥁" },
    { label: "Eletrônica", emoji: "🎧" },
    { label: "Teatros", emoji: "🎟️" },
    { label: "Infantil", emoji: "🧸" }
  ];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-bombou_slate">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">
          {isRegistering ? "Registrar-se" : "Entrar"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isRegistering && (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white">Nome de Usuário</label>
                  <input
                    type="text"
                    placeholder="Digite seu nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Email</label>
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Senha</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 px-3 py-2 text-white focus:outline-none"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Confirmar Senha</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 px-3 py-2 text-white focus:outline-none"
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Cidade</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                  >
                    <option value="">Selecione sua cidade</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">Interesses</label>
                  <div className="flex flex-wrap gap-2 mt-1 max-h-32 overflow-y-auto">
                    {interestsOptions.map((interest) => (
                      <button
                        type="button"
                        key={interest.label}
                        onClick={() => handleInterestChange(interest.label)}
                        className={`flex items-center px-4 py-2 rounded-md border ${
                          interests.includes(interest.label)
                            ? "bg-bombou_roxo text-white"
                            : "bg-bombou_slate text-white"
                        }`}
                      >
                        <span className="mr-2">{interest.emoji}</span>
                        {interest.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {!isRegistering && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">Email</label>
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white">Senha</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 py-2 text-white focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold bg-bombou_roxo text-black rounded-md hover:bg-purple-600 focus:outline-none"
          >
            {isRegistering ? "Registrar-se" : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-400">
          {isRegistering ? "Já tem uma conta? " : "Não tem uma conta? "}
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-bombou_roxo hover:underline focus:outline-none"
          >
            {isRegistering ? "Acessar" : "Registrar-se"}
          </button>
        </p>
      </div>
    </div>
  );
}