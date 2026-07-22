import React from 'react';
import { Search, MapPin, Stethoscope } from 'lucide-react';

interface HeroProps {
  location: string;
  setLocation: (val: string) => void;
  specialty: string;
  setSpecialty: (val: string) => void;
  onSearch: (e: React.FormEvent) => void;
}

export default function Hero({ location, setLocation, specialty, setSpecialty, onSearch }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-6 tracking-wide animate-pulse">
          <span>✨ AI-Powered Instant Patient Matching & Care Navigation</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
          Find Healthcare, <span className="text-purple-600 underline decoration-purple-200 decoration-wavy">Fast.</span>
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Discover verified local facilities, doctors near you, and secure instant bookings with complete transparency on co-pays and networks.
        </p>

        <form onSubmit={onSearch} className="bg-white p-3 rounded-2xl shadow-xl shadow-purple-900/5 border border-gray-100 flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto items-center">
          <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/2 bg-gray-50 rounded-xl border border-transparent focus-within:border-purple-500 focus-within:bg-white transition-all">
            <MapPin className="w-5 h-5 text-purple-600 shrink-0" />
            <input 
              type="text" 
              placeholder="Enter location, hospital name, or USA..." 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="flex items-center gap-3 px-4 py-3 w-full sm:w-1/3 bg-gray-50 rounded-xl border border-transparent focus-within:border-purple-500 focus-within:bg-white transition-all">
            <Stethoscope className="w-5 h-5 text-purple-600 shrink-0" />
            <input 
              type="text" 
              placeholder="All Specialties" 
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full bg-transparent text-sm focus:outline-none text-gray-800 placeholder-gray-400"
            />
          </div>

          <button 
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-md shadow-purple-200 flex items-center justify-center gap-2 shrink-0"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </form>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-gray-500 font-medium">
          <div className="flex -space-x-2">
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="user" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="user" />
            <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="user" />
          </div>
          <span>Trusted by over <strong>120K+ patients</strong> nationwide</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <h3 className="text-3xl font-black text-purple-600 mb-1">12,400+</h3>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Verified Facilities</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <h3 className="text-3xl font-black text-purple-600 mb-1">36</h3>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">State Networks</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <h3 className="text-3xl font-black text-purple-600 mb-1">4.2M+</h3>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Care Related</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
          <h3 className="text-3xl font-black text-purple-600 mb-1">520+</h3>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Doc Appraisals / Resident</p>
        </div>
      </div>
    </section>
  );
}