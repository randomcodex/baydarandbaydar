import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const InViewWrapper = ({
  children,
  className = '',
  animationVariants = defaultAnimationVariants,
  threshold = 0.1,
  as = 'div',
  ...props
}) => {
  const [ref, isInView] = useIntersectionObserver({ threshold });
  
  const MotionTag = motion[as];
  
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      {...props}
    >
      {children}
    </MotionTag>
  );
};

const defaultAnimationVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] 
    }
  }
};

export default InViewWrapper;
