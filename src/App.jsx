import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VideoLanding } from './components/ui/VideoLanding';
import { AudioController } from './components/ui/AudioController';
import WeddingItinerary from './components/ui/WeddingItinerary';
import GiftsSection from './components/ui/GiftsSection';
import { Heart, MapPin, Clock, Calendar, BookOpen, Shirt, UtensilsCrossed, Sparkles } from 'lucide-react';
import { audioEngine } from './utils/audioEngine';
import eventData from './event_data.json';

gsap.registerPlugin(ScrollTrigger);

// Ribbon Boundary Component for the Menu Frame matching public/fraem.png
const MenuFrame = ({ children }) => (
  <div className="relative w-full my-4 flex flex-col items-center justify-center min-h-[600px] sm:min-h-[660px] p-2 overflow-hidden">
    {/* Frame Image overlay with drop shadow */}
    <img
      src="./fraem.png"
      alt="Royal Menu Frame"
      className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0 select-none drop-shadow-md"
    />
    {/* Menu content carefully placed between the top ribbon bow and the banquet table at bottom */}
    <div className="relative z-10 w-full max-w-[310px] text-center pt-14 pb-20 px-3 flex flex-col items-center justify-center">
      {children}
    </div>
  </div>
);

// Islamic Crescent and Star Divider
const CrescentDivider = () => (
  <div className="flex justify-center items-center gap-4 text-[#8C5D30] py-4 select-none pointer-events-none">
    <div className="w-16 h-[1.5px] bg-[#CBB494]/60" />
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 1 0 9 9 9.005 9.005 0 0 1-9-9Z" />
      <polygon points="17,6 18,8 20,8.5 18.5,10 19,12 17,11 15,12 15.5,10 14,8.5 16,8" />
    </svg>
    <div className="w-16 h-[1.5px] bg-[#CBB494]/60" />
  </div>
);

// Islamic Eight-pointed Star Divider
const IslamicStarDivider = () => (
  <div className="flex justify-center items-center gap-4 text-[#8C5D30] py-4 select-none pointer-events-none">
    <div className="w-20 h-[1.5px] bg-[#CBB494]/60" />
    <svg className="w-6 h-6 rotate-45" viewBox="0 0 24 24" fill="currentColor">
      <rect x="5" y="5" width="14" height="14" rx="0.5" />
      <rect x="5" y="5" width="14" height="14" rx="0.5" className="rotate-45 origin-center" />
      <circle cx="12" cy="12" r="3" fill="#FFFDF9" />
      <circle cx="12" cy="12" r="1.5" />
    </svg>
    <div className="w-20 h-[1.5px] bg-[#CBB494]/60" />
  </div>
);

