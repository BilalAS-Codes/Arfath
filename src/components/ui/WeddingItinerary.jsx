import React from 'react';

// Delicate vintage clock emblem with soft watercolor floral wreath
const VintageClockIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 mx-auto drop-shadow-xs"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Soft floral wreath background */}
    <g opacity="0.85">
      <circle cx="20" cy="18" r="4.5" fill="#E8B4B8" fillOpacity="0.6" />
      <circle cx="44" cy="18" r="4.5" fill="#E8B4B8" fillOpacity="0.6" />
      <circle cx="15" cy="28" r="3.5" fill="#F3C6CB" fillOpacity="0.5" />
      <circle cx="49" cy="28" r="3.5" fill="#F3C6CB" fillOpacity="0.5" />
      <circle cx="18" cy="38" r="3" fill="#E8B4B8" fillOpacity="0.4" />
      <circle cx="46" cy="38" r="3" fill="#E8B4B8" fillOpacity="0.4" />

      <path d="M16 22C13 20 12 16 14 14C16 16 17 19 16 22Z" fill="#A3B18A" fillOpacity="0.65" />
      <path d="M48 22C51 20 52 16 50 14C48 16 47 19 48 22Z" fill="#A3B18A" fillOpacity="0.65" />
      <path d="M13 32C10 32 9 29 11 27C13 29 14 31 13 32Z" fill="#A3B18A" fillOpacity="0.6" />
      <path d="M51 32C54 32 55 29 53 27C51 29 50 31 51 32Z" fill="#A3B18A" fillOpacity="0.6" />
    </g>

    {/* Pocket watch loop / crown at 12 o'clock */}
    <path
      d="M32 10V6M28 6H36M32 6C35 6 36.5 3.5 35 1.5C33.5 -0.5 30.5 -0.5 29 1.5C27.5 3.5 29 6 32 6Z"
      stroke="#B38A58"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FAF5EE"
    />

    {/* Pocket watch round case */}
    <circle cx="32" cy="32" r="20" stroke="#B38A58" strokeWidth="2" fill="#FCFAF6" />
    <circle cx="32" cy="32" r="17.5" stroke="#D8B98F" strokeWidth="0.8" strokeDasharray="1.5 2" />

    {/* Clock hour markings */}
    <line x1="32" y1="16.5" x2="32" y2="19" stroke="#7A5636" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="47.5" y1="32" x2="45" y2="32" stroke="#7A5636" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="32" y1="47.5" x2="32" y2="45" stroke="#7A5636" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16.5" y1="32" x2="19" y2="32" stroke="#7A5636" strokeWidth="1.5" strokeLinecap="round" />

    {/* Hands pointing at 18:00 (6:00 PM Nikah) */}
    <line x1="32" y1="32" x2="32" y2="44" stroke="#52361F" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="32" y1="32" x2="32" y2="19" stroke="#52361F" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="32" cy="32" r="1.8" fill="#B38A58" />
  </svg>
);

// Nikah Ceremony: Sacred Arch with Golden Rings
const NikahCeremonyIcon = () => (
  <svg
    viewBox="0 0 60 70"
    className="w-11 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Islamic Mosque Arch Outline */}
    <path
      d="M16 58V32C16 22 30 14 30 14C30 14 44 22 44 32V58"
      stroke="#9E4154"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arch Base */}
    <line x1="12" y1="58" x2="48" y2="58" stroke="#9E4154" strokeWidth="2" strokeLinecap="round" />

    {/* Intertwined Wedding Bands */}
    <ellipse cx="26" cy="38" rx="8" ry="8" stroke="#9E4154" strokeWidth="1.8" fill="none" />
    <ellipse cx="34" cy="38" rx="8" ry="8" stroke="#B8860B" strokeWidth="1.8" fill="none" />

    {/* Arch Keystone Star */}
    <circle cx="30" cy="14" r="1.5" fill="#9E4154" />
    <path d="M30 6L31 8L33 9L31 10L30 12L29 10L27 9L29 8Z" fill="#B8860B" />

    {/* Delicate Floral Sprigs along arch */}
    <circle cx="16" cy="32" r="1.5" fill="#9E4154" />
    <circle cx="44" cy="32" r="1.5" fill="#9E4154" />
  </svg>
);

