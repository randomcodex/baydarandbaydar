import { motion } from 'framer-motion';

const AnimatedGradientSpan = ({ className = '', children, ...props }) => {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      {...props}
    >
      {children}
      <motion.span 
        className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-gold-accent via-white to-gold-accent animate-pulse-glow"
        animate={{
          boxShadow: [
            '0 0 8px 1px rgba(255, 225, 155, 0.4)',
            '0 0 12px 2px rgba(255, 225, 155, 0.6)',
            '0 0 8px 1px rgba(255, 225, 155, 0.4)',
          ],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          },
        }}
      />
    </motion.span>
  );
};

export default AnimatedGradientSpan;
