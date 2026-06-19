import React, { ReactNode } from 'react';
import { motion, Variants } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-up';
  delay?: number;
  duration?: number;
  className?: string;
  width?: 'fit-content' | '100%';
  once?: boolean;
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.5,
  className = '',
  width = '100%',
  once = true,
}: ScrollRevealProps) {
  const getVariants = (): Variants => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay, ease: 'easeOut' } },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: 'easeOut' } },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay, ease: 'easeOut' } },
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay, ease: 'easeOut' } },
        };
      case 'fade-in':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay, ease: 'easeOut' } },
        };
    }
  };

  return (
    <div style={{ position: 'relative', width }} className={className}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        style={{ width: '100%', height: '100%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
