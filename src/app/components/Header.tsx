"use client"
import Link from 'next/link';
import React from 'react';
import { IoMdCart } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


const Header: React.FC = () => {
    return (
        <header className="bg-black text-white p-4">
    <div className="container mx-auto flex items-center justify-between">
          {/* logo e nome */}
          <div className="flex items-center space-x-2">
            <img src="/bombouroxo.png" alt="Logo" className="h-14 w-14" />
            <span className="text-lg font-semibold">Bombou</span>
          </div>

          {/* barra de pesquisa */}
          <div className="flex items-center space-x-6">
            <input
              type="text"
              placeholder="Pesquisar eventos..."
              className="px-4 py-2 w-96 rounded-md border border-bombou_roxo bg-bombou_slate text-white h-12"
            />
            <div className="flex items-center space-x-1 px-5">
              <button aria-label="Location" className="text-white">
                <FaLocationDot className="w-6 h-6" />
              </button>
              
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/account">
              <button className="px-4 py-2 bg-bombou_roxo text-black font-semibold rounded-full">
                Acessar
              </button>
            </Link>
            <div className="flex items-center space-x-1">
                <button>
                <IoMdCart className="w-6 h-6" />
                </button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;