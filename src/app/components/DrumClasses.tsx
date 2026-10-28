import image_8d55842bbbd80c929b150795c96e9deb16b3260b from '../../../assets/8d55842bbbd80c929b150795c96e9deb16b3260b.png';
import image_48e0566c2e2006c2b1e164847581a02bff2b56c7 from '../../../assets/48e0566c2e2006c2b1e164847581a02bff2b56c7.png';
import image_a45cb623a9c4c875b03ee3b21458b4f4106d10c4 from '../../../assets/a45cb623a9c4c875b03ee3b21458b4f4106d10c4.png';
import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import Footer from './Footer';
import danceClassImage from '../../../assets/8b8222dd18701cd127479acf263a76afa934706b.png';
import drumTeachingImage from '../../../assets/4a8617c958c5a5071a855cab540743bcc3503bab.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function DrumClasses() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
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
            {t('drumClasses.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Classes Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            
            {/* Drum Class Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Drum Class Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-fit">
                <div className="bg-gradient-to-r from-[#FF6700] to-[#FFD200] text-white p-8">
                  <h3 
                    className="text-2xl md:text-3xl" 
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                  >
                    {t('drumClasses.drum.title')}
                  </h3>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Time */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#FF6700] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {t('drumClasses.drum.time')}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF6700] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {t('drumClasses.drum.location')}
                        </p>
                        <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {t('drumClasses.drum.address')}<br />
                          {t('drumClasses.drum.street')}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('drumClasses.drum.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drum Class Image */}
              <div className="order-first lg:order-last">
                <img
                  src={image_8d55842bbbd80c929b150795c96e9deb16b3260b}
                  alt="Kiazi teaching drum class"
                  className="w-full h-[580px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Dance Class Row */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Dance Class Image */}
              <div>
                <img
                  src={image_a45cb623a9c4c875b03ee3b21458b4f4106d10c4}
                  alt="Congolese dance class in action"
                  className="w-full h-[750px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Dance Class Card */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-fit">
                <div className="bg-gradient-to-r from-[#FF6700] to-[#FFD200] text-white p-8">
                  <h3 
                    className="text-2xl md:text-3xl" 
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                  >
                    {t('drumClasses.dance.title')}
                  </h3>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    {/* Time */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#FF6700] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {t('drumClasses.dance.time')}
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#FF6700] mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {t('drumClasses.dance.location')}
                        </p>
                        <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                          {t('drumClasses.dance.address')}<br />
                          {t('drumClasses.dance.street')}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('drumClasses.dance.description1')}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('drumClasses.dance.description2')}
                      </p>
                      <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {t('drumClasses.dance.description3')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-4xl md:text-5xl mb-8" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('drumClasses.cta.title')}
          </motion.h2>
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
              {t('drumClasses.cta.button')}
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
