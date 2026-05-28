"use client";

import { motion } from "framer-motion";

interface AdBlockProps {
  title: string;
  body: string;
  cta?: string;
  variant?: "horizontal" | "vertical" | "small";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function AdBlock({
  title,
  body,
  cta,
  variant = "vertical",
  className = "",
  href,
  onClick,
}: AdBlockProps) {
  return (
    <motion.div
      className={`vintage-ad ${className}`}
      whileHover={{ scale: 1.01 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Top ornament */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="h-px flex-1 bg-ink opacity-50" />
        <span className="text-ink opacity-50 text-xs">★</span>
        <div className="h-px flex-1 bg-ink opacity-50" />
      </div>

      <p className="label-text text-xs text-ink-faded mb-1 tracking-widest">Advertisement</p>
      
      <h3
        className="font-abril text-ink ink-bleed"
        style={{ fontSize: "clamp(1rem, 2vw, 1.4rem)", lineHeight: 1.1 }}
      >
        {title}
      </h3>

      <div className="h-px bg-ink opacity-30 my-2" />

      <p className="body-text text-xs text-ink-faded">{body}</p>

      {cta && (
        <div className="mt-2 border border-ink inline-block px-3 py-1 cursor-pointer hover:bg-ink hover:text-paper transition-colors">
          {href ? (
            <a href={href} className="label-text text-xs font-bold tracking-widest block">
              {cta}
            </a>
          ) : onClick ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
              className="label-text text-xs font-bold tracking-widest block bg-transparent border-0 cursor-pointer p-0 text-left font-inter w-full h-full"
            >
              {cta}
            </button>
          ) : (
            <span className="label-text text-xs font-bold tracking-widest">{cta}</span>
          )}
        </div>
      )}

      {/* Bottom ornament */}
      <div className="flex items-center justify-center gap-2 mt-2">
        <div className="h-px flex-1 bg-ink opacity-50" />
        <span className="text-ink opacity-50 text-xs">★</span>
        <div className="h-px flex-1 bg-ink opacity-50" />
      </div>
    </motion.div>
  );
}
