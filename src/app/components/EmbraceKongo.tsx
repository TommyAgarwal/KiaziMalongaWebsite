import image_88df9ce1c8be0cd1382ff31ff5b2b35cf8869b27 from '../../../assets/88df9ce1c8be0cd1382ff31ff5b2b35cf8869b27.png';
import image_0cdd26dc66d6cb8642ede771fc255cb2b9071bca from '../../../assets/0cdd26dc66d6cb8642ede771fc255cb2b9071bca.png';
import image_399b099394b95129f76d84c07f565315f2c1b741 from '../../../assets/399b099394b95129f76d84c07f565315f2c1b741.png';
import image_b377e108031d26ca6fe84cf105eac5fb29eeb122 from '../../../assets/b377e108031d26ca6fe84cf105eac5fb29eeb122.png';
import image_cc90780f91a5c9e0158d765fc3cffc8ea33bbc3e from '../../../assets/cc90780f91a5c9e0158d765fc3cffc8ea33bbc3e.png';
import image_724cd399d0d04834754ed9008e7fbab619aa8db1 from '../../../assets/724cd399d0d04834754ed9008e7fbab619aa8db1.png';
import image_adb8bb9b46f07ae7d685ba5235a064c0114d6ada from '../../../assets/adb8bb9b46f07ae7d685ba5235a064c0114d6ada.png';
import image_a3ec3e73a4e6d4fd4887846be877d1f8dfb3516f from '../../../assets/a3ec3e73a4e6d4fd4887846be877d1f8dfb3516f.png';
import image_9712b351e42d38ed603425f2a3149556b601c0ad from '../../../assets/9712b351e42d38ed603425f2a3149556b601c0ad.png';
import image_84ee9e7462baac6758b099b69dbbcba49d952a90 from '../../../assets/84ee9e7462baac6758b099b69dbbcba49d952a90.png';
import image_608ed22e8a46a9bc81c7ab450c7677deb5cd1d51 from '../../../assets/608ed22e8a46a9bc81c7ab450c7677deb5cd1d51.png';
import image_a3fc8a40a7516482b54d91d7004728e0f40c5994 from '../../../assets/a3fc8a40a7516482b54d91d7004728e0f40c5994.png';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function EmbraceKongo() {
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
            {t('embraceKongo.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Photo Carousel Section */}
      <motion.section 
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[
                  {
                    src: image_399b099394b95129f76d84c07f565315f2c1b741,
                    alt: "Congo River and African culture",
                    title: "The Congo River"
                  },
                  {
                    src: image_9712b351e42d38ed603425f2a3149556b601c0ad,
                    alt: "Traditional African drummers performing",
                    title: "Master Drummers"
                  },
                  {
                    src: image_a3ec3e73a4e6d4fd4887846be877d1f8dfb3516f,
                    alt: "African marketplace with traditional artisans",
                    title: "Artisan Markets"
                  },
                  {
                    src: image_adb8bb9b46f07ae7d685ba5235a064c0114d6ada,
                    alt: "African dance ceremony",
                    title: "Cultural Dance"
                  },
                  {
                    src: image_724cd399d0d04834754ed9008e7fbab619aa8db1,
                    alt: "Historic architecture in Brazzaville",
                    title: "Historic Landmarks"
                  },
                  {
                    src: image_cc90780f91a5c9e0158d765fc3cffc8ea33bbc3e,
                    alt: "Traditional African cooking and street food",
                    title: "Local Cuisine"
                  },
                  {
                    src: image_0cdd26dc66d6cb8642ede771fc255cb2b9071bca,
                    alt: "Beautiful African sunset over river landscape",
                    title: "Natural Beauty"
                  }
                ].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="cursor-pointer">
                      <ImageWithFallback
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              <CarouselNext className="hidden md:flex -right-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 
                className="text-3xl mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
              >
                {t('embraceKongo.section1.title')}
              </h3>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('embraceKongo.section1.description')}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ImageWithFallback
                src={image_608ed22e8a46a9bc81c7ab450c7677deb5cd1d51}
                alt="Congo cultural immersion workshop"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ImageWithFallback
                src={image_88df9ce1c8be0cd1382ff31ff5b2b35cf8869b27}
                alt="Traditional Congolese art and artifacts"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h3 
                className="text-3xl mb-6" 
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
              >
                {t('embraceKongo.section2.title')}
              </h3>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('embraceKongo.section2.description')}
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
              className="text-4xl md:text-5xl mb-6" 
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            >
              {t('embraceKongo.ctaTitle')}
            </h2>
            <p 
              className="text-xl mb-8 text-gray-700" 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t('embraceKongo.ctaDescription')}
            </p>
            <Button 
              className="bg-[#FF6700] hover:bg-[#e55a00] text-white px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => {
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
            >
              {t('embraceKongo.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
