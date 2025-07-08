import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 max-w-md w-full relative border border-yellow-400 transition-colors duration-500"
            initial={{ scale: 0.95, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 40 }}
            transition={{ type: "spring", duration: 0.4 }}
          >
            <button
              className="absolute top-4 right-4 bg-yellow-400 text-black text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              onClick={onClose}
              aria-label="Close modal"
              tabIndex={0}
            >
              &times;
            </button>
            {title && <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-yellow-500 drop-shadow-lg tracking-tight leading-tight">{title}</h2>}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 