"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PageNavigatorProps {
  currentPage: number;
  totalPages: number;
  onNavigate: (page: number) => void;
}

const pageNames = [
  "Front Cover",
  "About Me",
  "Experience",
  "Projects",
  "Research Paper",
  "Certifications",
  "Skills",
  "Contact",
];

export default function PageNavigator({
  currentPage,
  totalPages,
  onNavigate,
}: PageNavigatorProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {/* Page menu */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="bg-paper border-2 border-ink shadow-lg mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {pageNames.map((name, i) => (
              <button
                key={i}
                id={`page-nav-${i}`}
                onClick={() => { onNavigate(i); setShowMenu(false); }}
                className={`block w-full text-left px-4 py-2 label-text text-xs tracking-wider border-b border-ink last:border-0 hover:bg-ink hover:text-paper transition-colors ${
                  currentPage === i ? "bg-ink text-paper" : "text-ink"
                }`}
              >
                <span className="opacity-50 mr-2">{String(i + 1).padStart(2, "0")}</span>
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation controls */}
      <div className="flex items-center gap-2">
        <button
          id="page-prev"
          onClick={() => onNavigate(Math.max(0, currentPage - 1))}
          disabled={currentPage === 0}
          className="bg-ink text-paper px-3 py-2 label-text text-xs disabled:opacity-30 hover:bg-brown transition-colors"
        >
          ← PREV
        </button>

        <button
          id="page-menu-toggle"
          onClick={() => setShowMenu((prev) => !prev)}
          className="border-2 border-ink bg-paper text-ink px-3 py-2 label-text text-xs hover:bg-ink hover:text-paper transition-colors"
        >
          {String(currentPage + 1).padStart(2, "0")} / {totalPages}
        </button>

        <button
          id="page-next"
          onClick={() => onNavigate(Math.min(totalPages - 1, currentPage + 1))}
          disabled={currentPage === totalPages - 1}
          className="bg-ink text-paper px-3 py-2 label-text text-xs disabled:opacity-30 hover:bg-brown transition-colors"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
