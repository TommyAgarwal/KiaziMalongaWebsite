import image_efd75b59ea35c99629746aba7af786b8a9c224a6 from '../../../assets/efd75b59ea35c99629746aba7af786b8a9c224a6.png';
import image_245e57b14ef0a85de2e7818a73fcb79ef501bc76 from '../../../assets/245e57b14ef0a85de2e7818a73fcb79ef501bc76.png';
import image_adb8bb9b46f07ae7d685ba5235a064c0114d6ada from '../../../assets/adb8bb9b46f07ae7d685ba5235a064c0114d6ada.png';
import image_b228ea0d498c0c3caec970a5b30b6b15b9f2011c from '../../../assets/b228ea0d498c0c3caec970a5b30b6b15b9f2011c.png';
import image_30ef9e3fca632e20b00acd5c7b3697366ce3eeee from '../../../assets/30ef9e3fca632e20b00acd5c7b3697366ce3eeee.png';
import image_8ebe8d62e309c5b2dbf0a4b856eed200e3348a5c from '../../../assets/8ebe8d62e309c5b2dbf0a4b856eed200e3348a5c.png';
import image_7b89aa4aacaf97d224b458aaa288ff3f870c29a0 from '../../../assets/7b89aa4aacaf97d224b458aaa288ff3f870c29a0.png';
import image_398c3ad0d23daea7ae8a0b5d78bb63b8932d42cd from '../../../assets/398c3ad0d23daea7ae8a0b5d78bb63b8932d42cd.png';
import image_9f146f3b3a31235b76265e20d3269278449b193c from '../../../assets/9f146f3b3a31235b76265e20d3269278449b193c.png';
import image_26fa3a621220d67ce31a49043432b5dfb2107e88 from '../../../assets/26fa3a621220d67ce31a49043432b5dfb2107e88.png';
import image_f7f76f90580ad9abf9638a3e3863b19a3ba5bf78 from '../../../assets/f7f76f90580ad9abf9638a3e3863b19a3ba5bf78.png';
import image_82411f5c11aa5cda853a9b0b320c36b10d538150 from '../../../assets/82411f5c11aa5cda853a9b0b320c36b10d538150.png';
import image_87313ad7ca5c8f72330013baf3c1fd7b9c6ea97a from '../../../assets/87313ad7ca5c8f72330013baf3c1fd7b9c6ea97a.png';
import image_eaf06b67f9a80f5742ff63141a94cc2f47d4a602 from '../../../assets/eaf06b67f9a80f5742ff63141a94cc2f47d4a602.png';
import image_9e6f206fea28c36539fb1d6ba11b4cf8cd6d7557 from '../../../assets/9e6f206fea28c36539fb1d6ba11b4cf8cd6d7557.png';
import image_b978bcf72bc6d063b7af34c27d38b16b7c72a43f from '../../../assets/b978bcf72bc6d063b7af34c27d38b16b7c72a43f.png';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Footer from './Footer';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import image_1c3af80660c5b3583c2187fed33be19eaf42ed22 from '../../../assets/1c3af80660c5b3583c2187fed33be19eaf42ed22.png';
import image_36065eeca867d0e236c3713e9e28a412bcd8d3f1 from '../../../assets/36065eeca867d0e236c3713e9e28a412bcd8d3f1.png';
import image_d92b972d4a3aeaf623d32505b30488efdbb91001 from '../../../assets/d92b972d4a3aeaf623d32505b30488efdbb91001.png';
import image_7ebef2a405aee2a38c12019e7f295b07ff3f8da8 from '../../../assets/7ebef2a405aee2a38c12019e7f295b07ff3f8da8.png';
import image_ee85f59d59d2d35c021535b796c40805a07ab76c from '../../../assets/ee85f59d59d2d35c021535b796c40805a07ab76c.png';
import image_994f90a56cd1c411e32ebe193686b48ff3b6f361 from '../../../assets/994f90a56cd1c411e32ebe193686b48ff3b6f361.png';
import image_6a3ba8b89ace7d916ba50e04eda2d4e272669dfa from '../../../assets/6a3ba8b89ace7d916ba50e04eda2d4e272669dfa.png';

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images - exactly 6 photos in a clean grid layout
  // Each image src is on its own line for easy manual replacement
  const galleryImages = [
    {
      src: image_1c3af80660c5b3583c2187fed33be19eaf42ed22,
      alt: 'Kiazi Malonga teaching cultural rhythms with a young student in traditional African attire'
    },
    {
      src: image_36065eeca867d0e236c3713e9e28a412bcd8d3f1,
      alt: 'Kiazi Malonga in vibrant green African print shirt with traditional percussion instruments'
    },
    {
      src: image_d92b972d4a3aeaf623d32505b30488efdbb91001,
      alt: 'Kiazi Malonga drumming with joy in colorful traditional attire'
    },
    {
      src: image_7ebef2a405aee2a38c12019e7f295b07ff3f8da8,
      alt: 'Kiazi Malonga professional headshot in navy shirt with warm smile'
    },
    {
      src: image_ee85f59d59d2d35c021535b796c40805a07ab76c,
      alt: 'Black and white professional portrait of Kiazi Malonga'
    },
    {
      src: image_994f90a56cd1c411e32ebe193686b48ff3b6f361,
      alt: 'Kiazi Malonga in leather jacket with traditional African percussion instruments'
    }
  ];

  // Carousel 1 - 6 images
  const carousel1Images = [
    {
      src: image_6a3ba8b89ace7d916ba50e04eda2d4e272669dfa,
      alt: 'Kiazi Malonga seated on ornate blue throne with traditional raffia attire and percussion instrument'
    },
    {
      src: image_b978bcf72bc6d063b7af34c27d38b16b7c72a43f,
      alt: 'African drumming performance'
    },
    {
      src: image_9e6f206fea28c36539fb1d6ba11b4cf8cd6d7557,
      alt: 'Cultural dance celebration'
    },
    {
      src: image_eaf06b67f9a80f5742ff63141a94cc2f47d4a602,
      alt: 'Percussion instruments studio'
    },
    {
      src: image_9f146f3b3a31235b76265e20d3269278449b193c,
      alt: 'Community gathering music'
    },
    {
      src: image_398c3ad0d23daea7ae8a0b5d78bb63b8932d42cd,
      alt: 'Traditional African ceremony'
    },
    {
      src: image_7b89aa4aacaf97d224b458aaa288ff3f870c29a0,
      alt: 'Music education class'
    }
  ];

  // Carousel 2 - 5 images
  const carousel2Images = [
    {
      src: image_87313ad7ca5c8f72330013baf3c1fd7b9c6ea97a,
      alt: 'Festival celebration people'
    },
    {
      src: image_82411f5c11aa5cda853a9b0b320c36b10d538150,
      alt: 'Cultural heritage event'
    },
    {
      src: image_f7f76f90580ad9abf9638a3e3863b19a3ba5bf78,
      alt: 'Live music concert'
    },
    {
      src: image_26fa3a621220d67ce31a49043432b5dfb2107e88,
      alt: 'Musical workshop teaching'
    },
    {
      src: image_8ebe8d62e309c5b2dbf0a4b856eed200e3348a5c,
      alt: 'Community arts performance'
    }
  ];

  // Carousel 3 - 5 images
  const carousel3Images = [
    {
      src: image_30ef9e3fca632e20b00acd5c7b3697366ce3eeee,
      alt: 'Dance movement expression'
    },
    {
      src: image_b228ea0d498c0c3caec970a5b30b6b15b9f2011c,
      alt: 'Cultural celebration gathering'
    },
    {
      src: image_adb8bb9b46f07ae7d685ba5235a064c0114d6ada,
      alt: 'Traditional music instruments'
    },
    {
      src: image_245e57b14ef0a85de2e7818a73fcb79ef501bc76,
      alt: 'Community event audience'
    },
    {
      src: image_efd75b59ea35c99629746aba7af786b8a9c224a6,
      alt: 'Artistic performance culture'
    }
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setLightboxOpen(false);
      }
    };

    if (lightboxOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, galleryImages.length]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

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
            {t('gallery.title')}
          </motion.h1>
        </div>
      </motion.section>

      {/* Carousel 1 - 6 images */}
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
                {carousel1Images.map((image, index) => (
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
              {/* Desktop arrows */}
              <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              <CarouselNext className="hidden md:flex -right-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              {/* Mobile arrows */}
              <CarouselPrevious className="flex md:hidden left-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
              <CarouselNext className="flex md:hidden right-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Row 1 - First 3 gallery images */}
      <motion.section 
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.slice(0, 3).map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl group aspect-square cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Carousel 2 - 5 images */}
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
                {carousel2Images.map((image, index) => (
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
              {/* Desktop arrows */}
              <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              <CarouselNext className="hidden md:flex -right-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              {/* Mobile arrows */}
              <CarouselPrevious className="flex md:hidden left-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
              <CarouselNext className="flex md:hidden right-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Row 2 - Last 3 gallery images */}
      <motion.section 
        className="py-12 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.slice(3, 6).map((image, index) => (
              <motion.div
                key={index + 3}
                className="relative overflow-hidden rounded-2xl group aspect-square cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openLightbox(index + 3)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Carousel 3 - 5 images */}
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
                {carousel3Images.map((image, index) => (
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
              {/* Desktop arrows */}
              <CarouselPrevious className="hidden md:flex -left-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              <CarouselNext className="hidden md:flex -right-16 w-12 h-12 bg-white border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200" />
              {/* Mobile arrows */}
              <CarouselPrevious className="flex md:hidden left-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
              <CarouselNext className="flex md:hidden right-2 w-10 h-10 bg-white/90 border-2 border-[#FF6700] text-[#FF6700] hover:bg-[#FF6700] hover:text-white transition-colors duration-200 shadow-lg" />
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-black/90 border-none [&>button]:hidden">
          <DialogTitle className="sr-only">
            Image Gallery Lightbox
          </DialogTitle>
          <DialogDescription className="sr-only">
            Viewing image {currentImageIndex + 1} of {galleryImages.length}: {galleryImages[currentImageIndex]?.alt}. Photo credit: Bryon Malik
          </DialogDescription>
          <div className="relative flex items-center justify-center min-h-[50vh]">
            {/* Custom Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main image */}
            <motion.img
              key={currentImageIndex}
              src={galleryImages[currentImageIndex]?.src}
              alt={galleryImages[currentImageIndex]?.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Photo credit */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg bg-black/70 text-white">
              <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                📷 - Bryon Malik
              </p>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Footer />
    </div>
  );
}