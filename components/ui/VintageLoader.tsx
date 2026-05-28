"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VintageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  const steps = [
    "Warming up the printing press...",
    "Mixing ink and paper...",
    "Typesetting headlines...",
    "Applying vintage filters...",
    "The Developer Daily is ready.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    setStep(Math.floor((progress / 100) * (steps.length - 1)));
  }, [progress]);

  return (
    <motion.div
      className="loading-screen grain-overlay"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ink blot animation */}
      <motion.div
        className="w-3 h-3 rounded-full bg-paper mb-6"
        animate={{
          scale: [1, 1.5, 1, 0.8, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Title */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1
          className="text-paper ink-bleed"
          style={{
            fontFamily: "'Abril Fatface', cursive",
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            letterSpacing: "0.08em",
          }}
        >
          The Developer Daily
        </h1>
        <p className="label-text text-xs tracking-widest mt-2" style={{ color: "#c9a227" }}>
          ★ PREMIUM EDITION ★
        </p>
      </motion.div>

      {/* Progress */}
      <div className="w-64 mx-auto mb-4">
        <div className="h-0.5 bg-paper opacity-20 relative">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Status text */}
      <AnimatePresence mode="wait">
        <motion.p
          key={step}
          className="label-text text-xs tracking-widest text-center"
          style={{ color: "#c9a227", opacity: 0.8 }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {steps[step]}
        </motion.p>
      </AnimatePresence>

      {/* Rotating ink dots */}
      <div className="flex gap-1.5 mt-6">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gold"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
  );
}
