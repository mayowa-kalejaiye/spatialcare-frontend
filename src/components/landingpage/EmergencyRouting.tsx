import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function EmergencyRouting() {
  const emergencies = [
    { title: 'Chest Pain', icon: '❤️', desc: 'Cardiac triage unit' },
    { title: 'Accidents', icon: '🚑', desc: 'Trauma dispatch' },
    { title: 'Severe Burn', icon: '🔥', desc: 'Burn specialized unit' },
    { title: 'Pediatric Trauma', icon: '👶', desc: 'Children emergency' },
    { title: 'Blood Shortage', icon: '🩸', desc: 'Urgent donor link' },
    { title: 'Toxic Exposure', icon: '🧪', desc: 'Poison control center' },
    { title: 'Mental Crisis', icon: '🧠', desc: 'Behavioral support' },
    { title: 'Eye Injury', icon: '👁️', desc: 'Ophthalmology care' },
  ];

  return (
    <section id="emergency" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-xs font-bold text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">Urgent Response Center</span>
        <h2 className="text-3xl font-black text-gray-900 mt-3">Emergency routing for every situation</h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">Get connected directly to specialized triage units based on immediate physical symptoms.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {emergencies.map((em, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-red-50/30 border border-red-100 hover:bg-red-50/70 transition-all cursor-pointer text-left group">
              <span className="text-2xl mb-3 block">{em.icon}</span>
              <h4 className="font-bold text-gray-900 text-sm mb-0.5">{em.title}</h4>
              <p className="text-xs text-gray-500">{em.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => alert('Initiating Emergency Hotline connection...') }
          className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-200 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
        >
          <AlertCircle className="w-5 h-5" />
          <span>Emergency Hotline Connect</span>
        </button>
      </div>
    </section>
  );
}