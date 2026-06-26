"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { COMBOS } from "./data";
import ContactPopup from "@/components/landing/ContactPopup";

function ComboCard({ combo, index }: { combo: (typeof COMBOS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        className={`rounded-2xl border p-6 flex flex-col gap-5 relative ${
          combo.highlight
            ? "border-amber-400 shadow-xl bg-white"
            : "border-gray-200 bg-gray-50"
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.13,
        }}
        whileHover={{
          y: -6,
          boxShadow: "0 20px 48px rgba(0,0,0,0.12)",
        }}
      >
        {combo.highlight && (
          <motion.div
            className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4A468] text-white text-xs font-bold px-4 py-1 rounded-full tracking-widest"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.35 + index * 0.13 }}
          >
            BEST SELLER
          </motion.div>
        )}

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
            {combo.name}
          </p>
          <p className="text-2xl font-black text-gray-900">
            {combo.price}
          </p>
        </div>

        <div className="relative w-full h-56 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={combo.image}
            alt={combo.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <ul className="flex flex-col gap-2">
          {combo.features.map((f, i) => (
            <motion.li
              key={f}
              className="flex items-center gap-2 text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.35,
                delay: 0.4 + i * 0.07 + index * 0.13,
              }}
            >
              <span className="text-green-500">✓</span>
              {f}
            </motion.li>
          ))}
        </ul>

        <motion.button
          onClick={() => setShowContact(true)}
          className={`mt-auto w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
            combo.highlight
              ? "bg-[#C4A468] hover:bg-[#b8935a] text-white"
              : "border border-gray-300 hover:border-gray-500 text-gray-700 bg-white"
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          MUA NGAY
        </motion.button>
      </motion.div>

      {showContact && (
        <ContactPopup
          productName={combo.name}
          onClose={() => setShowContact(false)}
        />
      )}
    </>
  );
}

export default function ComboSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="combo" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase mb-2">
            Ưu đãi đặc biệt
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Chọn gói sản phẩm phù hợp với bạn
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {COMBOS.map((combo, i) => (
            <ComboCard key={combo.name} combo={combo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}