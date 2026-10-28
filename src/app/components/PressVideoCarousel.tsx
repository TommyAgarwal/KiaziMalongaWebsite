import { motion, useMotionValue, useAnimationControls } from 'motion/react';
import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

export default function PressVideoCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  
  const pressItems = [
    {
      type: 'article',
      url: 'https://earmilk.com/2026/10/23/kiazi-malonga-on-kongo-lema-preserving-congolese-musical-traditions-and-honoring-the-past-interview/',
      title: "Kiazi Malonga on 'Kongo Lema'",
      publication: 'EARMILK',
      excerpt: 'Preserving Congolese musical traditions and honoring the past'
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=riT8aFb_Vas',
      title: 'Press Video 1'
    },
    {
      type: 'article',
      url: 'https://www.kqed.org/arts/13971034/kiazi-malonga-fatherhood-oakland',
      title: 'Kiazi Malonga Fatherhood Oakland',
      publication: 'KQED Arts',
      excerpt: 'Exploring fatherhood and community through rhythm and tradition'
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=OCf4RRn2GjA',
      title: 'Press Video 2'
    },
    {
      type: 'article',
      url: 'https://www.kqed.org/news/11978844/kiazi-malonga-pelisa-kongo',
      title: 'Kiazi Malonga Pelisa Kongo',
      publication: 'KQED News',
      excerpt: 'Cultural preservation and renewable energy advocacy'
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=2CL-nMWcZS4',
      title: 'Press Video 3'
    },
    {
      type: 'article',
      url: 'https://www.sfweekly.com/music/kiazi-malonga-keeps-tradition-alive/article_62c46670-2bde-5057-89e3-3953fbcf441f.html',
      title: 'Kiazi Malonga Keeps Tradition Alive',
      publication: 'SF Weekly',
      excerpt: 'Master drummer preserves Central African musical heritage'
    },
    {
      type: 'youtube',
      url: 'https://www.youtube.com/watch?v=hHTInVl5H1s',
      title: 'Press Video 4'
    },
    {
      type: 'article',
      url: 'https://www.thehypemagazine.com/2021/02/27/kiazi-malonga-captures-the-unique-sounds-of-the-congo-with-debut-album/',
      title: 'Kiazi Malonga Captures Congo Sounds',
      publication: 'The Hype Magazine',
      excerpt: 'Debut album showcases unique Congolese musical traditions'
    },
    {
      type: 'article',
      url: 'https://datebook.sfchronicle.com/music/redtone-records-palo-alto-18666010/amp',
      title: 'Redtone Records Palo Alto',
      publication: 'SF Chronicle',
      excerpt: 'Local label champions African musical traditions'
    },
    {
      type: 'article',
      url: 'https://eastbayexpress.com/kiazi-malonga-shares-music-of-the-congo/',
      title: 'Kiazi Malonga Shares Music of the Congo',
      publication: 'East Bay Express',
      excerpt: 'Bringing authentic Congolese rhythms to Bay Area audiences'
    }
  ];

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('watch?v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Double the array to create seamless loop
  const doubleItems = [...pressItems, ...pressItems];
  // Fixed item width calculation based on largest responsive size + gap
  const itemWidth = 492; // 480px + 12px gap on each side (largest size)

  useEffect(() => {
    if (!isHovered) {
      // Get current position and calculate remaining distance
      const currentX = x.get();
      const targetX = -(pressItems.length * itemWidth);
      const totalDistance = pressItems.length * itemWidth;
      const distanceRemaining = Math.abs(targetX - currentX);
      const fullCycleDuration = 60; // Slower for more items
      const remainingDuration = (distanceRemaining / totalDistance) * fullCycleDuration;
      
      controls.start({
        x: targetX,
        transition: {
          duration: remainingDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    } else {
      // Pause the animation at current position
      controls.stop();
    }
  }, [isHovered, controls, x, pressItems.length, itemWidth]);

  return (
    <div className="w-full overflow-visible">
      {/* Container with mobile-optimized padding */}
      <div className="relative py-8 px-6 sm:py-12 sm:px-8 md:py-16 md:px-12">
        {/* Gradient fade edges - mobile-optimized sizing */}
        <div className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-r from-[#FF6700] via-[#FF6700] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full bg-gradient-to-l from-[#FFD200] via-[#FFD200] to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div 
          className="group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Horizontally scrolling container with no vertical overflow constraint */}
          <div className="overflow-x-hidden overflow-y-visible">
            <motion.div
              className="flex space-x-6 sm:space-x-8 md:space-x-12"
              style={{ x }}
              animate={controls}
              initial={{ x: 0 }}
            >
              {doubleItems.map((item, index) => (
                <div
                  key={`${item.url}-${index}`}
                  className="w-[200px] h-[113px] sm:w-[280px] sm:h-[158px] md:w-[360px] md:h-[203px] lg:w-[480px] lg:h-[270px] flex-shrink-0"
                >
                  {/* Media container */}
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black/10 backdrop-blur-sm border border-white/20">
                    {item.type === 'youtube' ? (
                      <iframe
                        src={getEmbedUrl(item.url)}
                        title={item.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full h-full flex flex-col bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition-all duration-300 group cursor-pointer"
                      >
                        {/* Article header */}
                        <div className="flex-shrink-0 p-3 sm:p-4 md:p-5 lg:p-6 border-b border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="text-[#FF6700] text-xs sm:text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                              {item.publication}
                            </div>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-[#FF6700] transition-colors duration-200" />
                          </div>
                        </div>
                        
                        {/* Article content */}
                        <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-center">
                          <h3 className="text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4 lg:mb-4 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {item.excerpt}
                          </p>
                        </div>
                        
                        {/* Read more indicator */}
                        <div className="flex-shrink-0 px-3 pb-3 sm:px-4 sm:pb-4 md:px-5 md:pb-5 lg:px-6 lg:pb-6">
                          <div className="text-[#FF6700] text-xs sm:text-sm md:text-sm lg:text-base group-hover:text-[#e55a00] transition-colors duration-200" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '500' }}>
                            Read Article →
                          </div>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
