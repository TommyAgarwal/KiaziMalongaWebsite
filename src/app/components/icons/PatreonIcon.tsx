import React from 'react';
import patreonLogo from '../../../../assets/aa08939ab2fa7598080a13d18e7f771bd2df4cc4.png';

interface PatreonIconProps {
  className?: string;
}

const PatreonIcon = React.forwardRef<HTMLImageElement, PatreonIconProps>(
  ({ className = "w-6 h-6" }, ref) => {
    return (
      <img 
        ref={ref}
        src={patreonLogo} 
        alt="Patreon" 
        className={className}
        style={{ filter: 'brightness(0) invert(1)' }} // Makes the icon white to match other social icons
      />
    );
  }
);

PatreonIcon.displayName = "PatreonIcon";

export default PatreonIcon;