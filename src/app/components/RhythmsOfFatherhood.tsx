import image_20be529cf54bdf4a7e81d296d640623a6abcf9a0 from '../../../assets/20be529cf54bdf4a7e81d296d640623a6abcf9a0.png';
import image_594525ea3a34b7867c950c33a1cbb4df3681ec60 from '../../../assets/594525ea3a34b7867c950c33a1cbb4df3681ec60.png';
import image_0197a5618816f1a58ab0b4ec195d7ad3535f5ed7 from '../../../assets/0197a5618816f1a58ab0b4ec195d7ad3535f5ed7.png';
import image_6925db159bab4315d56ab627066f7672a11db9e1 from '../../../assets/6925db159bab4315d56ab627066f7672a11db9e1.png';
import image_fdf3152619a1b816c2265f08c4febba63691b07b from '../../../assets/fdf3152619a1b816c2265f08c4febba63691b07b.png';
import image_fa98d54ef5f239bd14fd5ee676022528b3b3b171 from '../../../assets/fa98d54ef5f239bd14fd5ee676022528b3b3b171.png';
import image_7bbfd00a46d8b26f0de336e4a28173d302a29890 from '../../../assets/7bbfd00a46d8b26f0de336e4a28173d302a29890.png';
import image_12e29211d564b35df70d6e3703f19bcbd8f7b2a5 from '../../../assets/12e29211d564b35df70d6e3703f19bcbd8f7b2a5.png';
import image_93b1ccf117c3cc8de10595c059eac09d9cb13bd9 from '../../../assets/93b1ccf117c3cc8de10595c059eac09d9cb13bd9.png';
import image_8c72c84dd245ec4a769f99ccd2e683caff165a10 from '../../../assets/8c72c84dd245ec4a769f99ccd2e683caff165a10.png';
import image_cc186882bbb1a9bcf54287f551ebcd6924dd831a from '../../../assets/cc186882bbb1a9bcf54287f551ebcd6924dd831a.png';
import image_b1684333c2c8d6b57eef3c088db271a58a886229 from '../../../assets/b1684333c2c8d6b57eef3c088db271a58a886229.png';
import image_2582dd4235a71e6fc857c741a584d2886f134033 from '../../../assets/2582dd4235a71e6fc857c741a584d2886f134033.png';
import image_b3071a62b517c5ab8bf9445c67de425c351ce60a from '../../../assets/b3071a62b517c5ab8bf9445c67de425c351ce60a.png';
import eventFlyer from '../../../assets/e57d29accc8cffb185c0c334603b324f6ddea874.png';
import newEventFlyer from '../../imports/ROF_Rhythm___Resilience-53026_-_5.PNG';
import bbqFishFryFlyer from '../../imports/unnamed.png';
import pastFlyer1 from '../../../assets/bfea9485b6269e8819777f573bc7d8801b547ff5.png';
import pastFlyer2 from '../../../assets/60f92712e21ea82780b20bc05ff106fba4beb5d2.png';
import pastFlyer3 from '../../../assets/13cc36c8ee102c890ef801a2cfd8a8ba7e3693a0.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from './ui/carousel';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function RhythmsOfFatherhood() {
  const { t } = useLanguage();

  const pastEventFlyers = [
    { src: newEventFlyer, alt: "Rhythms & Resilience - Families in Motion - May 30, 2026" },
    { src: image_20be529cf54bdf4a7e81d296d640623a6abcf9a0, alt: "Rhythms of Fatherhood Event - November 16, 2025" },
    { src: pastFlyer1, alt: "Rhythms of Fatherhood - Smoke & Soul Series - June 15, 2025" },
    { src: pastFlyer2, alt: "Rhythms of Fatherhood - April 27, 2025" },
    { src: pastFlyer3, alt: "Beats & Bonding - February 9th, 2025" }
  ];

  // Double the array to create seamless loop
  const doubleFlyers = [...pastEventFlyers, ...pastEventFlyers];
  const itemWidth = 264; // 250px + 14px gap
  const resetPoint = -(pastEventFlyers.length * itemWidth);

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
            {t('fatherhood.title')}
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
                    src: image_cc186882bbb1a9bcf54287f551ebcd6924dd831a,
                    alt: "Father and child bonding moment",
                    title: "Father-Child Connection"
                  },
                  {
                    src: image_8c72c84dd245ec4a769f99ccd2e683caff165a10,
                    alt: "African drumming community gathering",
                    title: "Drumming Together"
                  },
                  {
                    src: image_12e29211d564b35df70d6e3703f19bcbd8f7b2a5,
                    alt: "Family gathering celebration",
                    title: "Family Celebration"
                  },
                  {
                    src: image_7bbfd00a46d8b26f0de336e4a28173d302a29890,
                    alt: "Father teaching child",
                    title: "Teaching Moments"
                  },
                  {
                    src: image_fa98d54ef5f239bd14fd5ee676022528b3b3b171,
                    alt: "Community meal together",
                    title: "Breaking Bread"
                  },
                  {
                    src: image_fdf3152619a1b816c2265f08c4febba63691b07b,
                    alt: "African cultural celebration",
                    title: "Cultural Heritage"
                  },
                  {
                    src: image_6925db159bab4315d56ab627066f7672a11db9e1,
                    alt: "Fathers and children outdoors",
                    title: "Outdoor Activities"
                  },
                  {
                    src: image_0197a5618816f1a58ab0b4ec195d7ad3535f5ed7,
                    alt: "Cultural dance movement",
                    title: "Dance and Movement"
                  },
                  {
                    src: image_594525ea3a34b7867c950c33a1cbb4df3681ec60,
                    alt: "Intergenerational family joy",
                    title: "Generational Bonds"
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
        <div className="max-w-7xl mx-auto px-4">
          {/* First Section - Image on Left */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="order-1 lg:order-1">
              <ImageWithFallback
                src={image_b3071a62b517c5ab8bf9445c67de425c351ce60a}
                alt="Father and child engaged in drumming and cultural activities"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('fatherhood.paragraph1')}
              </p>
            </div>
          </motion.div>

          {/* Second Section - Image on Right */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="order-2 lg:order-1">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('fatherhood.paragraph2')}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src={image_2582dd4235a71e6fc857c741a584d2886f134033}
                alt="Community gathering emphasizing family values and cultural traditions"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* Third Section - Image on Left */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="order-1 lg:order-1">
              <ImageWithFallback
                src={image_b1684333c2c8d6b57eef3c088db271a58a886229}
                alt="Black fathers and children in moments of joy and celebration"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('fatherhood.paragraph3')}
              </p>
            </div>
          </motion.div>

          {/* Donate Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              className="bg-[#FF6700] hover:bg-[#e55a00] text-white px-12 py-6 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => window.open('https://www.paypal.com/ncp/payment/RX5GBQWNLYF7N', '_blank')}
            >
              {t('fatherhood.donateButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-[#FF6700] to-[#FFD200]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl mb-12 text-center text-white" 
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('fatherhood.ctaTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Event Flyer - Left Column */}
            <motion.div
              className="order-1 lg:order-1"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <ImageWithFallback
                src={bbqFishFryFlyer}
                alt="The Rhythms of Fatherhood 2nd Annual Father's Day BBQ & Fish Fry - June 21, 2026 at Temescal Regional Recreation Area, Oakland CA"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </motion.div>

            {/* Right Column - CTA and Past Events Stacked */}
            <div className="order-2 lg:order-2 space-y-12">
              {/* CTA Content */}
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <h3 
                  className="text-3xl mb-6 text-white" 
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('fatherhood.joinTitle')}
                </h3>
                <p 
                  className="text-xl mb-8 text-white" 
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {t('fatherhood.followText')}
                </p>
                <Button 
                  className="bg-white hover:bg-gray-100 text-[#FF6700] px-8 py-4 rounded-lg text-lg transition-all duration-200 transform hover:scale-105"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => window.open('https://www.instagram.com/the_rhythms_of_fatherhood_/', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  {t('fatherhood.followButton')}
                </Button>
              </motion.div>

              {/* Past Events Subsection */}
              <motion.div
                className="pt-8 border-t-2 border-white/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h3
                  className="text-2xl mb-6 text-white text-center lg:text-left"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}
                >
                  {t('fatherhood.pastEvents')}
                </h3>

                {/* Continuous scrolling past events */}
                <div className="w-full overflow-hidden">
                  <div className="group py-4">
                    <motion.div
                      className="flex space-x-4"
                      animate={{ x: [0, resetPoint] }}
                      transition={{
                        x: {
                          duration: 20,
                          ease: "linear",
                          repeat: Infinity,
                          repeatType: "loop",
                        }
                      }}
                    >
                      {doubleFlyers.map((flyer, index) => (
                        <div
                          key={`${flyer.alt}-${index}`}
                          className="w-[250px] flex-shrink-0"
                        >
                          <div className="md:grayscale md:group-hover:grayscale-0 transition-all duration-500 cursor-pointer">
                            <ImageWithFallback
                              src={flyer.src}
                              alt={flyer.alt}
                              className="h-[350px] w-auto object-cover rounded-xl shadow-lg"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
