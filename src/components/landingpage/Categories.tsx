import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  activeCategory: string | null;
  setActiveCategory: (category: string) => void;
}

export default function Categories({ activeCategory, setActiveCategory }: CategoriesProps) {
  const categories = [
    { name: 'Emergency Care', icon: '🚑', count: '142 Facilities' },
    { name: 'Pediatrics', icon: '👶', count: '89 Doctors' },
    { name: 'Cardiology', icon: '❤️', count: '54 Specialists' },
    { name: 'Dental Care', icon: '🦷', count: '110 Clinics' },
    { name: 'Eye Care', icon: '👁️', count: '65 Specialists' },
    { name: 'Blood Bank', icon: '🩸', count: '18 Centers' },
    { name: 'Neurology', icon: '🧠', count: '40 Specialists' },
    { name: 'Orthopedics', icon: '🦴', count: '72 Specialists' },
  ];

  return (
    <section id="services" className="py-16 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">Explore Specialties</span>
          <h2 className="text-3xl font-black text-gray-900 mt-3">Browse by healthcare category</h2>
          <p className="text-sm text-gray-500 mt-1">Pick a medical specialization to narrow down local clinics instantly.</p>
        </div>
        <button className="mt-4 md:mt-0 text-sm font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1 group">
          <span>View all categories</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveCategory(cat.name)}
            className={`p-5 rounded-2xl bg-white border transition-all cursor-pointer flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-purple-300 transform hover:-translate-y-1 ${activeCategory === cat.name ? 'border-purple-600 ring-2 ring-purple-100 bg-purple-50/20' : 'border-gray-100'}`}
          >
            <div className="text-3xl mb-3 p-3 bg-gray-50 rounded-xl w-14 h-14 flex items-center justify-center">
              {cat.icon}
            </div>
            <h4 className="font-bold text-gray-900 text-sm mb-1">{cat.name}</h4>
            <span className="text-xs text-gray-400 font-medium">{cat.count}</span>
          </div>
        ))}
      </div>
    </section>
  );
}