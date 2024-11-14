"use client"
import { useState } from "react";

export default function Account() {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-bombou_slate bg-opacity-95 text-white">
            <div className="w-full max-w-md p-8 space-y-6 bg-black bg-opacity-70 backdrop-blur-sm rounded-lg shadow-lg border border-bombou_roxo">
                <h2 className="text-3xl font-extrabold text-center text-bombou_roxo">
                    {isRegistering ? "Registrar-se" : "Acessar"}
                </h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                        />
                    </div>

                    {isRegistering && (
                        <div>
                            <label className="block text-sm font-medium">Nome</label>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium">Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                        />
                    </div>

                    {isRegistering && (
                        <div>
                            <label className="block text-sm font-medium">Confirmar Senha</label>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                className="w-full px-4 py-3 mt-1 rounded-md border border-bombou_roxo bg-bombou_slate text-white focus:outline-none focus:ring-2 focus:ring-bombou_roxo"
                            />
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
