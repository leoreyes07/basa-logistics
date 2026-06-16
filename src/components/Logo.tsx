import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
  onClick?: () => void;
}

export default function Logo({ className = '', iconOnly = false, light = true, onClick }: LogoProps) {
  const primaryColor = light ? '#ffffff' : '#1e3a8a';
  const secondaryColor = light ? '#60a5fa' : '#3b82f6';
  const textColor = light ? '#ffffff' : '#0f172a';
  const subTextColor = light ? '#94a3b8' : '#475569';

  return (
    <div className={`flex items-center gap-2.5 ${className}`} onClick={onClick}>
      {/* High-fidelity vector rendition of the custom Basa 'B' Arrow & Volcanoes logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <rect width="512" height="512" rx="110" fill="#2563eb" />
        
        {/* The Outer "B" Outline with stylized curves */}
        <path
          d="M140 110 H270 C330 110 375 145 375 200 C375 235 355 260 325 272 C365 285 390 315 390 370 C390 430 340 460 270 460 H140 V110 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="36"
          strokeLinejoin="round"
        />

        {/* Interior Rising Arrow from bottom-left curving to top-right of left lobe */}
        <path
          d="M175 410 C175 300 210 210 290 170"
          stroke="#ffffff"
          strokeWidth="32"
          strokeLinecap="round"
        />
        <path
          d="M295 155 L305 205 L260 185 Z"
          fill="#ffffff"
        />

        {/* Double Mountain Peak representing the volcanoes of Guatemala */}
        <path
          d="M175 415 L240 310 L285 370 L340 280 L400 415 Z"
          fill="#ffffff"
        />
      </svg>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span 
            className="font-display font-extrabold text-lg tracking-wider" 
            style={{ color: textColor }}
          >
            Basa
          </span>
          <span 
            className="font-sans font-semibold text-xs tracking-widest uppercase opacity-90 mt-0.5" 
            style={{ color: secondaryColor }}
          >
            Logistics
          </span>
        </div>
      )}
    </div>
  );
}

// Alternative speedlines logo model found in the screenshots
export function LogoSpeedlines({ className = '', light = true }: { className?: string; light?: boolean }) {
  const color = light ? '#ffffff' : '#2563eb';
  const textColor = light ? '#ffffff' : '#0f172a';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="38"
        height="32"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Speedlines 'ZB' monogram stylized */}
        <path
          d="M10 10 H90 L60 40 H10 Z"
          fill={color}
        />
        <path
          d="M20 28 H80 L55 52 H15 Z"
          fill={color}
          opacity="0.85"
        />
        <path
          d="M15 45 H70 L45 70 H5 Z"
          fill={color}
          opacity="0.7"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold text-xl tracking-tight" style={{ color: textColor }}>
          Basa
        </span>
        <span className="font-sans text-[10px] tracking-widest uppercase text-blue-400 font-bold">
          Logistics
        </span>
      </div>
    </div>
  );
}
