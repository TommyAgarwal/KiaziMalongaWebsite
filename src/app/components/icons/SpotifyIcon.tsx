import React from 'react';
import svgPaths from "../../imports/svg-pb1m2jqose";

interface SpotifyIconProps {
  className?: string;
}

const SpotifyIcon = React.forwardRef<SVGSVGElement, SpotifyIconProps>(
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
          <path clipRule="evenodd" d={svgPaths.pb400f80} fill="white" fillRule="evenodd" />
        </g>
      </svg>
    );
  }
);

SpotifyIcon.displayName = "SpotifyIcon";

export default SpotifyIcon;