import image_5f3cef95d29e2a40cc3f124885bef9c7bbe80d29 from '../../../assets/5f3cef95d29e2a40cc3f124885bef9c7bbe80d29.png';
import image_7ebef2a405aee2a38c12019e7f295b07ff3f8da8 from '../../../assets/7ebef2a405aee2a38c12019e7f295b07ff3f8da8.png';
import image_c62b4abf2097535a4ff2c5bd8b73c615b0c2cb10 from '../../../assets/c62b4abf2097535a4ff2c5bd8b73c615b0c2cb10.png';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import PatreonIcon from './icons/PatreonIcon';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
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
            {t('contact.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* First Contact Image - Shows on both mobile and desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <ImageWithFallback
                src={image_7ebef2a405aee2a38c12019e7f295b07ff3f8da8}
                alt="Professional musician studio contact"
                className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
              />
              {/* Second Image - Desktop only, stacked below first */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block mt-6"
              >
                <ImageWithFallback
                  src={image_5f3cef95d29e2a40cc3f124885bef9c7bbe80d29}
                  alt="Communication collaboration music"
                  className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Let's Work Together Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 
                  className="text-4xl md:text-5xl mb-6" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('contact.work.title')}
                </h2>
                <p className="text-lg mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('contact.work.description')}
                </p>
                
                {/* Contact Form Embed */}
                <div className="bg-white rounded-lg shadow-md mb-6">
                  <iframe
                    src="https://us17.list-manage.com/contact-form?u=1716d81d50a706238e82e6cf4&form_id=20b6760f505ab5815b46bb322502d903"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Contact Form"
                  />
                </div>

                {/* OR Divider */}
                <div className="flex items-center my-8">
                  <div className="flex-1 border-t border-gray-300"></div>
                  <span className="px-4 text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>{t('contact.or')}</span>
                  <div className="flex-1 border-t border-gray-300"></div>
                </div>
                
                {/* Email CTA Button */}
                <a
                  href="mailto:malongakiazi@gmail.com"
                  className="w-full bg-black hover:bg-gray-800 text-white py-4 px-6 rounded-lg text-lg mb-8 transition-all duration-200 flex items-center justify-center no-underline"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {t('contact.email.button')}
                </a>

                {/* Social Links */}
                <div>
                  <h4 
                    className="text-lg mb-4" 
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                  >
                    {t('contact.social.title')}
                  </h4>
                  <div className="flex space-x-4">
                    {[
                      { Icon: Instagram, href: 'https://www.instagram.com/malonga_music/', label: 'Instagram' },
                      { Icon: Facebook, href: 'https://www.facebook.com/MALONGAMUSIC', label: 'Facebook' },
                      { Icon: TikTokIcon, href: 'https://www.tiktok.com/@malonga_music', label: 'TikTok' },
                      { Icon: SpotifyIcon, href: 'https://open.spotify.com/artist/00azyHPMjeELyFLc2uBxWg', label: 'Spotify' },
                      { Icon: Youtube, href: 'https://www.youtube.com/@malonga_music', label: 'YouTube' },
                      { Icon: PatreonIcon, href: 'https://patreon.com/MalongaMusic?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_fan&utm_content=join_link', label: 'Patreon' }
                    ].map(({ Icon, href, label }, index) => (
                      <motion.a 
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="w-12 h-12 bg-[#FF6700] hover:bg-[#e55a00] text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        title={label}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Image - Mobile only, appears at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:hidden mt-12"
          >
            <ImageWithFallback
              src={image_5f3cef95d29e2a40cc3f124885bef9c7bbe80d29}
              alt="Communication collaboration music"
              className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}