import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex flex-col items-start group">
      {/* Main logo text */}
      <div className="flex items-center">
        {/* S with pixel pattern */}
        <div className="relative">
          <span className="text-[#008080] font-bold text-3xl">S</span>
          <div className="absolute -left-1 -top-1 flex flex-wrap w-2 h-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[2px] h-[2px] bg-[#FF7F50]" />
            ))}
          </div>
        </div>
        {/* Rest of the text */}
        <span className="text-[#008080] font-bold text-3xl">AHAR</span>
        <span className="text-[#FF7F50] font-bold text-3xl">'UX</span>
      </div>
      
      {/* Tagline */}
      <span className="text-[#FF7F50] text-sm tracking-wider mt-1">
        Les Magiciens du Web
      </span>
    </Link>
  );
};

export default Logo;