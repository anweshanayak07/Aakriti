import React from 'react';

interface Logo3DProps {
  size?: number;
  className?: string;
}

export const Logo3D: React.FC<Logo3DProps> = ({ size = 48, className = '' }) => {
  return (
    <div 
      className={`logo-3d-wrapper ${className}`} 
      style={{ width: size, height: size, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        width="100%" 
        height="100%"
        className="logo-3d-svg"
      >
        <defs>
          {/* Background Glow */}
          <radialGradient id="headerAGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#AAD922" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#AAD922" stopOpacity="0"/>
          </radialGradient>

          {/* Front Face Main Gradient */}
          <linearGradient id="headerFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2FF66"/>
            <stop offset="45%" stopColor="#AAD922"/>
            <stop offset="100%" stopColor="#79A807"/>
          </linearGradient>

          {/* Top Highlight Gradient */}
          <linearGradient id="headerTopHighlight" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF"/>
            <stop offset="100%" stopColor="#D7FF43"/>
          </linearGradient>

          {/* Left Side Depth Gradient */}
          <linearGradient id="headerLeftDepthGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#679402"/>
            <stop offset="60%" stopColor="#3C5900"/>
            <stop offset="100%" stopColor="#213300"/>
          </linearGradient>

          {/* Right Outer Side Dark Shadow Gradient */}
          <linearGradient id="headerRightShadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#324901"/>
            <stop offset="70%" stopColor="#1A2800"/>
            <stop offset="100%" stopColor="#0B1200"/>
          </linearGradient>

          {/* Inner Cutout Shadow Gradient */}
          <linearGradient id="headerInnerShadowGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#162200"/>
            <stop offset="100%" stopColor="#3D5B00"/>
          </linearGradient>

          {/* Crossbar Gradient */}
          <linearGradient id="headerCrossbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C8F82C"/>
            <stop offset="100%" stopColor="#93C409"/>
          </linearGradient>

          {/* 3D Drop Shadow Filter */}
          <filter id="headerShadow3d" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.7"/>
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#AAD922" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="50" cy="50" r="46" fill="url(#headerAGlow)"/>

        {/* 3D Letter A Assembly */}
        <g filter="url(#headerShadow3d)">
          {/* 1. LEFT LEG OUTER DEPTH SIDE */}
          <path d="M 45 12 L 37 18 L 10 82 L 18 78 Z" fill="url(#headerLeftDepthGrad)"/>

          {/* 2. RIGHT LEG OUTER DEPTH SHADOW */}
          <path d="M 45 12 L 82 78 L 89 73 L 53 8 Z" fill="url(#headerRightShadowGrad)"/>

          {/* 3. INNER HOLE DEPTH WALL */}
          <path d="M 32 48 L 37 43 L 63 43 L 68 48 Z" fill="url(#headerInnerShadowGrad)"/>

          {/* 4. LEFT LEG FRONT FACE */}
          <path d="M 45 12 L 18 78 L 29 78 L 48 30 Z" fill="url(#headerFrontGrad)"/>

          {/* 5. RIGHT LEG FRONT FACE */}
          <path d="M 45 12 L 48 30 L 71 78 L 82 78 Z" fill="url(#headerFrontGrad)"/>

          {/* 6. TOP PEAK BEVEL HIGHLIGHT */}
          <path d="M 45 12 L 53 8 L 48 30 Z" fill="url(#headerTopHighlight)" opacity="0.95"/>

          {/* 7. 3D FLOATING CROSSBAR - FRONT FACE */}
          <path d="M 32 48 L 68 48 L 63 58 L 27 58 Z" fill="url(#headerCrossbarGrad)"/>

          {/* 8. 3D FLOATING CROSSBAR - TOP BEVEL */}
          <path d="M 32 48 L 37 43 L 73 43 L 68 48 Z" fill="url(#headerTopHighlight)" opacity="0.9"/>

          {/* 9. 3D FLOATING CROSSBAR - RIGHT SIDE DEPTH */}
          <path d="M 68 48 L 73 43 L 68 53 L 63 58 Z" fill="url(#headerRightShadowGrad)"/>

          {/* 10. NEON EDGE HIGHLIGHT STRIPES */}
          <path d="M 45 12 L 18 78" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.85"/>
          <path d="M 45 12 L 82 78" stroke="#E2FF66" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
          <path d="M 32 48 L 68 48" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.75"/>
        </g>
      </svg>
    </div>
  );
};
