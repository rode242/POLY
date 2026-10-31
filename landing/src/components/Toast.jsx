import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToastStore } from '../store/useToastStore';

export function Toast() {
  const isVisible = useToastStore((state) => state.isVisible);
  const message = useToastStore((state) => state.message);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-6 right-6 z-50 pointer-events-auto"
        >
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-xl text-sm font-medium text-gray-800">
            <div
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: 'rgb(168, 85, 247)' }}
            />
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

