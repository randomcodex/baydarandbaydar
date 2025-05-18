import { motion } from 'framer-motion';

const GlowingDivider = ({ className = '', delay = 0, ...props }) => (
  <motion.div
    className={`w-full flex justify-center ${className}`}
    {...props}
  >
    <motion.div
      className="h-px w-full bg-gradient-to-r from-transparent via-[#ffe19b] to-transparent"
      style={{
        boxShadow: '0 0 8px 1px rgba(255, 225, 155, 0.7)',
      }}      animate={{
        boxShadow: [
          '0 0 4px rgba(255, 225, 155, 0.5)',
          '0 0 8px rgba(255, 225, 155, 0.8)',
          '0 0 4px rgba(255, 225, 155, 0.5)',
        ],
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
          delay,
        },
      }}
    />  
  </motion.div>
);

export default GlowingDivider;
