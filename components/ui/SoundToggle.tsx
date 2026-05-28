"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SoundToggle({ onToggle }: { onToggle: (enabled: boolean) => void }) {
  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    const next = !enabled;
    setEnabled(next);
    onToggle(next);
  };

  return (
    <motion.button
      id="sound-toggle"
      className="fixed top-4 right-4 z-50 border-2 border-ink bg-paper px-3 py-2 hover:bg-ink hover:text-paper transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      title={enabled ? "Mute sounds" : "Enable sounds"}
    >
      <span className="label-text text-xs font-bold tracking-widest">
        {enabled ? "🔊 SOUND" : "🔇 MUTED"}
      </span>
    </motion.button>
  );
}
