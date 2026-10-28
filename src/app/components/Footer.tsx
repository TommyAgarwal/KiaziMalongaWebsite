import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';
import SpotifyIcon from './icons/SpotifyIcon';
import PatreonIcon from './icons/PatreonIcon';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  
  return (
    <motion.footer 
      className="bg-[#FF6700] text-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-2">
              {[
                { label: t('nav.home'), href: '/' },
                { label: t('nav.about'), href: '/about' },
                { label: t('nav.music'), href: '/music' },
                { label: t('nav.gallery'), href: '/gallery' },
                { label: t('nav.weeklyProgramming'), href: '/weekly-programming' },
                { label: t('nav.rhythmsOfFatherhood'), href: '/rhythms-of-fatherhood' },
                { label: t('nav.embraceKongo'), href: '/embrace-kongo' },
                { label: t('nav.pelisaArts'), href: '/pelisa-arts-energy' },
                { label: t('nav.contact'), href: '/contact' }
              ].map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <button 
                    onClick={() => navigateTo(item.href)}
                    className="hover:text-yellow-200 transition-colors duration-200 text-left"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
              {t('footer.followKiazi')}
            </h3>
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
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-yellow-200 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                  title={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
              {t('footer.connect')}
            </h3>
            <p className="mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('footer.connectText')}
            </p>
            <Button
              className="bg-white text-[#FF6700] hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-200 mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => navigateTo('/contact')}
            >
              {t('footer.contactButton')}
            </Button>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h3 
                className="text-2xl mb-4" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
              >
                {t('footer.stayConnected')}
              </h3>
              <p className="text-white/90 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('footer.newsletterText')}
              </p>
              <form 
                action="https://gmail.us17.list-manage.com/subscribe/post?u=1716d81d50a706238e82e6cf4&amp;id=e8115a7de5&amp;f_id=00aafee0f0" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank"
              >
                <div className="space-y-3">
                  <input 
                    type="email" 
                    name="EMAIL" 
                    className="w-full px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white bg-white/20 text-white placeholder:text-white/70" 
                    id="mce-EMAIL" 
                    placeholder={t('footer.emailPlaceholder')}
                    required
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  />
                  {/* Real people should not fill this in */}
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_1716d81d50a706238e82e6cf4_e8115a7de5" tabIndex={-1} defaultValue="" />
                  </div>
                  <button 
                    type="submit" 
                    name="subscribe" 
                    id="mc-embedded-subscribe" 
                    className="bg-white text-[#FF6700] hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-200"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}
                  >
                    {t('footer.subscribe')}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white border-opacity-30 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('footer.copyright')}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}