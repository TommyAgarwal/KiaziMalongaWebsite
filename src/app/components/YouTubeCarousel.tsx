import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function YouTubeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % youtubeUrls.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + youtubeUrls.length) % youtubeUrls.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex space-x-4 overflow-hidden">
          {youtubeUrls.slice(currentIndex, currentIndex + 3).map((url, index) => (
            <div key={url} className="w-64 h-96 flex-shrink-0">
              <iframe
                src={getEmbedUrl(url)}
                title={`YouTube Short ${currentIndex + index + 1}`}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-black bg-opacity-20 hover:bg-opacity-40 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {youtubeUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}