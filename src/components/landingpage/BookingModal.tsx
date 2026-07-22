import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { Hospital } from './Hospital';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  hospital: Hospital | null;
  success: boolean;
  onConfirm: () => void;
}

export default function BookingModal({ isOpen, onClose, hospital, success, onConfirm }: BookingModalProps) {
  if (!isOpen || !hospital) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!success ? (
          <div>
            <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-2.5 py-1 rounded-full">Secure Appointment</span>
            <h3 className="text-xl font-black text-gray-900 mt-3 mb-1">Book Visit at {hospital.name}</h3>
            <p className="text-xs text-gray-500 mb-6">{hospital.location} • {hospital.distance}</p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Select Appointment Date</label>
                <input type="date" defaultValue="2026-06-15" className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 focus:outline-none focus:border-purple-600" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Select Time Slot</label>
                <select className="w-full px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 focus:outline-none focus:border-purple-600">
                  <option>09:00 AM - 09:30 AM</option>
                  <option>11:15 AM - 11:45 AM</option>
                  <option>02:30 PM - 03:00 PM</option>
                </select>
              </div>
              <div className="p-3 bg-purple-50 rounded-xl border border-purple-100 text-xs text-purple-800 flex justify-between">
                <span>Estimated Patient Co-Pay:</span>
                <strong className="font-bold">$15.00 (In-Network)</strong>
              </div>
            </div>

            <button 
              onClick={onConfirm}
              className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl shadow-lg shadow-purple-200 transition-all text-sm"
            >
              Confirm & Secure Booking
            </button>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Appointment Confirmed!</h3>
            <p className="text-xs text-gray-500 mb-6">
              Your visit has been securely registered with <strong>{hospital.name}</strong>. A verification ticket has been sent to your account profile.
            </p>
            <button 
              onClick={onClose}
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl text-xs hover:bg-black transition-colors"
            >
              Close & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
}