export default function App() {
  const [entered, setEntered] = useState(true);
  const [sealOpened, setSealOpened] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Load configuration from event_data.json
  const data = eventData.block_content || {};
  const menuCategories = data.menu?.categories || [];

  /**
   * Countdown timer set to Nikah Date: 8th October 2026 (08-10-2026) at 1:15 PM (After Namaz-e-Zohar).
   */
  useEffect(() => {
    const weddingDate = new Date('2026-10-08T13:15:00').getTime();
    const updateCountdown = () => {
      const now = Date.now();
      const diff = weddingDate - now;
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setCountdown({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll setup with Lenis
  useEffect(() => {
    if (!entered || !sealOpened) {
      document.body.style.overflow = 'hidden';
      return;
    }
    document.body.style.overflow = 'auto';

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      document.body.style.overflow = 'auto';
    };
  }, [entered, sealOpened]);

  const handleSealOpened = () => {
    audioEngine.start();
    setSealOpened(true);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#EDE4D8]">
      {/* ============================================================ */}
      {/* 1. VIDEO ENVELOPE INTRO LANDING SCREEN                       */}
      {/* ============================================================ */}
      {!sealOpened && <VideoLanding onOpenComplete={handleSealOpened} />}

      {/* Persistent Audio Controller */}
      <AudioController />

      {/* ============================================================ */}
      {/* 2. MAIN INVITATION CONTENT CONTAINER (Royal Mobile Card)     */}
      {/* ============================================================ */}
      {sealOpened && (
        <>
          {/* Looping animated gypsophila video background to the complete end of the invitation */}
          <div className="fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none z-0 overflow-hidden">
            <video
              src="./block-bg-animated-ivory-gypsophila-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
            {/* Subtle soft warm tint so all cards have great contrast */}
            <div className="absolute inset-0 bg-[#FAF7F2]/20" />
          </div>

          <div
            id="main-scroll-container"
            className="relative z-10 w-full max-w-[480px] min-h-screen mx-auto bg-transparent shadow-[0_25px_70px_-15px_rgba(42,22,13,0.35)] border-x-2 border-[#CBB494]/60 flex flex-col text-[#2A160D]"
          >
            {/* ===== 1st VIDEO HERO (Golden Mosque Arch Theme) ===== */}
            <div className="w-full h-screen min-h-[580px] relative overflow-hidden bg-[#1F1209] z-20 shadow-xl">
              <video
                src="./golden-mosque-arch-theme.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Clean, balanced cinematic gradient for razor-sharp readability without black dullness */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/15 via-black/25 to-black/45" />

              {/* Hero Content Container */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center h-full">
                <span className="text-[#FDF0D5] font-serif text-[11px] tracking-[0.35em] uppercase mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] font-semibold">
                  ✦ The Wedding Celebration ✦
                </span>

                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal sm:font-medium tracking-[0.2em] uppercase drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                  Faiza
                </h1>
                <span
                  className="font-script text-3xl sm:text-4xl text-[#F6D285] drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] my-1.5"
                  style={{ fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', cursive" }}
                >
                  &
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal sm:font-medium tracking-[0.2em] uppercase drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]">
                  Arfath
                </h1>

                {/* Date & Time Badge - Elegant Glassmorphism */}
                <div className="mt-5 py-1.5 px-6 rounded-full bg-black/40 backdrop-blur-md border border-[#CBB494]/60 shadow-lg">
                  <span className="font-serif text-xs sm:text-sm tracking-[0.25em] text-[#FEF3C7] uppercase font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                    ✦ 08-10-2026 • 1:15 PM ✦
                  </span>
                </div>

                <span
                  className="font-script text-2xl sm:text-3xl text-[#F6D285] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] mt-4"
                  style={{ fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', cursive" }}
                >
                  Nikah & Wedding Ceremony
                </span>

                {/* Scroll prompt at bottom of hero */}
                <div className="absolute bottom-6 flex flex-col items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/90 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    Scroll to Explore
                  </span>
                  <div className="w-5 h-8 rounded-full border-2 border-white/70 flex items-start justify-center p-1 shadow-sm">
                    <div className="w-1.5 h-2.5 rounded-full bg-white/90 animate-bounce" />
                  </div>
                </div>
              </div>
            </div>

            {/* ===== SECTIONS CONTAINER (Visible to the Complete End) ===== */}
            <div className="relative z-10 w-full px-4 sm:px-6 py-10 flex flex-col gap-10">

            {/* ===== QURAN VERSE 1: BISMILLAH & SURAH AR-RUM ===== */}
            <div className="w-full bg-white/95 backdrop-blur-md border-2 border-[#CBB494] rounded-3xl p-7 sm:p-8 shadow-xl text-center space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FAF4EB]/60 rounded-full blur-2xl pointer-events-none" />

              {/* Header */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#FAF4EB] border border-[#CBB494] flex items-center justify-center text-[#8C5D30] mb-2 shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#8C5D30]" />
                </div>
                <div className="font-serif text-xs font-bold tracking-[0.3em] text-[#8C5D30] uppercase">
                  Bismillah-ir-Rahman-ir-Raheem
                </div>
              </div>

              {/* Arabic Calligraphy - Deep Black/Espresso Ink for 100% Crisp Visibility */}
              <div className="font-arabic text-2xl sm:text-3xl leading-[2.5] font-bold text-[#1F1209] py-2 select-none">
                وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
              </div>

              <div className="h-[1.5px] w-28 bg-[#CBB494] mx-auto" />

              {/* English Translation */}
              <p className="text-sm font-serif italic text-[#2D1A12] leading-relaxed font-medium px-2">
                "And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy."
              </p>

              {/* Reference Badge */}
              <div className="pt-1">
                <span className="inline-block px-4 py-1 rounded-full bg-[#FAF4EB] border border-[#CBB494] text-[10px] tracking-widest uppercase font-bold text-[#8C5D30]">
                  ✦ Surah Ar-Rum • 30:21 ✦
                </span>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== COUNTDOWN SECTION ===== */}
            <div className="w-full bg-[#FFFDF9] border-2 border-[#CBB494] rounded-3xl p-6 shadow-xl text-center relative overflow-hidden">
              <div className="mb-2 text-[#8C5D30] font-serif text-xs font-bold uppercase tracking-widest">
                ✦ 08-10-2026 • 1:15 PM ✦
              </div>
              <h2 className="font-serif italic text-2xl sm:text-3xl font-black tracking-widest text-[#2A160D] uppercase">
                Countdown to Nikah
              </h2>
              <p className="text-xs font-serif italic text-[#5C3D2E] font-medium mt-1 mb-6">
                In Sha Allah, counting down to our blessed day!
              </p>

              {/* 4 Crisp Countdown Boxes */}
              <div className="flex justify-center gap-2.5 sm:gap-3">
                {[
                  { label: 'DAYS', val: countdown.days },
                  { label: 'HOURS', val: countdown.hours },
                  { label: 'MINUTES', val: countdown.minutes },
                  { label: 'SECONDS', val: countdown.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center flex-1 max-w-[76px]">
                    <div className="w-full aspect-square rounded-2xl flex items-center justify-center bg-white border-2 border-[#CBB494] shadow-md">
                      <span className="font-serif text-2xl sm:text-3xl font-black text-[#2A160D]">
                        {String(item.val).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] mt-2 uppercase tracking-widest font-bold text-[#8C5D30]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Crescent Divider */}
            <CrescentDivider />

            {/* ===== QURAN DUA: SURAH AL-FURQAN (25:74) ===== */}
            <div className="w-full bg-[#FAF4EB] border-2 border-[#CBB494] rounded-3xl p-6 sm:p-7 shadow-md text-center space-y-3">
              <div className="font-arabic text-xl sm:text-2xl text-[#1F1209] font-bold leading-loose select-none">
                رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا
              </div>
              <div className="h-[1px] w-24 bg-[#CBB494] mx-auto" />
              <p className="text-xs sm:text-sm font-serif italic text-[#2D1A12] font-semibold leading-relaxed max-w-sm mx-auto">
                "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us an example for the righteous."
              </p>
              <div className="pt-0.5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#CBB494] text-[10px] tracking-widest uppercase font-bold text-[#8C5D30]">
                  ✦ Surah Al-Furqan • 25:74 ✦
                </span>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== VENUES SECTION ===== */}
            <div className="w-full space-y-6">
              {/* Section Header */}
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FAF4EB] border-2 border-[#CBB494] flex items-center justify-center text-[#5C3D2E] mx-auto mb-2 shadow-sm">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="font-serif italic text-3xl sm:text-4xl font-black tracking-widest text-[#2A160D] uppercase">
                  Venues
                </h2>
                <span className="font-serif text-xs font-bold tracking-[0.2em] text-[#8C5D30] uppercase block mt-1">
                  ✦ Nikah, Reception & Valima ✦
                </span>
              </div>

              {/* 1. NIKAH VENUE: Masjid-e-Asifiya */}
              <div className="bg-white border-2 border-[#CBB494] rounded-3xl p-6 shadow-xl flex flex-col text-center overflow-hidden">
                <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-[#CBB494]/60 shadow-inner mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=Masjid-e-Asifiya+Purani+Haveli+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Masjid-e-Asifiya Map"
                    style={{ border: 0 }}
                  />
                </div>

                <div className="px-2 flex flex-col items-center">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-[#8C5D30] font-bold">
                    THURSDAY, 08 OCT 2026 • AFTER NAMAZ-E-ZOHAR (1:15 PM)
                  </span>
                  <h3 className="font-serif italic text-2xl font-black uppercase tracking-wider text-[#2A160D] mt-1">
                    Masjid-e-Asifiya
                  </h3>
                  <p className="text-sm font-semibold text-[#4A2E20] leading-relaxed mt-1">
                    Purani Haveli, Opp. Princess Durre Shehwar Hospital, Hyderabad
                  </p>

                  <div className="mt-3 inline-block px-4 py-1.5 bg-[#FAF4EB] border border-[#CBB494] text-[#8C5D30] font-serif text-xs font-bold rounded-full">
                    Solemnization of Nikah
                  </div>

                  <a
                    href="https://maps.google.com/?q=Masjid-e-Asifiya+Purani+Haveli+Hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4A2E20] hover:bg-[#2A160D] text-white font-serif text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Get directions</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 2. RECEPTION & DINNER: Rose Garden Function Hall */}
              <div className="bg-white border-2 border-[#CBB494] rounded-3xl p-6 shadow-xl flex flex-col text-center overflow-hidden">
                <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-[#CBB494]/60 shadow-inner mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=Rose+Garden+Champapet+Road+Santosh+Nagar+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Rose Garden Function Hall Map"
                    style={{ border: 0 }}
                  />
                </div>

                <div className="px-2 flex flex-col items-center">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-[#8C5D30] font-bold">
                    THURSDAY, 08 OCT 2026 • 9:00 PM
                  </span>
                  <h3 className="font-serif italic text-2xl font-black uppercase tracking-wider text-[#2A160D] mt-1">
                    Rose Garden Function Hall
                  </h3>
                  <p className="text-sm font-semibold text-[#4A2E20] leading-relaxed mt-1">
                    Champapet Road, Santosh Nagar, Hyderabad
                  </p>

                  <div className="mt-3 inline-block px-4 py-1.5 bg-[#FAF4EB] border border-[#CBB494] text-[#8C5D30] font-serif text-xs font-bold rounded-full">
                    Reception & Dinner
                  </div>

                  <a
                    href="https://maps.app.goo.gl/Zk6fszE1ceSd56nE6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4A2E20] hover:bg-[#2A160D] text-white font-serif text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Get directions</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 3. VALIMA CEREMONY: Naseer Garden Function Plaza */}
              <div className="bg-white border-2 border-[#CBB494] rounded-3xl p-6 shadow-xl flex flex-col text-center overflow-hidden">
                <div className="w-full h-44 rounded-2xl overflow-hidden border-2 border-[#CBB494]/60 shadow-inner mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=Naseer+Garden+Function+Hall+Shamsheer+Gunj+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Naseer Garden Function Plaza Map"
                    style={{ border: 0 }}
                  />
                </div>

                <div className="px-2 flex flex-col items-center">
                  <span className="text-[10px] font-serif uppercase tracking-widest text-[#8C5D30] font-bold">
                    SUNDAY, 11 OCT 2026 • 9:00 PM
                  </span>
                  <h3 className="font-serif italic text-2xl font-black uppercase tracking-wider text-[#2A160D] mt-1">
                    Naseer Garden Function Plaza
                  </h3>
                  <p className="text-sm font-semibold text-[#4A2E20] leading-relaxed mt-1">
                    Beside Water Reservoir, New Road, Shamsheer Gunj, Hyderabad
                  </p>

                  <div className="mt-3 inline-block px-4 py-1.5 bg-[#FAF4EB] border border-[#CBB494] text-[#8C5D30] font-serif text-xs font-bold rounded-full">
                    Valima Ceremony & Dinner
                  </div>

                  <a
                    href="https://maps.app.goo.gl/NGWrxnkKqc8SJXRP9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#4A2E20] hover:bg-[#2A160D] text-white font-serif text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <span>Get directions</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="3 11 22 2 13 21 11 13 3 11" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== WEDDING TIMELINE / ITINERARY (MATCHING ATTACHED IMAGE) ===== */}
            <WeddingItinerary />

            {/* Crescent Divider */}
            <CrescentDivider />

            {/* ===== QURAN VERSE 2: SURAH AN-NABA ===== */}
            <div className="text-center py-7 px-6 border-2 border-[#CBB494] bg-[#FAF4EB] rounded-3xl shadow-md">
              <div className="max-w-sm mx-auto space-y-2">
                <div className="font-arabic text-2xl sm:text-3xl text-[#1F1209] font-bold leading-relaxed">
                  وَخَلَقْنَاكُمْ أَزْوَاجًا
                </div>
                <p className="text-sm font-serif italic text-[#2D1A12] font-semibold">
                  "And We created you in pairs."
                </p>
                <div className="text-[10px] tracking-widest uppercase font-bold text-[#8C5D30]">
                  ✦ Surah An-Naba, 78:8 ✦
                </div>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== COUPLE PORTRAIT 1 ===== */}
            <div className="w-full bg-white border-2 border-[#CBB494] rounded-3xl p-4 shadow-xl overflow-hidden">
              <div className="w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#CBB494]/40">
                <img
                  src="./couple2.jpeg"
                  alt="Faiza & Arfath"
                  className="w-full h-auto object-cover max-h-[450px] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="py-3 px-2 text-center">
                <span className="text-xs font-serif text-[#2A160D] block font-bold tracking-wide">
                  "Two souls destined by Allah to walk together forever"
                </span>
              </div>
            </div>

            {/* Crescent Divider */}
            <CrescentDivider />

            {/* ===== QURAN VERSE 3: SURAH AL-BAQARAH (2:187) ===== */}
            <div className="w-full bg-[#FAF4EB] border-2 border-[#CBB494] rounded-3xl p-6 sm:p-7 shadow-md text-center space-y-3">
              <div className="font-arabic text-2xl sm:text-3xl text-[#1F1209] font-bold leading-relaxed select-none">
                هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ
              </div>
              <div className="h-[1px] w-24 bg-[#CBB494] mx-auto" />
              <p className="text-xs sm:text-sm font-serif italic text-[#2D1A12] font-semibold leading-relaxed max-w-sm mx-auto">
                "They are clothing for you and you are clothing for them."
              </p>
              <div className="pt-0.5">
                <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#CBB494] text-[10px] tracking-widest uppercase font-bold text-[#8C5D30]">
                  ✦ Surah Al-Baqarah • 2:187 ✦
                </span>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== GIFTS SECTION (MATCHING USER SCREENSHOT) ===== */}
            <GiftsSection />

            {/* ===== ROYAL MENU SECTION WITH FRAME (fraem.png) ===== */}
            <div className="w-full">
              {/* Ornate Ribbon Frame matching reference image flow */}
              <MenuFrame>
                <div className="space-y-4 w-full text-center flex flex-col items-center justify-center">
                  {/* Top Bismillah / Dawat heading inside frame */}
                  <div>
                    <span className="font-serif text-[11px] tracking-[0.25em] text-[#8C243B] uppercase font-bold block mb-1">
                      ✦ Dawat-e-Khaas ✦
                    </span>
                    <h3 className="font-serif italic text-2xl sm:text-3xl font-black text-[#2A160D]">
                      Hyderabadi Dawat
                    </h3>
                  </div>

                  <div className="w-20 h-[1.5px] bg-[#CBB494] mx-auto my-1" />

                  {/* Main Mention: Hyderabaadi food In sha allah */}
                  <div className="py-3 px-5 rounded-2xl bg-white/70 border border-[#CBB494]/40 shadow-xs max-w-[260px] mx-auto">
                    <p className="font-serif italic text-lg sm:text-xl font-bold text-[#8C243B] leading-snug">
                      Hyderabaadi food In sha allah
                    </p>
                  </div>

                  <div className="w-16 h-[1px] bg-[#CBB494]/40 mx-auto my-1" />

                  <span className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#8C5D30] font-bold block">
                    ✦ Served with Love & Warmth ✦
                  </span>
                </div>
              </MenuFrame>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== DRESS CODE SECTION ===== */}
            <div className="w-full">
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#FAF4EB] border-2 border-[#CBB494] flex items-center justify-center text-[#5C3D2E] mx-auto mb-2 shadow-sm">
                  <Shirt className="w-6 h-6 stroke-[2]" />
                </div>
                <h2 className="font-serif italic text-3xl sm:text-4xl font-black tracking-widest text-[#2A160D] uppercase">
                  Dress Code
                </h2>
                <span className="font-serif text-xs font-bold tracking-[0.2em] text-[#8C5D30] uppercase block mt-1">
                  ✦ Elegance & Celebration ✦
                </span>
              </div>

              <div className="bg-white border-2 border-[#CBB494] rounded-3xl p-6 text-center shadow-xl">
                <div className="my-2 py-6 px-4 bg-[#FAF4EB] border border-[#CBB494] rounded-2xl flex flex-col items-center justify-center max-w-xs mx-auto">
                  <div className="w-16 h-20 border-2 border-[#8C5D30] rounded-t-full flex flex-col items-center justify-center p-2 bg-white shadow-xs">
                    <svg className="w-8 h-8 text-[#8C5D30]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 3.6 4.3-1.3-1.3 4.3 3.6 2.4-3.6 2.4 1.3 4.3-4.3-1.3-2.4 3.6-2.4-3.6-4.3 1.3 1.3-4.3-3.6-2.4 3.6-2.4-1.3-4.3 4.3 1.3z" />
                    </svg>
                  </div>

                  <h3 className="font-serif italic text-lg font-bold text-[#2A160D] mt-4 mb-1">
                    Traditional / Formal Attire
                  </h3>
                  <p className="text-xs font-serif text-[#8C5D30] tracking-wide italic font-medium">
                    We invite you to wear whatever makes you feel your most festive and elegant!
                  </p>
                </div>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== OUR STORY SECTION ===== */}
            <div className="w-full text-center bg-white border-2 border-[#CBB494] rounded-3xl p-8 shadow-xl">
              <div className="w-12 h-12 rounded-full bg-[#FAF4EB] border-2 border-[#CBB494] flex items-center justify-center text-[#5C3D2E] mx-auto mb-2 shadow-sm">
                <BookOpen className="w-6 h-6 stroke-[2]" />
              </div>
              <h2 className="font-serif italic text-3xl sm:text-4xl font-black tracking-widest text-[#2A160D] uppercase">
                Our Story
              </h2>
              <div className="font-arabic text-xl sm:text-2xl text-[#1F1209] font-bold my-2 select-none">
                النِّكَاحُ مِنْ سُنَّتِي
              </div>
              <p className="text-[11px] font-serif text-[#8C5D30] tracking-widest uppercase font-bold">
                ✦ "Nikah is from my Sunnah" — Prophet Muhammad ﷺ ✦
              </p>
              <p className="text-sm leading-relaxed font-serif text-[#2D1A12] mt-3 max-w-sm mx-auto font-medium italic">
                "Two souls destined for each other by Allah, beginning a lifelong journey of unconditional love, profound faith, and togetherness."
              </p>
              <div className="mt-5 flex justify-center items-center gap-4 text-[#8C5D30]">
                <div className="w-16 h-[1.5px] bg-current" />
                <div className="w-2 h-2 rounded-full bg-current" />
                <div className="w-16 h-[1.5px] bg-current" />
              </div>
            </div>

            {/* Crescent Divider */}
            <CrescentDivider />

            {/* ===== COUPLE PHOTO 2 ===== */}
            <div className="w-full bg-white border-2 border-[#CBB494] rounded-3xl p-4 shadow-xl overflow-hidden">
              <div className="w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#CBB494]/40">
                <img
                  src="./found-in-crowd.jpeg"
                  alt="Two hearts destined to meet"
                  className="w-full h-auto object-cover max-h-[450px] hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="py-3 px-2 text-center">
                <span className="text-xs font-serif text-[#2A160D] block font-bold">
                  "Two hearts found each other under Allah's guidance"
                </span>
              </div>
            </div>

            {/* Star Divider */}
            <IslamicStarDivider />

            {/* ===== FEATURED CARTOON ILLUSTRATION CARD ===== */}
            <div className="w-full">
              <div className="text-center mb-4">
                <h2 className="font-serif italic text-2xl sm:text-3xl font-black tracking-widest text-[#2A160D] uppercase">
                  Celebration
                </h2>
                <p className="text-xs font-serif italic text-[#8C5D30] mt-1 font-bold">
                  Faiza & Arfath
                </p>
              </div>

              <div className="bg-white border-2 border-[#CBB494] rounded-3xl p-5 shadow-xl flex flex-col items-center text-center">
                <div className="w-full rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#CBB494]/40 p-2">
                  <img
                    src="./cartoon.jpeg"
                    alt="Faiza and Arfath Cartoon Illustration"
                    className="w-full h-auto object-contain max-h-[380px] mx-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="py-3 px-2">
                  <span className="font-serif italic text-base font-black text-[#2A160D] tracking-wide block">
                    Faiza & Arfath
                  </span>
                  <span className="text-xs font-serif italic text-[#8C5D30] block mt-0.5 font-bold">
                    "Together in love, faith & togetherness"
                  </span>
                </div>
              </div>
            </div>

            {/* Crescent Divider */}
            <CrescentDivider />

            {/* ===== ELEGANT CLOSING BLESSINGS ===== */}
            <div className="text-center py-8 px-6 bg-white/95 backdrop-blur-md border-2 border-[#CBB494] rounded-3xl shadow-xl my-2">
              <div className="font-arabic text-xl sm:text-2xl text-[#1F1209] font-bold mb-2 select-none">
                بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
              </div>
              <p className="text-xs font-serif italic text-[#5C3D2E] font-medium leading-relaxed max-w-xs mx-auto">
                "May Allah bless you and shower His blessings upon you, and bring you together in goodness."
              </p>
              <div className="mt-4 text-[10px] uppercase tracking-[0.25em] font-bold text-[#8C5D30]">
                ✦ With Prayers & Warmth — Faiza & Arfath ✦
              </div>
            </div>

          </div>
        </div>
      </>
      )}
    </div>
  );
}