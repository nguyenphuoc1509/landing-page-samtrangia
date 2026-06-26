"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { TESTIMONIALS } from "./data";
import StarRating from "./StarRating";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase mb-3">
            Khách hàng nói gì
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Cảm nhận từ khách hàng
          </h2>
        </motion.div>

        <div className="relative">
          <motion.button
            onClick={() =>
              setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
            }
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ‹
          </motion.button>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  className={`bg-white rounded-2xl p-6 border transition-all ${
                    i === active
                      ? "border-amber-400 shadow-md"
                      : "border-gray-100 opacity-80"
                  }`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
                >
                  <StarRating rating={t.rating} />
                  <p className="text-gray-600 text-sm leading-relaxed my-4 italic">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C4A468] to-[#b8965a] flex items-center justify-center text-white text-sm font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 + i * 0.1 }}
                    >
                      {t.name[0]}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.button
            onClick={() =>
              setActive((prev) => (prev + 1) % TESTIMONIALS.length)
            }
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:shadow-md transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ›
          </motion.button>
        </div>

        <motion.div
          className="flex justify-center gap-2 mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {TESTIMONIALS.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === active ? "bg-[#C4A468]" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.4 }}
              animate={i === active ? { width: 20 } : { width: 8 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
