"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { INGREDIENTS } from "./data";

function IngredientCard({ item, index }: { item: (typeof INGREDIENTS)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.12,
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
    >
      <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex flex-col justify-center min-h-[80px]">
        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide leading-tight mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function IngredientsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[#C4A468] text-xs font-semibold tracking-widest uppercase mb-3">
            Thành phần tinh túy
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Tinh hoa từ Sâm Ngọc Linh
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {INGREDIENTS.map((item, i) => (
            <IngredientCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}