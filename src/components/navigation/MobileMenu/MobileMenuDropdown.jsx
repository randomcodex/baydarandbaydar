import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import GlowingDivider from '../../ui/GlowingDivider';
import { menuVariants, itemVariants, dividerVariants } from '../../../styles/menuAnimations';

const MobileMenuDropdown = ({ isOpen, navLinks, navLinkClass, closeMenu }) => {
  return (
    <div className="lg:hidden fixed top-[68px] left-0 right-0 z-50 overflow-hidden max-h-[calc(100vh-70px)]">
      <div className="w-full px-0 backdrop-blur-xs">
        <AnimatePresence mode="sync">
          {isOpen && (
            <motion.div
              className="flex flex-col items-center w-full bg-[#051905]/35 rounded-md shadow-lg overflow-y-auto max-h-[calc(80vh-70px)] origin-top"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={(e) => e.stopPropagation()}
              layout
            >
              <motion.div variants={dividerVariants} custom={0}>
                <GlowingDivider />
              </motion.div>
              
              {navLinks.map((link, idx) => (
                <div key={link.to} className="w-full">
                  <motion.div
                    variants={itemVariants} 
                    className="w-full flex justify-center py-3"
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink 
                      to={link.to} 
                      className={({ isActive }) => navLinkClass(isActive)} 
                      onClick={() => {
                        closeMenu();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                  {idx < navLinks.length - 1 && (
                    <motion.div variants={dividerVariants} custom={idx + 1}>
                      <GlowingDivider />
                    </motion.div>
                  )}
                </div>
              ))}

              <motion.div variants={dividerVariants} custom={navLinks.length + 1}>
                <GlowingDivider />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileMenuDropdown;
