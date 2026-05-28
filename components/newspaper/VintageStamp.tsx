"use client";

import { motion } from "framer-motion";

interface VintageStampProps {
  text: string;
  color?: string;
  delay?: number;
  className?: string;
}

export default function VintageStamp({
  text,
  color = "#c9a227",
  delay = 0,
  className = "",
}: VintageStampProps) {
  return (
    <motion.div
      className={`inline-block ${className}`}
      initial={{ scale: 3, rotate: -20, opacity: 0 }}
      animate={{ scale: 1, rotate: -8, opacity: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay,
      }}
    >
      <div
        className="relative px-3 py-1.5"
        style={{
          border: `3px solid ${color}`,
          color: color,
          borderRadius: "2px",
        }}
      >
        {/* Inner dashed border */}
        <div
          className="absolute inset-1 pointer-events-none"
          style={{ border: `1px dashed ${color}`, opacity: 0.5 }}
        />
        <span
          className="label-text font-bold tracking-widest text-xs block text-center"
          style={{ color: color }}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );
}
