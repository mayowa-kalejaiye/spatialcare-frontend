import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-200">
            <Stethoscope className="w-6 h-6" />
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
            CareBridge
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
          <a href="#hospitals" className="hover:text-purple-600 transition-colors">Find Hospitals</a>
          <a href="#rights" className="hover:text-purple-600 transition-colors">Patient Rights</a>
          <a href="#emergency" className="hover:text-purple-600 transition-colors">Emergency</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition-all border border-red-100">
            Emergency
          </button>
          <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-200 transition-all transform hover:-translate-y-0.5">
            My Account
          </button>
        </div>
      </div>
    </header>
  );
}