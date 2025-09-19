"use client";

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { title: 'Sobre Mí', href: '#sobre-mi' },
    { title: 'Marcas', href: '#marcas' },
    { title: 'Trayectoria', href: '#trayectoria' },
    { title: 'Logros', href: '#logros' },
    { title: 'Escenarios Mundiales', href: '#escenarios' },
    { title: 'Valores', href: '#valores' },
    { title: 'Agenda Próxima', href: '#agenda' }
  ];

  const ArrowIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1"/>
      <path d="M8 6l4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  );

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 ${isMobile ? 'bg-black' : 'bg-black bg-opacity-80'}`}>
      {!isMobile && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23333"/><circle cx="30" cy="40" r="20" fill="%23555" opacity="0.5"/><rect x="60" y="20" width="30" height="40" fill="%23444" opacity="0.3"/></svg>')`
          }}
        />
      )}

      <div className={`relative h-full ${isMobile ? 'bg-black' : 'bg-black bg-opacity-90'} text-white`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center">
              <h1 className="text-nav">
                JOSÉ DANIEL <span className="font-bold">UGALDE</span>
              </h1>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors p-2"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      console.log(`Navegando a: ${item.title}`);
                    }}
                    className="flex items-center justify-between group py-2 hover:text-gray-300 transition-colors"
                  >
                    <span className="text-nav">
                      {item.title}
                    </span>
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      <ArrowIcon />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 pb-8 border-t border-gray-700 pt-8">
            <div className="space-y-4">
              <h2 className="text-nav">
                LET'S COLLABORATE
              </h2>
              <button
                onClick={() => {
                  onClose();
                  console.log('Contactar clickeado');
                }}
                className="w-full bg-white text-black py-3 px-6 rounded-full text-button hover:bg-gray-200 transition-colors"
              >
                CONTACTAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;