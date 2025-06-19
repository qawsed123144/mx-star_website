'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'about', label: '關於\n我們', angle: 0 },
  { id: 'services', label: '顧問\n服務', angle: 72 },
  { id: 'data-thinking', label: '大數據\n思維', angle: 144 },
  { id: 'contact', label: '聯絡\n我們', angle: -72 },
  { id: 'why-us', label: '我們的\n優勢', angle: -144 },
];

export default function CircularNavigation({ activeSection, onSectionChange }: NavigationProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="circular-hub relative flex items-center justify-center" style={{ height: '600px' }}>
      {/* World Map Background */}
      <div className="absolute inset-0 world-map-bg"></div>

      {/* Central Circle with Logo */}
      <motion.div
        className="w-48 h-48 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-light)] 
          flex flex-col items-center justify-center text-[var(--deep-black)] animate-pulse-gold cursor-pointer"
        onClick={() => onSectionChange('home')}
      >
        <div className="text-4xl font-bold mb-2">MX</div>
        <div className="text-sm font-medium">敏星數據</div>
      </motion.div>

      <div className="flex items-center justify-center">
        {/* Surrounding Navigation Circles */}
        {navigationItems.map((item) => {
          return (
            <div
              key={item.id}
              className="absolute flex items-center justify-center"
              style={{
                top: '46%',
                left: '46%',
                transform: `rotate(${item.angle}deg) translateY(-210px) rotate(${-item.angle}deg)`,
                transformOrigin: 'center',
              }}
            >
              <div
                className="absolute inset-0 flex items-center justify-center -z-10"
                style={{ transform: `rotate(${item.angle}deg)` }}
              >
                <div
                  className={`w-0.5 h-[80px] bg-[var(--gold)] transition-opacity duration-300 origin-top ${activeSection === item.id || hoveredItem === item.id ? 'opacity-80' : 'opacity-30'
                    }`}
                  style={{ transform: `translateY(110%)` }}
                />
              </div>
              <motion.div
                className={`circle-link w-24 h-24 rounded-full border-2 border-[var(--gold)] flex items-center justify-center cursor-pointer transition-all duration-300 pointer-events-auto z-10 ${activeSection === item.id
                  ? 'bg-[hsla(45,68%,53%,0.4)] border-[var(--gold-light)]'
                  : 'bg-[hsla(45,68%,53%,0.2)] hover:bg-[hsla(45,68%,53%,0.3)]'
                  }`}
                onClick={() => onSectionChange(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: activeSection === item.id || hoveredItem === item.id
                    ? '0 0 25px hsla(45, 68%, 53%, 0.5)'
                    : '0 0 0px hsla(45, 68%, 53%, 0)'
                }}
              >
                <span className="text-sm font-medium text-center whitespace-pre-line">
                  {item.label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </div>

    </div>
  );

}
