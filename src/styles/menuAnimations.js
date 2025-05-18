export const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    scale: 1,
    x: 0,
    transition: {
      height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4, ease: "easeOut" },
      x: { duration: 0 },
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    scale: 0.95,
    x: 0,
    transition: {
      height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
      opacity: { duration: 0.35 },
      scale: { duration: 0.3, ease: "easeIn" },
      x: { duration: 0 },
      when: "afterChildren",
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

export const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      y: { type: "spring", stiffness: 300, damping: 20 },
      rotate: { duration: 0.4 },
    },
  },
  closed: {
    opacity: 0,
    y: -16,
    scale: 0.9,
    rotate: -2,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export const dividerVariants = {
  open: (i) => ({
    opacity: 1,
    width: "100%",
    transition: {
      delay: 0.2 + (i * 0.1),
      duration: 0.4,
      ease: "easeOut",
    }
  }),
  closed: {
    opacity: 0,
    width: "0%",
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};
