import React from 'react';
import { motion } from 'framer-motion';

const AnimatedEditorSVG = ({ size = 260 }) => (
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
    {/* Editor window */}
    <rect x="30" y="50" width="200" height="140" rx="16" fill="var(--bg-primary)" stroke="var(--primary)" strokeWidth="3" />
    {/* Top bar */}
    <rect x="30" y="50" width="200" height="28" rx="8" fill="var(--bg-tertiary)" />
    {/* Circles for window controls */}
    <circle cx="48" cy="64" r="5" fill="#f87171" />
    <circle cx="64" cy="64" r="5" fill="#fbbf24" />
    <circle cx="80" cy="64" r="5" fill="#34d399" />
    {/* Animated code lines */}
    <motion.rect x="50" y="90" width="120" height="10" rx="3" fill="var(--primary)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
    />
    <motion.rect x="50" y="110" width="80" height="10" rx="3" fill="var(--accent)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, -10, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.rect x="50" y="130" width="100" height="10" rx="3" fill="var(--secondary)"
      initial={{ opacity: 0.5, x: 0 }}
      animate={{ opacity: [0.5, 1, 0.5], x: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
    />
    {/* Blinking cursor */}
    <motion.rect x="175" y="90" width="8" height="20" rx="2" fill="var(--primary)"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
    />
  </motion.svg>
);

export default AnimatedEditorSVG; 