"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function HeroCopy({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="max-w-2xl"
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
