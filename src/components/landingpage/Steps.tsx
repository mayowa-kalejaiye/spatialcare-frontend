import React from 'react';

export default function Steps() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full">How CareBridge Works</span>
          <h2 className="text-3xl font-black text-gray-900 mt-3">Healthcare help in 3 steps</h2>
          <p className="text-sm text-gray-500 mt-2">A simple, structured system designed to bring peace of mind when you need it most.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100/60 hover:bg-purple-50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-purple-200 group-hover:scale-110 transition-transform">1</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Pinpoint Your Location</h3>
            <p className="text-sm text-gray-600">Enter your area or postal code to scan for active providers in your immediate vicinity with zero hassle.</p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100/60 hover:bg-purple-50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-purple-200 group-hover:scale-110 transition-transform">2</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Match & Compare</h3>
            <p className="text-sm text-gray-600">Review doctors, co-pay tiers, and ratings in a streamlined interface built for quick, clear decisions.</p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100/60 hover:bg-purple-50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md shadow-purple-200 group-hover:scale-110 transition-transform">3</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Navigate & Access Care</h3>
            <p className="text-sm text-gray-600">Book visits online instantly, secure prescriptions, or route your emergency needs directly to specialized triage teams.</p>
          </div>
        </div>
      </div>
    </section>
  );
}