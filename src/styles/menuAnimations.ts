export const menuVariants = {
  closed: {
    opacity: 0,
    scaleY: 0.92,
    translateY: -8,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0],
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    scaleY: 1,
    translateY: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
};

export const itemVariants = {
  closed: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: [0.7, 0, 0.84, 0]
    }
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const dividerVariants = {
  closed: {
    opacity: 0,
    scaleX: 0,
    transition: {
      duration: 0.15,
      ease: [0.7, 0, 0.84, 0]
    }
  },
  open: (custom: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      delay: custom * 0.05
    }
  })
};
