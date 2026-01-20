
import React from 'react';

const announcements = [
  "Extension of dates: Pre & Post matric scholarship scheme for the year 2024-25 up to October 15th.",
  "New scholarship portal launched for specialized vocational training candidates.",
  "Payment processing initiated for all validated applications of SC/ST students.",
  "Mandatory Aadhaar linking required for scholarship disbursement - Check your profile now."
];

const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-stretch h-12 shadow-sm relative z-20">
      {/* Fixed Label */}
      <div className="bg-emerald-800 text-white font-bold px-6 flex items-center relative z-30 shrink-0">
        Announcements
        <div className="absolute right-0 top-0 bottom-0 w-4 overflow-hidden">
          <div className="bg-emerald-800 w-10 h-10 absolute -right-5 top-1 rotate-45 transform"></div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="flex-1 overflow-hidden flex items-center bg-slate-50 dark:bg-slate-950">
        <div className="whitespace-nowrap flex animate-marquee">
          {announcements.map((text, idx) => (
            <div key={idx} className="flex items-center px-8 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <span className="bg-red-500 text-white text-[10px] uppercase px-1.5 py-0.5 rounded mr-3 animate-pulse">New</span>
              {text}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-10"></div>
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {announcements.map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center px-8 text-sm text-slate-700 dark:text-slate-300 font-medium">
              <span className="bg-red-500 text-white text-[10px] uppercase px-1.5 py-0.5 rounded mr-3 animate-pulse">New</span>
              {text}
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mx-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
