export default function Frame1() {
  // Your Cloudinary video URL
  const videoUrl = "https://res.cloudinary.com/dfy8qucpv/video/upload/v1757548255/KiaziB-roll_lc3qes.mp4";
  
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-[#FF6700] to-[#FFD200]">
      {/* Video element */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          console.log('Video failed to load:', e);
          e.currentTarget.style.display = 'none';
        }}
        onLoadStart={() => console.log('Video loading started')}
        onLoadedData={() => console.log('Video loaded successfully')}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}