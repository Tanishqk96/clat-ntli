import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlassyAlert() {
  const [show, setShow] = useState(true);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[98vw] max-w-xl sm:top-8 px-2 sm:px-6 py-2 sm:py-4 bg-white/30 dark:bg-black/40 backdrop-blur-lg border border-yellow-400 shadow-2xl rounded-2xl flex items-center gap-2 sm:gap-4"
          style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl">🚀</span>
          <div className="flex-1">
            <div className="font-bold text-base sm:text-lg md:text-xl text-yellow-400 mb-1">CLAT Crash Course 2026 – Limited Seats!</div>
            <div className="text-xs sm:text-sm md:text-base text-black dark:text-white">Fast-track your law entrance prep with our luxury crash course batch. <span className="font-semibold text-yellow-400">Book now</span> for exclusive mentorship, live classes, and more.</div>
          </div>
          <button
            onClick={() => setShow(false)}
            className="ml-1 sm:ml-2 text-yellow-400 hover:text-yellow-500 text-xl sm:text-2xl font-bold focus:outline-none"
            aria-label="Dismiss"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 