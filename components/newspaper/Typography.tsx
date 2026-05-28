"use client";

import { motion } from "framer-motion";

interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <motion.blockquote
      className="pull-quote my-6 px-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-ink ink-bleed">{quote}</p>
      {attribution && (
        <footer className="mt-2 label-text text-ink-faded text-xs">
          — {attribution}
        </footer>
      )}
    </motion.blockquote>
  );
}

interface DropCapParagraphProps {
  text: string;
  className?: string;
}

export function DropCapParagraph({ text, className = "" }: DropCapParagraphProps) {
  return (
    <p className={`drop-cap body-text mb-4 ${className}`}>
      {text}
    </p>
  );
}

interface SectionDividerProps {
  label?: string;
}

export function SectionDivider({ label }: SectionDividerProps) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-ink" />
      {label && (
        <span className="label-text text-xs tracking-widest text-ink-faded px-2">
          {label}
        </span>
      )}
      {!label && <span className="text-gold">❖</span>}
      <div className="flex-1 h-px bg-ink" />
    </div>
  );
}

interface OrnateRuleProps {
  thick?: boolean;
}

export function OrnateRule({ thick = false }: OrnateRuleProps) {
  return (
    <div className={`w-full ${thick ? "border-t-4 border-b-2 border-ink mt-0.5" : "border-t-2 border-ink"} my-2`} />
  );
}
