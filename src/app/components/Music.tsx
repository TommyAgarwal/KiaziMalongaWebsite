import image_dfcf8cdcd171b52f6ab8301140b7c8ecb363f14f from '../../../assets/dfcf8cdcd171b52f6ab8301140b7c8ecb363f14f.png';
import mbanzaKongoCover from '../../imports/Mbanza-Kongo.JPG';
import viensAuDosCover from '../../imports/5F60F3E9-0D1D-4C7D-BF4B-90EA0A01B16C-1.PNG';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Play, ExternalLink } from 'lucide-react';
import Footer from './Footer';
import bilokoYaMbokaCover from '../../../assets/b8a8281a39b0e4d621e5e72e8cbc4ac01034ca95.png';
import zuDiaNgomaCover from '../../../assets/55af77d3fc1903fa90aac3d6dda9e5dcdc37ce02.png';
import temboKiaNgomaCover from '../../../assets/a79df9484852fbd56022cceb1bd95587fd1c9984.png';
import YouTubeTape from './YouTubeTape';
import { useLanguage } from '../contexts/LanguageContext';

export default function Music() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
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
{t('music.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Albums Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-16 text-black tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
{t('music.discography')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Mbanza Kongo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <a 
                href="https://youtu.be/B6RdwZqCD5Q?is=nFDBT1qrHwNBSkhD"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="relative group">
                  <ImageWithFallback
                    src={mbanzaKongoCover}
                    alt="Mbanza Kongo Single Cover"
                    className="w-full aspect-square object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-100"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('music.newSingle')}</span>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Viens Au Dos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <a 
                href="https://distrokid.com/hyperfollow/emiliolacasseandkiazimalonga/viens-au-dos/"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <ImageWithFallback
                  src={viensAuDosCover}
                  alt="Viens Au Dos Single Cover"
                  className="w-full aspect-square object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-100"
                />
              </a>
            </motion.div>

            {/* Biloko ya Mboka */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <a 
                href="https://ffm.to/kiazi-biloko-ya-mboka"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <ImageWithFallback
                  src={bilokoYaMbokaCover}
                  alt="Biloko ya Mboka Album Cover"
                  className="w-full aspect-square object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-100"
                />
              </a>
            </motion.div>

            {/* Zu Dia Ngoma */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <a 
                href="https://ffm.to/kiazi-zu-dia-ngoma"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <ImageWithFallback
                  src={zuDiaNgomaCover}
                  alt="Zu Dia Ngoma Album Cover"
                  className="w-full aspect-square object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-100"
                />
              </a>
            </motion.div>

            {/* Tembo Kia Ngoma */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            >
              <a 
                href="https://ffm.to/kiazi-tembo-kia-ngoma"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <ImageWithFallback
                  src={temboKiaNgomaCover}
                  alt="Tembo Kia Ngoma Album Cover"
                  className="w-full aspect-square object-cover rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-100"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Music Videos Section */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-5xl md:text-6xl text-center mb-16 text-black tracking-wide" 
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
{t('music.videos')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://www.youtube.com/embed/B6RdwZqCD5Q",
              "https://www.youtube.com/embed/gvRwivWvaDo",
              "https://www.youtube.com/embed/xswYWX6pL24", 
              "https://www.youtube.com/embed/OVSmsrdnsxc",
              "https://www.youtube.com/embed/TAOWMEPqj7Q",
              "https://www.youtube.com/embed/TeZzUz2aeUQ",
              "https://www.youtube.com/embed/tmScd8pSGMs",
              "https://www.youtube.com/embed/oDt2pVTmpes"
            ].map((embedUrl, index) => (
              <motion.div 
                key={embedUrl}
                className="rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title={`Kiazi Malonga Music Video ${index + 1}`}
                    className="w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Streaming Platforms CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-white" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
{t('music.streamingCta')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="https://linktr.ee/KiaziMalonga"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-[#FF6700] px-8 py-4 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 inline-block"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            >
{t('music.listenNow')}
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* YouTube Shorts Section */}
      <motion.section 
        className="py-20 bg-white overflow-visible"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full">
          <YouTubeTape />
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
