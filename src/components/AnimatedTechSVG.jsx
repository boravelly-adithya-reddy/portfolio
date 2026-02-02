import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTechSVG = ({ size = 260 }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 0 }}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    style={{ display: 'block', margin: '0 auto' }}
  >
    {/* Laptop base */}
    <rect x="40" y="160" width="180" height="30" rx="8" fill="var(--bg-tertiary)" stroke="var(--border)" strokeWidth="2" />
    {/* Laptop body */}
    <rect x="55" y="60" width="150" height="100" rx="12" fill="var(--bg-primary)" stroke="var(--primary)" strokeWidth="3" />
    {/* Screen */}
    <rect x="65" y="70" width="130" height="70" rx="6" fill="var(--bg-secondary)" stroke="var(--primary)" strokeWidth="1.5" />
    {/* Animated code lines */}
    <motion.rect x="75" y="85" width="60" height="8" rx="2" fill="var(--primary)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
    />
    <motion.rect x="75" y="100" width="90" height="8" rx="2" fill="var(--accent)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, -10, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.rect x="75" y="115" width="50" height="8" rx="2" fill="var(--secondary)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
    />
    {/* Keyboard lines */}
    <rect x="80" y="175" width="40" height="4" rx="2" fill="var(--border)" />
    <rect x="140" y="175" width="40" height="4" rx="2" fill="var(--border)" />
    {/* Touchpad */}
    <rect x="120" y="182" width="20" height="6" rx="2" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1" />
  </motion.svg>
);

export default AnimatedTechSVG; 