// Dawat: Royal Feast Cloche Platter
const RoyalDawatIcon = () => (
  <svg
    viewBox="0 0 70 70"
    className="w-13 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Aroma steam wisps */}
    <path d="M30 18C28 14 32 10 30 6" stroke="#C49A5B" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />
    <path d="M36 17C34 13 38 9 36 5" stroke="#C49A5B" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />
    <path d="M42 19C40 15 44 11 42 7" stroke="#C49A5B" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />

    {/* Cloche dome handle */}
    <circle cx="35" cy="22" r="3" stroke="#9E4154" strokeWidth="1.6" fill="#FAF5EE" />

    {/* Domed Cloche Lid */}
    <path
      d="M16 46C16 30 25 24 35 24C45 24 54 30 54 46H16Z"
      stroke="#9E4154"
      strokeWidth="1.6"
      strokeLinejoin="round"
      fill="#FAF4F0"
    />
    <path d="M22 40C25 33 30 30 35 30" stroke="#D48393" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

    {/* Serving Platter Tray */}
    <path d="M12 47H58" stroke="#9E4154" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M14 47C17 53 53 53 56 47"
      stroke="#9E4154"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="#F5EBE1"
    />
  </svg>
);

// Rukhsati: Hands in Dua & Crescent Star of Blessings
const DuaRukhsatiIcon = () => (
  <svg
    viewBox="0 0 60 70"
    className="w-11 h-14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Crescent Moon */}
    <path
      d="M26 14C23 18 23 24 27 28C31 32 37 32 41 29C39 33 33 36 27 34C21 32 18 26 20 20C21 17 23 15 26 14Z"
      fill="#B8860B"
    />
    {/* Star */}
    <polygon
      points="36,16 37.5,19.5 41,20 38.5,22.5 39,26 36,24 33,26 33.5,22.5 31,20 34.5,19.5"
      fill="#9E4154"
    />

    {/* Raised Hands in Dua Line Art */}
    {/* Left Hand */}
    <path
      d="M20 58V44C20 42 22 40 24 40C26 40 27 42 27 45V58"
      stroke="#9E4154"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right Hand */}
    <path
      d="M40 58V44C40 42 38 40 36 40C34 40 33 42 33 45V58"
      stroke="#9E4154"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Connection at Palms */}
    <path d="M26 52C28 54 32 54 34 52" stroke="#9E4154" strokeWidth="1.4" strokeLinecap="round" />

    {/* Radiating Light Rays */}
    <line x1="16" y1="36" x2="12" y2="34" stroke="#C49A5B" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="44" y1="36" x2="48" y2="34" stroke="#C49A5B" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export default function WeddingItinerary() {
  // Sacred Schedule: Nikah, Reception & Dinner, and Valima Ceremony
  const events = [
    {
      day: 'THURSDAY, 08 OCT 2026',
      time: '1:15 PM',
      tag: 'NIKAH CEREMONY',
      title: 'Masjid-e-Asifiya',
      desc: 'Solemnization of Nikah\nAfter Namaz-e-Zohar Jamath (1:15 PM)\nPurani Haveli, Opp. Princess Durre Shehwar Hospital, Hyderabad',
      icon: <NikahCeremonyIcon />,
      side: 'left'
    },
    {
      day: 'THURSDAY, 08 OCT 2026',
      time: '9:00 PM',
      tag: 'RECEPTION & DINNER',
      title: 'Rose Garden Function Hall',
      desc: 'Grand Wedding Dinner & Celebration\nChampapet Road, Santosh Nagar, Hyderabad\nHyderabadi Dawat-e-Khaas In sha Allah',
      icon: <RoyalDawatIcon />,
      side: 'right'
    },
    {
      day: 'SUNDAY, 11 OCT 2026',
      time: '9:00 PM',
      tag: 'VALIMA CEREMONY',
      title: 'Naseer Garden Function Plaza',
      desc: 'Auspicious Valima Ceremony & Dinner\nBeside Water Reservoir, New Road, Shamsheer Gunj, Hyderabad',
      icon: <DuaRukhsatiIcon />,
      side: 'left'
    }
  ];

  return (
    <div className="w-full relative py-8 px-2 select-none">
      {/* Top Header: Vintage Clock Emblem */}
      <div className="flex flex-col items-center justify-center mb-10">
        <VintageClockIcon />
        <h2 className="font-serif italic font-normal text-3xl sm:text-4xl text-[#2B2320] text-center tracking-normal leading-tight mt-3">
          What have planned for you
        </h2>
        <span className="text-[11px] font-serif uppercase tracking-[0.25em] text-[#8C5D30] font-bold mt-1.5">
          ✦ Nikah, Reception & Valima ✦
        </span>
      </div>

      {/* Main Alternating Timeline Container */}
      <div className="relative w-full max-w-[420px] mx-auto min-h-[480px] px-1">
        {/* Continuous Single Vertical Line positioned centrally at 50% */}
        <div
          className="absolute top-4 bottom-8 left-1/2 w-[1.5px] bg-[#C49A5B]/70 -translate-x-1/2 pointer-events-none"
          style={{ boxShadow: '0 0 4px rgba(196,154,91,0.2)' }}
        />

        {/* Milestones */}
        <div className="space-y-10 sm:space-y-12 relative z-10">
          {events.map((item, idx) => {
            const isLeft = item.side === 'left';

            return (
              <div key={idx} className="relative w-full flex items-start min-h-[120px]">
                {/* Hollow Circle Node on the vertical line aligned with Time */}
                <div
                  className="absolute left-1/2 top-[58px] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#C49A5B] bg-[#FAF6EE] z-20 shadow-xs"
                  style={{ boxShadow: '0 0 0 2px rgba(250,246,238,0.8)' }}
                />

                {/* Left Column (50% width) */}
                <div className="w-1/2 pr-4 sm:pr-5 flex flex-col items-end text-right">
                  {isLeft ? (
                    <div className="w-full flex flex-col items-end">
                      {/* Icon */}
                      <div className="h-12 flex items-center justify-end mb-1 hover:scale-105 transition-transform duration-300">
                        {item.icon}
                      </div>

                      {/* Day / Date Badge */}
                      {item.day && (
                        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#8C5D30] font-bold mb-0.5 leading-tight">
                          {item.day}
                        </span>
                      )}

                      {/* Time */}
                      <div className="font-serif italic font-bold text-xl sm:text-2xl text-[#1E1714] tracking-tight leading-none my-0.5">
                        {item.time}
                      </div>

                      {/* Tag / Ceremony Title - Elegant, Crisp, Highly Legible */}
                      <div className="font-serif font-black tracking-wider text-sm sm:text-base text-[#9E4154] uppercase mt-1 leading-snug break-words">
                        {item.tag}
                      </div>

                      {/* Venue Title */}
                      {item.title && (
                        <div className="font-serif font-bold text-xs sm:text-sm text-[#2A160D] mt-1 leading-tight">
                          {item.title}
                        </div>
                      )}

                      {/* Description */}
                      <div className="font-serif italic text-[11px] sm:text-xs text-[#4A352A] leading-relaxed whitespace-pre-line mt-1 max-w-[170px]">
                        {item.desc}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Right Column (50% width) */}
                <div className="w-1/2 pl-4 sm:pl-5 flex flex-col items-start text-left">
                  {!isLeft ? (
                    <div className="w-full flex flex-col items-start">
                      {/* Icon */}
                      <div className="h-12 flex items-center justify-start mb-1 hover:scale-105 transition-transform duration-300">
                        {item.icon}
                      </div>

                      {/* Day / Date Badge */}
                      {item.day && (
                        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-[#8C5D30] font-bold mb-0.5 leading-tight">
                          {item.day}
                        </span>
                      )}

                      {/* Time */}
                      <div className="font-serif italic font-bold text-xl sm:text-2xl text-[#1E1714] tracking-tight leading-none my-0.5">
                        {item.time}
                      </div>

                      {/* Tag / Ceremony Title - Elegant, Crisp, Highly Legible */}
                      <div className="font-serif font-black tracking-wider text-sm sm:text-base text-[#9E4154] uppercase mt-1 leading-snug break-words">
                        {item.tag}
                      </div>

                      {/* Venue Title */}
                      {item.title && (
                        <div className="font-serif font-bold text-xs sm:text-sm text-[#2A160D] mt-1 leading-tight">
                          {item.title}
                        </div>
                      )}

                      {/* Description */}
                      <div className="font-serif italic text-[11px] sm:text-xs text-[#4A352A] leading-relaxed whitespace-pre-line mt-1 max-w-[170px]">
                        {item.desc}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll For More Details Prompt */}
        <div className="flex flex-col items-center justify-center my-10 relative z-10 pointer-events-none opacity-85">
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
    </div>
  );
}
