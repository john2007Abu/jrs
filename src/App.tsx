// src/App.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImage from "./Asset/jrs-logo.png";
import georgeImage from "./Asset/george.jpg";
import santiagoImage from './Asset/santiago.jpg';
import years from './Asset/1376.png';
import img1 from './Asset/1.jpg';
import img2 from './Asset/2.jpg';
import img3 from './Asset/3.jpg';
import img4 from './Asset/4.jpg';
import img5 from './Asset/5.jpg';
import img6 from './Asset/6.jpg';
import img7 from './Asset/7.jpg';
import img8 from './Asset/8.jpg';
import img9 from './Asset/9.jpg';
import img10 from './Asset/10.jpg';
import { Calendar, Clock, MapPin, Youtube, Instagram, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import './index.css'; // Ensure Tailwind CSS is imported

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-30 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <img 
              src={logoImage}
              alt="Church Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="ml-3 text-xl font-bold text-gray-800 hidden sm:block">
              Saint George Punitha Santhiyagapar Aalayam
            </span>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-4">
            <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </a>
            <a href="#videos" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Videos
            </a>
            <a href="#album" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Album
            </a>
            <a href="#saints" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Saints
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="#location" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
              Location
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-2 px-4 py-2">
              <a href="#home" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#videos" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Videos
              </a>
              <a href="#album" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Album
              </a>
              <a href="#saints" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Saints
              </a>
              <a href="#services" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Services
              </a>
              <a href="#location" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" onClick={() => setIsOpen(false)}>
                Location
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

interface ServiceCardProps {
  day: string;
  time: string;
  location: string;
  service?: string;
}

function ServiceCard({ day, time, location, service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <Calendar className="h-8 w-8 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{day}</h3>
      {service && (
        <p className="text-gray-600 mb-2">{service}</p>
      )}
      <div className="flex items-center text-gray-600 mb-2">
        <Clock className="h-4 w-4 mr-2" />
        <span>{time}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="h-4 w-4 mr-2" />
        <span>{location}</span>
      </div>
    </motion.div>
  );
}

function AlbumSlider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="album" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Church Gallery</h2>
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={images[currentIndex]}
              alt={`Church Image ${currentIndex + 1}`}
              className="w-full h-[300px] sm:h-[500px] object-cover"
            />
          </motion.div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SilverJubileeAnnouncement() {
  return (
    <section id="jubilee" className="py-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Celebrating Our 25th Festival Silver Jubilee
        </h2>
        <p className="text-lg sm:text-xl mb-6 font-montserrat">
          Join us as we mark <span className="font-bold text-yellow-300">25 years</span> of faith, community, and celebration at Saint George Punitha Santhiyagapar Aalayam. Stay tuned for more details on this momentous occasion!
        </p>
        {/* Updated 25th Anniversary Logo Size */}
        <div className="mb-6">
          <img
            src={years}
            alt="25th Anniversary Logo"
            className="mx-auto w-40 h-40 sm:w-64 sm:h-64 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80"
            alt="Church Main"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-20 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-4"
          >
            <img 
              src={logoImage}
              alt="Church Logo"
              className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Saint George Punitha Santhiyagapar Aalayam</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">Join us in worship and community</p>
            <div className="flex justify-center space-x-4 flex-col sm:flex-row">
              <a 
                href="https://www.youtube.com/@JohnabrakanJohnabrakan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors mb-2 sm:mb-0 sm:mr-2"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Our Channel
              </a>
              <a 
                href="https://www.instagram.com/jrs_network" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-semibold transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                Follow Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Silver Jubilee Announcement */}
      <SilverJubileeAnnouncement />

      {/* Featured Videos - Hidden on Mobile */}
      <section id="videos" className="py-16 bg-white hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Videos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/12xWZR_pvxc"
                title="Saint George Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/cc5UIH7ROOs"
                title="Santiago Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Saints Section */}
      <section id="saints" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Patron Saints</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="overflow-hidden"
              >
                <img
                  src={georgeImage}
                  alt="Saint George"
                  className="w-full h-auto object-contain hover:cursor-pointer"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Saint George</h3>
                <p className="text-gray-600">
                  Saint George, the patron saint of warriors and protectors, known for his 
                  courage and unwavering faith. His legendary battle with the dragon symbolizes 
                  the triumph of good over evil.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="overflow-hidden"
              >
                <img
                  src={santiagoImage}
                  alt="Santiago"
                  className="w-full h-auto object-contain hover:cursor-pointer"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">Santiago (Saint James)</h3>
                <p className="text-gray-600">
                  Santiago, also known as Saint James the Greater, was one of Jesus's first 
                  disciples. He is the patron saint of pilgrims and Spain, known for his 
                  evangelizing mission in the Iberian Peninsula.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Service Times</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <ServiceCard
              day="Monday - Sunday"
              time="9:00 AM - 9:00 PM"
              location="Main Sanctuary"
            />
            <ServiceCard
              day="Wednesday"
              time="7:00 PM"
              location="Main Sanctuary"
              service="Food Distribution"
            />
            <ServiceCard
              day="Festival Time"
              time="To Be Announced"
              location="To Be Announced"
            />
          </div>
        </div>
      </section>

      {/* Album Slider */}
      <AlbumSlider />

      {/* Location Section */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Find Us</h2>
          <div className="relative w-full max-w-5xl mx-auto h-[300px] sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.833183606571!2d79.82677461482178!3d11.011883591949392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzQzLjEiTiA3OcKwNDknNDUuNiJF!5e0!3m2!1sen!2sin!4v1649713439805!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a 
              href="https://www.google.com/maps?q=11.011730665648821,79.82936000184947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;