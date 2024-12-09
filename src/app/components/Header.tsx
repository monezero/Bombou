"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(cartItemCount);
  const [cart, setCart] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
    }

    const userCart = localStorage.getItem(`${storedUser}_cart`);
    if (userCart && storedUser) {
      setCartCount(JSON.parse(userCart).length);
      setCart(JSON.parse(userCart));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const userCart = localStorage.getItem(`${storedUser}_cart`);
        setCartCount(userCart ? JSON.parse(userCart).length : 0);
        setCart(userCart ? JSON.parse(userCart) : []);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRemoveFromCart = (eventId: number) => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userCartKey = `${storedUser}_cart`;
      const updatedCart = [...cart];
      const index = updatedCart.findIndex(event => event.id === eventId);
      if (index !== -1) {
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        setCartCount(updatedCart.length);
        localStorage.setItem(userCartKey, JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("storage"));
      }
    }
  };

  const handleClearCart = () => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const userCartKey = `${storedUser}_cart`;
      setCart([]);
      setCartCount(0);
      localStorage.removeItem(userCartKey);
      window.dispatchEvent(new Event("storage"));
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price || 0), 0).toFixed(2);
  };

  const handleCheckout = () => {
    // Exibir feedback para o usuário
    setFeedbackMessage("Compra finalizada com sucesso!");
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 3000); // Ocultar mensagem após 3 segundos

    // Limpar o carrinho
    handleClearCart();

    // Fechar o modal
    handleCloseModal();
  };

  return (
    <header className="bg-black text-white p-4 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo e nome */}
        <div className="flex items-center space-x-2">
          <img src="/bombouroxo.png" alt="Logo" className="h-14 w-14" />
          <Link href="/">
            <span className="text-lg font-semibold">Bombou</span>
          </Link>
        </div>

        {/* barra de pesquisa */}
        <div className="flex items-center space-x-6">
          <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Pesquisar eventos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-96 rounded-md border border-bombou_roxo bg-bombou_slate text-white h-12"
            />
            <button type="submit" className="text-white">
              <FaLocationDot className="w-6 h-6" />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <Link href={isLoggedIn ? "/options" : "/account"}>
            <button className="px-4 py-2 bg-bombou_roxo text-black font-semibold rounded-full hover:bg-purple-800">
              {isLoggedIn ? "Opções" : "Acessar"}
            </button>
          </Link>
          <div className="flex items-center space-x-1 relative">
            <button onClick={handleOpenModal} className="text-white">
              <IoMdCart className="w-6 h-6" />
            </button>
            {isLoggedIn && cartCount > 0 && (
              <span className="absolute top-4 right-[-10px] bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-black p-8 rounded-lg w-96 border border-bombou_roxo max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4 text-white">Carrinho</h2>
            {cart.length === 0 ? (
              <p className="text-gray-400">Seu carrinho está vazio.</p>
            ) : (
              <ul>
                {cart.map((event, index) => (
                  <li key={index} className="flex justify-between items-center mb-4">
                    <span className="text-white">{event.title}</span>
                    <span className="text-white">{event.price}</span>

                    <button
                      className="text-red-500"
                      onClick={() => handleRemoveFromCart(event.id)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                onClick={handleClearCart}
              >
                Esvaziar Carrinho
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                onClick={handleCheckout}
              >
                Finalizar Compra
              </button>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {feedbackMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded">
          {feedbackMessage}
        </div>
      )}
    </header>
  );
};

export default Header;