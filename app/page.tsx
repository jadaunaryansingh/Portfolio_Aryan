"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import VintageLoader from "@/components/ui/VintageLoader";
import PageNavigator from "@/components/ui/PageNavigator";

import AIAssistant from "@/components/ui/AIAssistant";
import Page1FrontCover from "@/components/pages/Page1FrontCover";
import Page2About from "@/components/pages/Page2About";
import Page3Experience from "@/components/pages/Page3Experience";
import Page4Projects from "@/components/pages/Page4Projects";
import Page5Research from "@/components/pages/Page5Research";
import Page6Certifications from "@/components/pages/Page6Certifications";
import Page7Skills from "@/components/pages/Page7Skills";
import Page8Contact from "@/components/pages/Page8Contact";

const pages = [
  { component: Page1FrontCover, name: "Front Cover" },
  { component: Page2About, name: "About Me" },
  { component: Page3Experience, name: "Experience" },
  { component: Page4Projects, name: "Projects" },
  { component: Page5Research, name: "Research Paper" },
  { component: Page6Certifications, name: "Certifications" },
  { component: Page7Skills, name: "Skills" },
  { component: Page8Contact, name: "Classifieds" },
];

// Page flip animation variants
const pageVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    rotateY: direction > 0 ? 15 : -15,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.3 },
      rotateY: { duration: 0.5 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    rotateY: direction > 0 ? -15 : 15,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 200, damping: 25 },
      opacity: { duration: 0.3 },
    },
  }),
};

// Page corner fold hint
function PageCornerHint({ side }: { side: "left" | "right" }) {
  return (
    <motion.div
      className={`fixed bottom-0 ${side === "right" ? "right-0" : "left-0"} z-40 pointer-events-none`}
      animate={{
        [side === "right" ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: ["0px", "20px", "0px"],
      }}
      transition={{ duration: 3, repeat: Infinity, delay: side === "right" ? 0 : 1.5 }}
    >
      <div
        className="w-12 h-12"
        style={{
          background: `linear-gradient(${side === "right" ? "135deg" : "45deg"}, transparent 50%, rgba(0,0,0,0.1) 50%)`,
        }}
      />
    </motion.div>
  );
}



export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        navigateTo(Math.min(pages.length - 1, currentPage + 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        navigateTo(Math.max(0, currentPage - 1));
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentPage]);

  // Reset window scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = useCallback(
    (page: number) => {
      if (page === currentPage) return;
      setDirection(page > currentPage ? 1 : -1);
      setCurrentPage(page);
    },
    [currentPage]
  );

  const CurrentPage = pages[currentPage].component;

  return (
    <main
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", background: "#f5e9d4" }}
    >
      {/* Loading screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6 }}
          >
            <VintageLoader onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>


          {/* Paper corner hints (desktop only) */}
          {!isMobile && (
            <>
              <PageCornerHint side="left" />
              <PageCornerHint side="right" />
            </>
          )}

          {/* Page flip container — Desktop & Mobile */}
          <div
            className="page-flip-container"
            style={{ perspective: "2000px", minHeight: "100dvh" }}
          >
            {/* Newspaper drop shadow */}
            <div
              className="fixed inset-0 pointer-events-none z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.15) 100%)",
              }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full min-h-screen"
                style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) {
                    navigateTo(Math.min(pages.length - 1, currentPage + 1));
                  } else if (info.offset.x > 80) {
                    navigateTo(Math.max(0, currentPage - 1));
                  }
                }}
              >
                {/* Page fold shadow */}
                <div className="page-fold-shadow" />
                {/* Left page fold shadow */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-10 pointer-events-none z-10"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.08), transparent)",
                  }}
                />
                <CurrentPage onNavigate={navigateTo} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Page Navigator */}
          <PageNavigator
            currentPage={currentPage}
            totalPages={pages.length}
            onNavigate={navigateTo}
          />

          {/* Page indicator dots (desktop) */}
          {!isMobile && (
            <div className="fixed top-1/2 right-4 -translate-y-1/2 z-40 flex flex-col gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  id={`page-dot-${i}`}
                  onClick={() => navigateTo(i)}
                  className={`w-2 h-2 border border-ink transition-all duration-300 ${
                    currentPage === i ? "bg-ink scale-125" : "bg-transparent"
                  }`}
                  title={pages[i].name}
                />
              ))}
            </div>
          )}

          {/* AI Assistant */}
          <AIAssistant />


        </>
      )}
    </main>
  );
}
