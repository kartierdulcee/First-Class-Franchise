import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Section({ children, className = "", delay = 0, ...props }) {
  return (
    <motion.section
      className={`mx-auto w-full max-w-6xl scroll-mt-32 px-6 py-16 sm:px-8 md:px-12 md:py-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={defaultVariants}
      custom={delay}
      {...props}
    >
      {children}
    </motion.section>
  );
}
