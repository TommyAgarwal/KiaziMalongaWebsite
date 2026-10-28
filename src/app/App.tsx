import { useState, useEffect } from 'react';
import image_4e162a35e3e63470df792be410940ec6f43974cb from '../../assets/4e162a35e3e63470df792be410940ec6f43974cb.png';
import image_390b21ffea3fbf4cbcb20d6856411760b601fb97 from '../../assets/390b21ffea3fbf4cbcb20d6856411760b601fb97.png';
import bilokoYaMbokaCover from '../../assets/b8a8281a39b0e4d621e5e72e8cbc4ac01034ca95.png';
import mbanzaKongoCover from '../imports/Mbanza-Kongo.JPG';
import Navigation from './components/Navigation';
import About from './components/About';
import Music from './components/Music';
import Gallery from './components/Gallery';
import DrumClasses from './components/DrumClasses';
import RhythmsOfFatherhood from './components/RhythmsOfFatherhood';
import PelisaArtsEnergy from './components/PelisaArtsEnergy';
import EmbraceKongo from './components/EmbraceKongo';
import Contact from './components/Contact';
import PressVideoCarousel from './components/PressVideoCarousel';
import BrandPartnerships from './components/BrandPartnerships';
import Footer from './components/Footer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Checkbox } from './components/ui/checkbox';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import TikTokIcon from './components/icons/TikTokIcon';
import SpotifyIcon from './components/icons/SpotifyIcon';
import PatreonIcon from './components/icons/PatreonIcon';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation based on URL pathname
  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname.slice(1); // Remove the leading /
      if (path === 'about') {
        setCurrentPage('about');
      } else if (path === 'music') {
        setCurrentPage('music');
      } else if (path === 'gallery') {
        setCurrentPage('gallery');
      } else if (path === 'weekly-programming') {
        setCurrentPage('drum-classes');
      } else if (path === 'rhythms-of-fatherhood') {
        setCurrentPage('rhythms-of-fatherhood');
      } else if (path === 'pelisa-arts-energy') {
        setCurrentPage('pelisa-arts-energy');
      } else if (path === 'embrace-kongo') {
        setCurrentPage('embrace-kongo');
      } else if (path === 'contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial pathname
    handleRouteChange();
    
    // Listen for popstate (back/forward navigation)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // If we're on the about page, show the About component
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <About />
      </div>
    );
  }

  // If we're on the music page, show the Music component
  if (currentPage === 'music') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Music />
      </div>
    );
  }

  // If we're on the gallery page, show the Gallery component
  if (currentPage === 'gallery') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Gallery />
      </div>
    );
  }

  // If we're on the drum classes page, show the DrumClasses component
  if (currentPage === 'drum-classes') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <DrumClasses />
      </div>
    );
  }

  // If we're on the rhythms of fatherhood page, show the RhythmsOfFatherhood component
  if (currentPage === 'rhythms-of-fatherhood') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <RhythmsOfFatherhood />
      </div>
    );
  }

  // If we're on the pelisa arts energy page, show the PelisaArtsEnergy component
  if (currentPage === 'pelisa-arts-energy') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <PelisaArtsEnergy />
      </div>
    );
  }

  // If we're on the embrace kongo page, show the EmbraceKongo component
  if (currentPage === 'embrace-kongo') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <EmbraceKongo />
      </div>
    );
  }

  // If we're on the contact page, show the Contact component
  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <Contact />
      </div>
    );
  }

  // Otherwise show the homepage
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden bg-gradient-to-r from-[#FF6700] to-[#FFD200]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => console.log('Video loaded successfully')}
          onError={(e) => {
            console.error('Video loading error:', e);
            // Fallback to a solid background if video fails
            const videoElement = e.target as HTMLVideoElement;
            if (videoElement.parentElement) {
              videoElement.parentElement.style.backgroundColor = '#FF6700';
              videoElement.style.display = 'none';
            }
          }}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="https://res.cloudinary.com/dfy8qucpv/video/upload/v1758671330/landingvideo_pakyiq.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        {/* Hero content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-8xl md:text-9xl mb-6 tracking-wider" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl opacity-90" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-5xl md:text-6xl mb-4 text-black tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('homepage.rhythmicRealignment')}
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl mb-12 text-[#FF6700]" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('homepage.corporateTeamBuilding')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              className="bg-[#FF6700] hover:bg-[#e55a00] text-white px-8 py-6 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => {
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              {t('homepage.contactNow')}
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Short Bio Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              className="order-1 lg:order-1 h-full"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ImageWithFallback
                src={image_4e162a35e3e63470df792be410940ec6f43974cb}
                alt="Kiazi Malonga"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="order-2 lg:order-2 text-white"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl leading-relaxed mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('homepage.bio1')}
              </p>
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('homepage.bio2')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Music Highlight Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-5xl md:text-6xl mb-4 text-black tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('homepage.grammyTitle')}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-[#FF6700]" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('homepage.grammyCategory')}
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-8">
            <motion.div 
              className="w-64 h-64"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ImageWithFallback
                src={mbanzaKongoCover}
                alt="Mbanza Kongo Single Cover Art"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-3xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                Mbanza Kongo
              </h3>
              <Button 
                className="bg-[#FF6700] hover:bg-[#e55a00] text-white px-6 py-3 rounded-lg transition-all duration-200"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => window.open('https://youtu.be/B6RdwZqCD5Q?is=nFDBT1qrHwNBSkhD', '_blank', 'noopener,noreferrer')}
              >
                {t('homepage.listenNow')}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Press Appearances Video Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200] overflow-visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full">
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-4 text-white tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('homepage.pressTitle')}
          </motion.h2>
          <PressVideoCarousel />
        </div>
      </motion.section>

      {/* Brand Partnerships Section */}
      <BrandPartnerships />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
