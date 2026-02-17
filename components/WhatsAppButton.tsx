"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-primary text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium relative mr-2"
          >
            Agende sua avaliação agora!
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rotate-45 transform skew-x-12" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 relative cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
      </motion.a>
    </div>
  );
}
