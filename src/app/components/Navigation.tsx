import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    toggleMenu();
  };

  const menuItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.music'), href: '/music' },
    { label: t('nav.gallery'), href: '/gallery' },
    { label: t('nav.weeklyProgramming'), href: '/weekly-programming' },
    { label: t('nav.rhythmsOfFatherhood'), href: '/rhythms-of-fatherhood' },
    { label: t('nav.embraceKongo'), href: '/embrace-kongo' },
    { label: t('nav.pelisaArts'), href: '/pelisa-arts-energy' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      {/* Language Selector */}
      <div className="fixed top-0 left-0 z-50 p-6">
        <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-lg p-3 shadow-lg">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded transition-all duration-200 ${
              language === 'en' 
                ? 'bg-white text-[#FF6700]' 
                : 'text-white hover:bg-white/10'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: language === 'en' ? '600' : '400' }}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('fr')}
            className={`px-3 py-1 rounded transition-all duration-200 ${
              language === 'fr' 
                ? 'bg-white text-[#FF6700]' 
                : 'text-white hover:bg-white/10'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: language === 'fr' ? '600' : '400' }}
          >
            FR
          </button>
        </div>
      </div>

      {/* Hamburger Menu Button */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <button
          onClick={toggleMenu}
          className="p-3 bg-black/20 backdrop-blur-sm hover:bg-black/30 rounded-lg transition-all duration-200 shadow-lg"
        >
          {isOpen ? 
            <X className="h-10 w-10 text-white stroke-2" /> : 
            <Menu className="h-10 w-10 text-white stroke-2" />
          }
        </button>
      </nav>

      {/* Full-width menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gradient-to-r from-[#FF6700] to-[#FFD200] flex items-center justify-center overflow-y-auto"
          onClick={toggleMenu}
        >
          <div 
            className="text-center space-y-4 px-12 py-16 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item, index) => (
              <div key={item.label} className="overflow-hidden">
                <button
                  onClick={() => navigateTo(item.href)}
                  className="text-4xl md:text-5xl lg:text-6xl text-white hover:text-black/20 transition-all duration-300 transform hover:scale-105 px-6 py-1 w-full text-center"
                  style={{ 
                    fontFamily: 'Bebas Neue, sans-serif',
                    letterSpacing: '0.05em',
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen ? 'slideInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CSS Animation for slide-in effect */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}