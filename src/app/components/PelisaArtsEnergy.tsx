import image_248441da47d7ab5a1e27825e7e3754260fd274dd from '../../../assets/248441da47d7ab5a1e27825e7e3754260fd274dd.png';
import image_793616e1c9acece3bd33f4d4bc79dd591b450a95 from '../../../assets/793616e1c9acece3bd33f4d4bc79dd591b450a95.png';
import image_91e0c2216518cd343e4cc36e602792576f48f6a4 from '../../../assets/91e0c2216518cd343e4cc36e602792576f48f6a4.png';
import image_180c33a7cd87c35846e03061a3489f5a6f97a036 from '../../../assets/180c33a7cd87c35846e03061a3489f5a6f97a036.png';
import image_20747eb03d881e991eda25ec195e619b65e3d0ec from '../../../assets/20747eb03d881e991eda25ec195e619b65e3d0ec.png';
import image_87ae1ad3e3e6cecaf8279947d9ba941fdc7d966b from '../../../assets/87ae1ad3e3e6cecaf8279947d9ba941fdc7d966b.png';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function PelisaArtsEnergy() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <motion.section 
        className="relative py-32 bg-gradient-to-r from-[#FF6700] to-[#FFD200] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1 
            className="text-6xl md:text-8xl text-white tracking-wider" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('pelisa.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Mission & Purpose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <motion.h2 
            className="text-4xl md:text-5xl mb-12" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('pelisa.mission.title')}
          </motion.h2>

          {/* First Section - Image on Left, Text on Right (Desktop) */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ImageWithFallback
                  src={image_793616e1c9acece3bd33f4d4bc79dd591b450a95}
                  alt="Cultural heritage dance performance"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('pelisa.mission.paragraph1')}
              </p>
            </div>
          </motion.div>

          {/* Second Section - Text on Left, Image on Right (Desktop) */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-2 lg:order-1">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('pelisa.mission.paragraph2')}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ImageWithFallback
                  src={image_248441da47d7ab5a1e27825e7e3754260fd274dd}
                  alt="Community engagement and cultural preservation in Congo"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-8 text-center text-white" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            >
              {t('pelisa.who.title')}
            </h2>
            <div className="space-y-8 text-center">
              <p className="text-lg leading-relaxed text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('pelisa.who.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('pelisa.who.paragraph2')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-16 tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('pelisa.programs.title')}
          </motion.h2>

          <div className="space-y-16">
            {/* Ngoma Drumming Program - Image Left, Text Right */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-1 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={image_180c33a7cd87c35846e03061a3489f5a6f97a036}
                    alt="African drumming community session"
                    className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              </div>
              <div className="order-2 lg:order-2">
                <h3 
                  className="text-3xl mb-6" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('pelisa.programs.ngoma.title')}
                </h3>
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('pelisa.programs.ngoma.description')}
                </p>
              </div>
            </motion.div>

            {/* Educational Outreach - Text Left, Image Right */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="order-2 lg:order-1">
                <h3 
                  className="text-3xl mb-6" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('pelisa.programs.outreach.title')}
                </h3>
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('pelisa.programs.outreach.description')}
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ImageWithFallback
                    src={image_20747eb03d881e991eda25ec195e619b65e3d0ec}
                    alt="Youth education workshop"
                    className="w-full h-[350px] object-cover rounded-2xl shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Additional Programs */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('pelisa.programs.mbongui.title')}
                </h3>
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('pelisa.programs.mbongui.description')}
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 
                  className="text-2xl mb-4" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('pelisa.programs.justice.title')}
                </h3>
                <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('pelisa.programs.justice.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renewable Energy Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ImageWithFallback
                  src={image_87ae1ad3e3e6cecaf8279947d9ba941fdc7d966b}
                  alt="Renewable energy sustainable development"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </div>
            <div className="order-2 lg:order-2">
              <h2 
                className="text-4xl md:text-5xl mb-8 text-white" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
              >
                {t('pelisa.energy.title')}
              </h2>
              <p className="text-lg leading-relaxed text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('pelisa.energy.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl mb-8" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            >
              {t('pelisa.cta.title')}
            </h2>
            <p 
              className="text-xl mb-8 text-gray-700" 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('pelisa.cta.description')}
            </p>
            <Button 
              className="bg-[#FF6700] hover:bg-[#e55a00] text-white px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => window.open('https://www.paypal.com/ncp/payment/Z54Y7LSE9H5AA', '_blank')}
            >
              {t('pelisa.cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
