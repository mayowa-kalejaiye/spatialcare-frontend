import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white text-purple-700 flex items-center justify-center font-bold">
              <Stethoscope className="w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tight">CareBridge</span>
          </div>
          <p className="text-xs text-purple-200 leading-relaxed">
            Simplifying healthcare accessibility, verified hospital booking, and patient advocacy worldwide.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-purple-200">Services</h4>
          <ul className="space-y-2 text-xs text-purple-100 font-medium">
            <li><a href="#" className="hover:underline">Find a Doctor</a></li>
            <li><a href="#" className="hover:underline">Hospitals Near Me</a></li>
            <li><a href="#" className="hover:underline">Emergency Routing</a></li>
            <li><a href="#" className="hover:underline">Co-pay Calculator</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-purple-200">Resources</h4>
          <ul className="space-y-2 text-xs text-purple-100 font-medium">
            <li><a href="#" className="hover:underline">Patient Rights</a></li>
            <li><a href="#" className="hover:underline">Insurance Networks</a></li>
            <li><a href="#" className="hover:underline">Accessibility Help</a></li>
            <li><a href="#" className="hover:underline">Medical Glossary</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm mb-4 uppercase tracking-wider text-purple-200">Company</h4>
          <ul className="space-y-2 text-xs text-purple-100 font-medium">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 border-t border-purple-600 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-200">
        <p>© 2026 CareBridge Technologies Inc. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Security</a>
        </div>
      </div>
    </footer>
  );
}