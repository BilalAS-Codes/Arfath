import React, { useRef, useState, useEffect } from 'react';
import { audioEngine } from '../../utils/audioEngine';

export function VideoLanding({ onOpenComplete }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if video is ready
    if (videoRef.current && videoRef.current.readyState >= 2) {
      setIsVideoLoaded(true);
    }
  }, []);

  const handleClick = () => {
    // Start background nasheed music immediately on user gesture
    audioEngine.start();

    if (videoRef.current) {
      // Keep envelope video muted so background nasheed plays without interference or browser block
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsVideoLoaded(true);
          })
          .catch((err) => {
            console.warn("Envelope video play error, advancing directly:", err);
            onOpenComplete();
          });
      }
    }
  };

  const handleEnded = () => {
    onOpenComplete();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#EDE4D8] cursor-pointer selection:bg-transparent overflow-hidden"
      onClick={handleClick}
    >
      {/* Top right direct open button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          audioEngine.start();
          onOpenComplete();
        }}
        className="absolute top-6 right-6 z-30 px-4 py-2 bg-white/90 hover:bg-white text-[#2A160D] border border-[#CBB494] rounded-full text-xs font-serif font-bold uppercase tracking-widest shadow-lg transition-all hover:scale-105 pointer-events-auto"
      >
        Open Invitation →
      </button>

      {/* Wax Seal Envelope container */}
      <div className="relative z-10 aspect-[960/2106] h-full max-w-full bg-[#EDE3D4] flex items-center justify-center border-x-2 border-[#CBB494] shadow-2xl">
        
        {/* Default Golden Embroidery Background Preloader */}
        {!isVideoLoaded && (
          <div
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-[#2A160D] p-6 text-center bg-cover bg-center"
            style={{ backgroundImage: "url('./embroidery-beige-bg-DRgV_0KT.png')" }}
          >
            <div className="absolute inset-0 bg-[#FAF7F2]/50 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-3 border-[#CBB494] border-t-transparent animate-spin mb-5 shadow-sm" />
              <div className="font-serif text-sm tracking-[0.3em] uppercase text-[#8C5D30] font-bold animate-pulse mb-1">
                ✦ Loading Invitation ✦
              </div>
              <h2 className="font-serif italic text-2xl text-[#2A160D] font-bold mt-2">
                Faiza & Arfath
              </h2>
              <span className="text-xs font-serif text-[#8C5D30] uppercase tracking-widest mt-1">
                Tap anywhere to open
              </span>
            </div>
          </div>
        )}

        {/* Prompt before playing */}
        {!isPlaying && isVideoLoaded && (
          <div className="absolute bottom-16 z-20 px-6 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-amber-300/50 shadow-xl pointer-events-none animate-pulse">
            <span className="text-xs font-serif tracking-[0.2em] uppercase font-bold text-amber-100">
              ✉️ Tap anywhere to open wax seal ✦
            </span>
          </div>
        )}

        <video
          ref={videoRef}
          src="./ivory-gold-crest-envelope.mp4"
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          playsInline
          muted
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
          onCanPlayThrough={() => setIsVideoLoaded(true)}
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
}
