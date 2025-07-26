"use client";

import Image from "next/image";
import Link from "next/link";

export default function DataVisualisationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Glassmorphique */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900/80 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl">
          <div className="flex items-center px-12 py-4">
            {/* Logo */}
            <div className="flex items-center mr-6">
              <Link href="/" className="cursor-pointer hover:scale-105 transition-transform duration-200 focus:outline-none">
                <Image
                  src="/logo.png"
                  alt="BeeAware Logo"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </Link>
            </div>
            
            {/* Navigation Links - Centrés */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/map" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-2xl font-kinlove">
                Map
              </a>
              <a href="/data-visualisation" className="text-amber-500 font-medium text-2xl font-kinlove">
                Data Visualisation
              </a>
              <a href="/ai-predictions" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-2xl font-kinlove">
                AI Predictions
              </a>
              <a href="/education" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-2xl font-kinlove">
                Education
              </a>
              <a href="/citizen-science" className="text-white hover:text-amber-500 transition-colors duration-200 font-medium text-2xl font-kinlove">
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
      <main className="pt-60">
        <div className="max-w-6xl mx-auto px-8">
          {/* Titre centré */}
          <div className="flex items-center justify-center mb-16">
            <h1 className="text-8xl font-black text-gray-800 font-kinlove">
              Data Visualisation
            </h1>
          </div>
        </div>
      </main>

      {/* Espace pour contenu futur */}
      <div className="py-64"></div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="BeeAware Logo"
                  width={40}
                  height={40}
                  className="rounded-lg mr-3"
                />
                <span className="text-3xl font-bold font-kinlove">BeeAware</span>
              </div>
              <p className="text-gray-300 mb-4">
                Protecting pollinators through data-driven insights and AI-powered predictions. 
                Join us in safeguarding our ecosystem&apos;s future.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-kinlove">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-gray-300 hover:text-amber-500 transition-colors">Get Involved</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-4 font-kinlove">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-300">Contact us</li>
                <li className="text-gray-300">Get in touch</li>
                <li className="text-gray-300">Support</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 BeeAware. Protecting pollinators, predicting the future.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 