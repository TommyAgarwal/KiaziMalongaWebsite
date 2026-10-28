import { motion, useMotionValue, useAnimationControls } from 'motion/react';
import { useState, useEffect } from 'react';

export default function YouTubeTape() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);
  
  const youtubeUrls = [
    'https://www.youtube.com/shorts/3YTtJDGSOzI',
    'https://www.youtube.com/shorts/uXD9wvNtqjw',
    'https://www.youtube.com/shorts/UyHxv_SRrek',
    'https://www.youtube.com/shorts/ncD1XG27S8Q',
    'https://www.youtube.com/shorts/zrDHgS7TFII',
    'https://www.youtube.com/shorts/Phlmsuoskv0',
    'https://www.youtube.com/shorts/h8TwuG4ekhk'
  ];

  const getEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Triple the array to create seamless loop
  const tripleUrls = [...youtubeUrls, ...youtubeUrls, ...youtubeUrls];

  useEffect(() => {
    if (!isHovered) {
      // Continue the animation from current position
      const currentX = x.get();
      const distanceToTravel = -(youtubeUrls.length * 280) - currentX;
      const fullCycleDuration = 35;
      const remainingDuration = (Math.abs(distanceToTravel) / (youtubeUrls.length * 280)) * fullCycleDuration;
      
      controls.start({
        x: -(youtubeUrls.length * 280),
        transition: {
          duration: remainingDuration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0
        }
      });
    } else {
      // Stop the animation
      controls.stop();
    }
  }, [isHovered, controls, x, youtubeUrls.length]);

  return (
    <div className="w-full overflow-visible">
      {/* Large container with generous padding for scaling */}
      <div className="relative py-16 px-8">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling container */}
        <div 
          className="group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Horizontally scrolling container with no vertical overflow constraint */}
          <div className="overflow-x-hidden overflow-y-visible">
            <motion.div
              className="flex space-x-6"
              style={{ 
                x,
                width: `${tripleUrls.length * 280}px`,
              }}
              animate={controls}
              initial={{
                x: 0
              }}
            >
              {tripleUrls.map((url, index) => (
                <div
                  key={`${url}-${index}`}
                  className="w-64 h-96 flex-shrink-0"
                >
                  {/* Simple video container - no hover effects, fully clickable */}
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src={getEmbedUrl(url)}
                      title={`YouTube Short ${index + 1}`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
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