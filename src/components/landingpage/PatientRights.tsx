import React from 'react';

export default function PatientRights() {
  return (
    <section id="rights" className="py-20 max-w-6xl mx-auto px-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-900/40 px-3 py-1 rounded-full border border-purple-700/50">Advocacy & Transparency</span>
          <h2 className="text-3xl font-black mt-4 mb-3">Your healthcare rights, completely free.</h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            Access plain-language consent resources, verify insurance coverage rules, and explore emergency rights without any hidden subscription gates or red tape.
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-300">
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700">✓ In-Network Status</span>
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700">✓ Transparent Co-pay</span>
            <span className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700">✓ Accessibility Support</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-auto shrink-0">
          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-2xl text-center">
            <h4 className="text-2xl font-black text-amber-400 mb-1">6,742</h4>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Claims Resolved</p>
          </div>
          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-2xl text-center">
            <h4 className="text-2xl font-black text-purple-400 mb-1">3,120</h4>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Advocacy Sessions</p>
          </div>
          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-2xl text-center">
            <h4 className="text-2xl font-black text-emerald-400 mb-1">1,090</h4>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Escalations Fixed</p>
          </div>
          <div className="bg-gray-800/80 border border-gray-700/60 p-6 rounded-2xl text-center">
            <h4 className="text-2xl font-black text-pink-400 mb-1">4,210</h4>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Appeals Filed</p>
          </div>
        </div>
      </div>
    </section>
  );
}