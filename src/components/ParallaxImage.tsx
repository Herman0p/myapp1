import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  offset?: number;
}

export default function ParallaxImage({ src, alt, className, offset = 50 }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.1 }}
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
