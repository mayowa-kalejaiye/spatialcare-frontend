import React from 'react';
import { MapPin, ChevronDown, Phone, Calendar, Star } from 'lucide-react';

export interface Hospital {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  tag: string;
}

interface HospitalsProps {
  hospitals: Hospital[];
  onBookNow: (hospital: Hospital) => void;
}

export default function Hospitals({ hospitals, onBookNow }: HospitalsProps) {
  return (
    <section id="hospitals" className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Verified hospitals near you</h2>
            <p className="text-xs text-gray-500 mt-1">Showing active medical facilities matching your zone settings.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">Filter By:</span>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium text-gray-700 bg-gray-50 flex items-center gap-1">
              <span>Distance</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-purple-700 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    {hospital.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
                    {hospital.distance}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{hospital.name}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-purple-600" />
                    <span>{hospital.location}</span>
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center text-amber-500 font-bold text-xs bg-amber-50 px-2 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current mr-1" />
                      <span>{hospital.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({hospital.reviews} patient reviews)</span>
                  </div>

                  <div className="space-y-1.5 text-xs text-gray-600 border-t border-gray-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">In-Network Status:</span>
                      <span className="font-semibold text-emerald-600">Fully Covered</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Estimated Co-pay:</span>
                      <span className="font-semibold text-gray-900">$15.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <button 
                  onClick={() => onBookNow(hospital)}
                  className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-purple-200 flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Visit</span>
                </button>
                <button 
                  onClick={() => alert(`Calling ${hospital.name}...`)}
                  className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors border border-gray-200"
                >
                  <Phone className="w-4 h-4 text-purple-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}