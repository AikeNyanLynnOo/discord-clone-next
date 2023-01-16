export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  visibleSpring: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  draggable: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  imgScaleToLarge: {
    scale: [0, 1],
    transition: {
      ease: "easeIn",
      type: "spring",
      stiffness: 60,
      duration: 0.4,
    },
  },
  swipeLeft: {
    x: "0",
    transition: {
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};
