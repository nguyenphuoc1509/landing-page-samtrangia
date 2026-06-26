"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ContactPopupProps {
  productName?: string;
  onClose: () => void;
}

export default function ContactPopup({ productName, onClose }: ContactPopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.92, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 16 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div className="bg-[#C4A468] px-6 py-5 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
            {productName && (
              <p className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-1">
                {productName}
              </p>
            )}
            <h3 className="text-white text-lg font-bold">Tư vấn & đặt hàng</h3>
            <p className="text-white/75 text-sm mt-1">
              Liên hệ ngay để được hỗ trợ tốt nhất
            </p>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-3">
            {/* Phone */}
            
            <a href="tel:0901234567"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#C4A468]/40 hover:bg-amber-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 text-lg shrink-0">
                📞
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-0.5">Hotline</p>
                <p className="text-sm font-semibold text-gray-900">0901 234 567</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#C4A468] transition-colors">›</span>
            </a>

            {/* Zalo */}
            
            <a href="https://zalo.me/0901234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#C4A468]/40 hover:bg-amber-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg shrink-0">
                💬
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-0.5">Zalo</p>
                <p className="text-sm font-semibold text-gray-900">0901 234 567</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#C4A468] transition-colors">›</span>
            </a>

            {/* Facebook */}
            
            <a  href="https://m.me/yourpage"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 hover:border-[#C4A468]/40 hover:bg-amber-50/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 text-lg shrink-0">
                📱
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 mb-0.5">Facebook Messenger</p>
                <p className="text-sm font-semibold text-gray-900">Sâm Ngọc Linh Official</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#C4A468] transition-colors">›</span>
            </a>

            {/* Note */}
            <p className="text-center text-xs text-gray-400 mt-1">
              🕐 Hỗ trợ 7:00 – 21:00 hàng ngày
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}   