import image_032ef425dd17dd4d50509d609ae39772d54f5f30 from '../../../assets/032ef425dd17dd4d50509d609ae39772d54f5f30.png';
import image_eadc3b4261302621767bb1b0e60c4b4621a45237 from '../../../assets/eadc3b4261302621767bb1b0e60c4b4621a45237.png';
import image_83f5137f099cd066b21809ecaa22e927de7a36b6 from '../../../assets/83f5137f099cd066b21809ecaa22e927de7a36b6.png';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Header Section */}
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
{t('about.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Bio Section 1 - Background and Lineage */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-1 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ImageWithFallback
                src={image_032ef425dd17dd4d50509d609ae39772d54f5f30}
                alt="Kiazi Malonga Traditional Drumming"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="order-2 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('about.bio1')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bio Section 2 - The Ngoma */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 lg:order-1 text-white"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('about.bio3')}
              </p>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ImageWithFallback
                src={image_eadc3b4261302621767bb1b0e60c4b4621a45237}
                alt="Traditional Congo Drums - Ngoma"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bio Section 3 - Mission and Legacy */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-1 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ImageWithFallback
                src={image_83f5137f099cd066b21809ecaa22e927de7a36b6}
                alt="Kiazi Malonga performing"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              className="order-2 lg:order-2 text-gray-800"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('about.bio4')}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}