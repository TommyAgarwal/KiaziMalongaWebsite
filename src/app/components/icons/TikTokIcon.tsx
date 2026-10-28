import React from 'react';
import svgPaths from "../../imports/svg-gprnw7tohu";

interface TikTokIconProps {
  className?: string;
}

const TikTokIcon = React.forwardRef<SVGSVGElement, TikTokIconProps>(
  ({ className }, ref) => {
    return (
      <svg 
        ref={ref}
        className={className} 
        fill="none" 
        preserveAspectRatio="xMidYMid meet" 
        viewBox="0 0 60 60"
      >
        <g>
          <path 
            d={svgPaths.pa5b8f00} 
            stroke="white" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="5" 
          />
        </g>
      </svg>
    );
  }
);

TikTokIcon.displayName = "TikTokIcon";

export default TikTokIcon;