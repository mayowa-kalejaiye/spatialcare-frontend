'use client';

import React, { useState } from 'react';
import Navbar from '@/components/landingpage/Navbar';
import Hero from '@/components/landingpage/Hero';
import Steps from '@/components/landingpage/Steps';
import Categories from '@/components/landingpage/Categories';
import Hospitals, { Hospital } from '@/components/landingpage/Hospital';
import PatientRights from '@/components/landingpage/PatientRights';
import EmergencyRouting from '@/components/landingpage/EmergencyRouting';
import Footer from '@/components/landingpage/Footer';
import BookingModal from '@/components/landingpage/BookingModal';

export default function CareBridgeLanding() {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const hospitals: Hospital[] = [
    {
      id: 1,
      name: 'City General Medical Center',
      location: 'Downtown, Avenue 5',
      rating: 4.8,
      reviews: 124,
      distance: '1.2 miles away',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80',
      tag: 'Verified Partner'
    },
    {
      id: 2,
      name: 'St. Jude Healthcare Hub',
      location: 'Westside Highway',
      rating: 4.9,
      reviews: 310,
      distance: '2.5 miles away',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80',
      tag: 'Top Rated'
    },
    {
      id: 3,
      name: 'Metro Advanced Clinic',
      location: 'North District',
      rating: 4.7,
      reviews: 98,
      distance: '3.1 miles away',
      image: 'https://images.unsplash.com/photo-1538108149319-fbb6c18f972e?auto=format&fit=crop&w=600&q=80',
      tag: '24/7 Open'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for "${specialty || 'General Healthcare'}" in "${location || 'Current Location'}..."`);
  };

  const handleBookNow = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setBookingSuccess(false);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-gray-900 selection:bg-purple-600 selection:text-white">
      <Navbar />
      <Hero 
        location={location} 
        setLocation={setLocation} 
        specialty={specialty} 
        setSpecialty={setSpecialty} 
        onSearch={handleSearch} 
      />
      <Steps />
      <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Hospitals hospitals={hospitals} onBookNow={handleBookNow} />
      <PatientRights />
      <EmergencyRouting />
      <Footer />
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        hospital={selectedHospital}
        success={bookingSuccess}
        onConfirm={() => setBookingSuccess(true)}
      />
    </div>
  );
}
