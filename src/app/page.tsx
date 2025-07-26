"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Glassmorphique */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <div className="flex items-center px-12 py-5">
            {/* Logo */}
            <div className="flex items-center mr-6">
              <button 
                className="cursor-pointer hover:scale-105 transition-transform duration-200 focus:outline-none"
                onClick={() => console.log('Logo clicked')}
              >
                <Image
                  src="/logo.png"
                  alt="BeeAware Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </button>
            </div>
            
            {/* Navigation Links - Centrés */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-lg">
                Map
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-lg">
                Data Visualisation
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-lg">
                AI Predictions
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-lg">
                Education
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-lg">
                Citizen Science
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden ml-4">
              <button className="text-white hover:text-amber-500 transition-colors duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Contenu principal */}
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Ici vous pouvez ajouter le contenu de votre page */}
        </div>
      </main>
    </div>
  );
}
