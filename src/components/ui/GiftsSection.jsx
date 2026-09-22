import React from 'react';

// Delicate watercolor-style gift box illustration
const WatercolorGiftBox = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 mx-auto drop-shadow-xs"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft floral greenery & baby's breath behind the gift */}
    <g opacity="0.8">
      <path d="M22 16C18 13 16 9 19 7C22 9 23 12 22 16Z" fill="#A3B18A" />
      <path d="M42 16C46 13 48 9 45 7C42 9 41 12 42 16Z" fill="#A3B18A" />
      <circle cx="16" cy="14" r="1.5" fill="#E8B4B8" />
      <circle cx="48" cy="14" r="1.5" fill="#E8B4B8" />
      <circle cx="20" cy="10" r="1" fill="#C49A5B" />
      <circle cx="44" cy="10" r="1" fill="#C49A5B" />
    </g>

    {/* Ribbon Bow on top */}
    {/* Left loop */}
    <path
      d="M32 16C26 10 21 13 24 18C27 20 31 18 32 16Z"
      fill="#E8A5B0"
      stroke="#9E4154"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Right loop */}
    <path
      d="M32 16C38 10 43 13 40 18C37 20 33 18 32 16Z"
      fill="#E8A5B0"
      stroke="#9E4154"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    {/* Bow knot */}
    <circle cx="32" cy="17" r="2.5" fill="#C25A70" stroke="#9E4154" strokeWidth="1" />
    {/* Flowing ribbon tails */}
    <path d="M30 19C28 24 25 26 23 28" stroke="#9E4154" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M34 19C36 24 39 26 41 28" stroke="#9E4154" strokeWidth="1.2" strokeLinecap="round" />

    {/* Gift Box Lid */}
    <rect
      x="17"
      y="20"
      width="30"
      height="8"
      rx="1.5"
      fill="#FCFAF7"
      stroke="#9E4154"
      strokeWidth="1.4"
    />
    {/* Lid vertical ribbon */}
    <rect x="30" y="20" width="4" height="8" fill="#E8A5B0" />

    {/* Gift Box Base */}
    <path
      d="M19 28H45L43 50H21L19 28Z"
      fill="#FAF5EE"
      stroke="#9E4154"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    {/* Box vertical ribbon */}
    <path d="M30 28H34L33.5 50H30.5L30 28Z" fill="#E8A5B0" />

    {/* Box subtle shading & sparkles */}
    <line x1="23" y1="34" x2="27" y2="44" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.8" strokeLinecap="round" />
    <path d="M49 32L50 33.5L52 34L50 34.5L49 36L48 34.5L46 34L48 33.5Z" fill="#C49A5B" />
  </svg>
);

export default function GiftsSection() {
  return (
    <div className="w-full relative py-6 px-3 select-none">
      {/* Top Header: Watercolor Gift Box */}
      <div className="flex flex-col items-center justify-center mb-6">
        <WatercolorGiftBox />
        <h2
          className="font-script text-4xl sm:text-5xl text-[#9E4154] text-center tracking-normal mt-2 drop-shadow-xs"
          style={{ fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', cursive" }}
        >
          Gifts
        </h2>
      </div>

      {/* Translucent Card with Heartfelt Message */}
      <div className="w-full max-w-[420px] mx-auto bg-white/40 backdrop-blur-xs border border-[#9E4154]/25 rounded-3xl p-6 sm:p-8 text-center shadow-sm">
        {/* Main Quote as requested by user */}
        <p className="font-serif italic text-xl sm:text-2xl text-[#2A160D] font-normal leading-snug">
          "Your presence and dua's are our best gift"
        </p>

        {/* Heartfelt note */}
        <p className="font-serif italic text-xs sm:text-sm text-[#5C3D2E] mt-3 leading-relaxed max-w-xs mx-auto">
          Your love, warm presence, and heartfelt prayers are all that we ask for on our special day.
        </p>

        {/* Thank You Script */}
        <div
          className="font-script text-3xl sm:text-4xl text-[#9E4154] mt-4 mb-1"
          style={{ fontFamily: "'Alex Brush', 'Great Vibes', 'Pinyon Script', cursive" }}
        >
          Thank you
        </div>
      </div>

      {/* Scroll For More Details Prompt right before Menu Frame */}
      <div className="flex flex-col items-center justify-center mt-8 mb-2 relative z-10 pointer-events-none opacity-85">
        <span
          className="text-[11px] font-sans font-bold tracking-widest text-[#5A463B] uppercase mb-2 drop-shadow-xs"
          style={{ letterSpacing: '0.18em' }}
        >
          SCROLL FOR MORE DETAILS
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#5A463B]/70 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#5A463B] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
