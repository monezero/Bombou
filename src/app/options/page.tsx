"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Options() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(localStorage.getItem(storedUser) || "{}");
      setUsername(userData.username);
      setEmail(userData.email);
    } else {
      router.push("/account");
    }
  }, [router]);

  const handleSave = () => {
    if (newPassword !== confirmNewPassword) {
      alert("As senhas não coincidem");
      return;
    }

    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userData = JSON.parse(localStorage.getItem(storedUser) || "{}");
      userData.username = username;
      userData.email = email;
      if (newPassword) {
        userData.password = newPassword;
      }
      localStorage.setItem(email, JSON.stringify(userData));
      localStorage.setItem("loggedInUser", email);
      alert("Informações atualizadas com sucesso!");
    }
  };

  const handleLogoff = () => {
    localStorage.removeItem("loggedInUser");
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-bombou_slate">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Opções</h2>
        <form className="space-y-6">
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
            <label className="block text-sm font-medium text-white">Nova Senha</label>
            <input
              type="password"
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Confirmar Nova Senha</label>
            <input
              type="password"
              placeholder="Confirme sua nova senha"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
            />
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="w-full px-4 py-2 font-semibold bg-bombou_roxo text-black rounded-md hover:bg-purple-600 focus:outline-none"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={handleLogoff}
            className="w-full px-4 py-2 font-semibold bg-red-600 text-white rounded-md hover:bg-red-800 focus:outline-none"
          >
            Logoff
          </button>
        </form>
      </div>
    </div>
  );
}