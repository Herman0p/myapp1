import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  width = "fit-content", 
  delay = 0.2, 
  duration = 0.8,
  y = 40,
  x = 0,
  className 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y, x },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
