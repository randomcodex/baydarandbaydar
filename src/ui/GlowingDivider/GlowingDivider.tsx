import React from 'react';
import './GlowingDivider.scss';

interface GlowingDividerProps {
  delay?: number;
}

const GlowingDivider: React.FC<GlowingDividerProps> = ({ delay = 0 }) => {
  return (
    <div className="glowing-divider" style={{ animationDelay: `${delay * 0.05}s` }}>
      <div className="glowing-divider__wrapper">
        <div className="glowing-divider__line"></div>
      </div>
    </div>
  );
};

export default GlowingDivider;
