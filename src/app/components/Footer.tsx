"use client"
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8 mt-16 bottom-">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
         
          <div>
            <h2 className="text-lg font-semibold mb-4">Navegação</h2>
            <ul className="space-y-2">
              <li><Link href="/"><span className="text-gray-400 hover:text-bombou_roxo">Home</span></Link></li>
              <li><Link href="/account"><span className="text-gray-400 hover:text-bombou_roxo">Conta</span></Link></li>
              <li><Link href="/events"><span className="text-gray-400 hover:text-bombou_roxo">Eventos</span></Link></li>
              <li><Link href="/contact"><span className="text-gray-400 hover:text-bombou_roxo">Contato</span></Link></li>
            </ul>
          </div>

       
          <div>
            <h2 className="text-lg font-semibold mb-4">Contato</h2>
            <p className="text-gray-400">Email: contato@bombou.com</p>
            <p className="text-gray-400">Telefone: (31) 1234-5678</p>
            <p className="text-gray-400">Endereço: github.com/monezero</p>
          </div>

         
          <div>
            <h2 className="text-lg font-semibold mb-4">Redes Sociais</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Instagram</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bombou_roxo">Twitter</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
};

export default Footer;